// controllers/userController.js
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const generateToken = require('../utilis/generateToken.js');

// Register User
exports.register = async (req, res) => {

    const {username,  email, password, confirmPassword, mobile } = req.body;

  try {

    if (!username) {
      return res.status(400).json({ message: "Username are required." });
  }

   // Check if user already exists by email
   const existingEmail = await User.findOne({ email });
   if (existingEmail) {
       return res.status(400).json({ message: 'Email already in use' });
   }

   // Check if user already exists by mobile number
   const existingMobile = await User.findOne({ mobile });
   if (existingMobile) {
       return res.status(400).json({ message: 'Mobile number already in use' });
   }

   // Validate password
   if (password !== confirmPassword) {
       return res.status(400).json({ message: 'Passwords do not match' });
   }

   // Hash the password
   const hashedPassword = await bcrypt.hash(password, 10);

   // Create and save user
   const newUser = new User({
       email,
       password: hashedPassword,
       mobile,
       username,
      
   });

   await newUser.save();
   return res.status(201).json({ message: 'User successfully registered' });
} catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Server error, please try again later' });
}
};

exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ message: 'Email/Phone and Password are required' });
    }

    const user = await User.findOne({ $or: [{ email: identifier }, { mobile: identifier }] });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid email/mobile or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Set token as an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,  // Cannot be accessed by JavaScript on the client side
      secure: process.env.NODE_ENV === 'production',  // Ensures it's only sent over HTTPS in production
      maxAge: 24 * 60 * 60 * 1000  // 1 day expiration
    });

    res.json({ message: 'Login successful', user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');  // Clear the JWT token cookie
  res.json({ message: 'Logout successful' });
};
