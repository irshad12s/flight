// // validation/flightValidation.js
// const Joi = require('joi');

// const flightSchema = Joi.object({
//   id: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Flight ID is required.',
//       'any.required': 'Flight ID is required.'
//     }),
  
//   type: Joi.string()
//     .valid('One Way', 'Round Trip', 'Multi-City')
//     .required()
//     .messages({
//       'any.only': 'Type must be either One Way, Round Trip, or Multi-City.',
//       'string.empty': 'Flight type is required.',
//       'any.required': 'Flight type is required.'
//     }),
  
//   titleName1: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Departure title name is required.',
//       'any.required': 'Departure title name is required.'
//     }),
  
//   titleDate1: Joi.date()
//     .iso()
//     .required()
//     .messages({
//       'date.base': 'Departure date must be a valid date.',
//       'date.format': 'Departure date must be in ISO format (YYYY-MM-DD).',
//       'any.required': 'Departure date is required.'
//     }),
  
//   place1: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Departure place is required.',
//       'any.required': 'Departure place is required.'
//     }),
  
//   time1: Joi.string()
//     .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
//     .required()
//     .messages({
//       'string.pattern.base': 'Departure time must be in the format HH:MM AM/PM.',
//       'string.empty': 'Departure time is required.',
//       'any.required': 'Departure time is required.'
//     }),
  
//   titleName2: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Arrival title name is required.',
//       'any.required': 'Arrival title name is required.'
//     }),
  
//   titleDate2: Joi.date()
//     .iso()
//     .required()
//     .messages({
//       'date.base': 'Arrival date must be a valid date.',
//       'date.format': 'Arrival date must be in ISO format (YYYY-MM-DD).',
//       'any.required': 'Arrival date is required.'
//     }),
  
//   place2: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Arrival place is required.',
//       'any.required': 'Arrival place is required.'
//     }),
  
//   time2: Joi.string()
//     .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
//     .required()
//     .messages({
//       'string.pattern.base': 'Arrival time must be in the format HH:MM AM/PM.',
//       'string.empty': 'Arrival time is required.',
//       'any.required': 'Arrival time is required.'
//     }),
  
//   performance: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Performance information is required.',
//       'any.required': 'Performance information is required.'
//     }),
  
//   refundable: Joi.string()
//     .valid('Refundable', 'Non-refundable')
//     .required()
//     .messages({
//       'any.only': 'Refundable must be either Refundable or Non-refundable.',
//       'string.empty': 'Refundable status is required.',
//       'any.required': 'Refundable status is required.'
//     }),
  
//   newTaka: Joi.string()
//     .pattern(/^\d{1,3}(,\d{3})*$/)
//     .required()
//     .messages({
//       'string.pattern.base': 'New Taka must be a valid currency format (e.g., 20,000).',
//       'string.empty': 'New Taka price is required.',
//       'any.required': 'New Taka price is required.'
//     }),
  
//   oldTaka: Joi.string()
//     .pattern(/^\d{1,3}(,\d{3})*$/)
//     .required()
//     .messages({
//       'string.pattern.base': 'Old Taka must be a valid currency format (e.g., 25,000).',
//       'string.empty': 'Old Taka price is required.',
//       'any.required': 'Old Taka price is required.'
//     }),
  
//   extra1: Joi.string()
//     .required()
//     .messages({
//       'string.empty': 'Extra information is required.',
//       'any.required': 'Extra information is required.'
//     }),
  
//   passengers: Joi.number()
//     .integer()
//     .min(1)
//     .required()
//     .messages({
//       'number.base': 'Passengers must be a number.',
//       'number.integer': 'Passengers must be an integer.',
//       'number.min': 'There must be at least one passenger.',
//       'any.required': 'Number of passengers is required.'
//     }),
  
//   showMoreInfo: Joi.array()
//     .items(
//       Joi.object({
//         id: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Service ID is required.',
//             'any.required': 'Service ID is required.'
//           }),
        
//         serviceId: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Service ID is required.',
//             'any.required': 'Service ID is required.'
//           }),
        
//         serviceName: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Service name is required.',
//             'any.required': 'Service name is required.'
//           }),
        
//         duration: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Duration is required.',
//             'any.required': 'Duration is required.'
//           }),
        
//         titleName1: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Departure title name is required.',
//             'any.required': 'Departure title name is required.'
//           }),
        
//         titleDate1: Joi.date()
//           .iso()
//           .required()
//           .messages({
//             'date.base': 'Departure date must be a valid date.',
//             'date.format': 'Departure date must be in ISO format (YYYY-MM-DD).',
//             'any.required': 'Departure date is required.'
//           }),
        
//         place1: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Departure place is required.',
//             'any.required': 'Departure place is required.'
//           }),
        
//         time1: Joi.string()
//           .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
//           .required()
//           .messages({
//             'string.pattern.base': 'Departure time must be in the format HH:MM AM/PM.',
//             'string.empty': 'Departure time is required.',
//             'any.required': 'Departure time is required.'
//           }),
        
//         titleName2: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Arrival title name is required.',
//             'any.required': 'Arrival title name is required.'
//           }),
        
//         titleDate2: Joi.date()
//           .iso()
//           .required()
//           .messages({
//             'date.base': 'Arrival date must be a valid date.',
//             'date.format': 'Arrival date must be in ISO format (YYYY-MM-DD).',
//             'any.required': 'Arrival date is required.'
//           }),
        
//         place2: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Arrival place is required.',
//             'any.required': 'Arrival place is required.'
//           }),
        
//         time2: Joi.string()
//           .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/)
//           .required()
//           .messages({
//             'string.pattern.base': 'Arrival time must be in the format HH:MM AM/PM.',
//             'string.empty': 'Arrival time is required.',
//             'any.required': 'Arrival time is required.'
//           }),
        
//         performance: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Performance information is required.',
//             'any.required': 'Performance information is required.'
//           }),
        
//         refundable: Joi.string()
//           .valid('Refundable', 'Non-refundable')
//           .required()
//           .messages({
//             'any.only': 'Refundable must be either Refundable or Non-refundable.',
//             'string.empty': 'Refundable status is required.',
//             'any.required': 'Refundable status is required.'
//           }),
        
//         newTaka: Joi.string()
//           .pattern(/^\d{1,3}(,\d{3})*$/)
//           .required()
//           .messages({
//             'string.pattern.base': 'New Taka must be a valid currency format (e.g., 20,000).',
//             'string.empty': 'New Taka price is required.',
//             'any.required': 'New Taka price is required.'
//           }),
        
//         oldTaka: Joi.string()
//           .pattern(/^\d{1,3}(,\d{3})*$/)
//           .required()
//           .messages({
//             'string.pattern.base': 'Old Taka must be a valid currency format (e.g., 25,000).',
//             'string.empty': 'Old Taka price is required.',
//             'any.required': 'Old Taka price is required.'
//           }),
        
//         extra1: Joi.string()
//           .required()
//           .messages({
//             'string.empty': 'Extra information is required.',
//             'any.required': 'Extra information is required.'
//           }),
//       })
//     )
//     .required()
//     .messages({
//       'array.base': 'ShowMoreInfo must be an array.',
//       'array.includesRequiredUnknowns': 'Each showMoreInfo item must be a valid object.',
//       'any.required': 'ShowMoreInfo is required.'
//     })
// });

// module.exports = flightSchema;

const mongoose = require('mongoose');

const showMoreInfoSchema = new mongoose.Schema({
    serviceId: { type: String, required: [true, 'Service ID is required'] },
    serviceName: { type: String, required: [true, 'Service name is required'] },
    duration: { type: String, required: [true, 'Duration is required'] },
    titleName1: { type: String, required: true },
    titleDate1: { type: String, required: true },
    place1: { type: String, required: true },
    time1: { type: String, required: true },
    titleName2: { type: String, required: true },
    titleDate2: { type: String, required: true },
    place2: { type: String, required: true },
    time2: { type: String, required: true },
    performance: { type: String, required: true },
    refundable: { type: String, required: true },
    newTaka: { type: String, required: true },
    oldTaka: { type: String },
    extra1: { type: String }
});

const flightSchema = new mongoose.Schema({
    id: { type: String, required: [true, 'Flight ID is required'] },
    type: { type: String, required: [true, 'Flight type is required'], enum: ['One Way', 'Round Trip', 'Multi-City'] },
    titleName1: { type: String, required: [true, 'Title Name 1 is required'] },
    titleDate1: { type: String, required: [true, 'Title Date 1 is required'] },
    place1: { type: String, required: [true, 'Place 1 is required'] },
    time1: { type: String, required: [true, 'Time 1 is required'] },
    titleName2: { type: String, required: [true, 'Title Name 2 is required'] },
    titleDate2: { type: String, required: [true, 'Title Date 2 is required'] },
    place2: { type: String, required: [true, 'Place 2 is required'] },
    time2: { type: String, required: [true, 'Time 2 is required'] },
    performance: { type: String, required: true },
    refundable: { type: String, required: true },
    newTaka: { type: String, required: true },
    oldTaka: { type: String },
    extra1: { type: String },
    passengers: { type: Number, min: [1, 'At least one passenger is required'] },
    showMoreInfo: [showMoreInfoSchema]
});

module.exports = mongoose.model('Flight', flightSchema);
