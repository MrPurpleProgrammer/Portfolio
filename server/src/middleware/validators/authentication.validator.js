const { body, validationResult } = require('express-validator')

const validateCreateRequest = () => {
  return [
    body('username').exists().notEmpty().isString().withMessage('Username is Invalid'),
    body('email').exists().notEmpty().isString().isEmail().withMessage('Email is Invalid').normalizeEmail(),
    body('password').exists().notEmpty().isLength({min: 6}).withMessage('Password must be atleast 6 digits').matches(/\d/).withMessage('Password must contain atleast one number.'),
    body('phoneNumber').blacklist('()-').exists().notEmpty().isString().isMobilePhone('any').withMessage('Invalid Phone Number'),
    body('artisanId').exists().notEmpty().isEthereumAddress().withMessage('Invalid Ethereum Address'),
  ]
}

const validateWeb2LoginRequest = () => {
  return [
    body('email').exists().notEmpty().isString().isEmail().withMessage('Username is Invalid').normalizeEmail(),
    body('password').exists().notEmpty().isLength({min: 6}).withMessage('Password must be atleast 6 digits').matches(/\d/).withMessage('Password must contain atleast one number.'),
  ]
}

const validateWeb3LoginRequest = () => {
  return [
    body('artisanId').exists().notEmpty().isEthereumAddress().withMessage('Invalid Ethereum Address'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  validateCreateRequest,
  validateWeb2LoginRequest,
  validateWeb3LoginRequest,
  validate,
}