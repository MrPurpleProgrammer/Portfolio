const { body, validationResult } = require('express-validator')

const validateCreateRequest = () => {
  return [
    body('mediaTitle').exists().notEmpty().isString().withMessage('Title is Invalid'),
    body('storeOption').exists().notEmpty().isString().if(body('storeOption').equals('PORT') || body('storeOption').equals('IPFS')).withMessage('Store Option is Invalid'),
    body('mediaTags').exists().notEmpty().isArray({ min: 1, max: 10 }).withMessage('Media Tags are Invalid'),
    body('termAgreeOption').exists().notEmpty().isString().if(body('termAgreeOption').equals('true')).withMessage('Term Agree Option is Invalid'),
    body('walletTransactionData').exists().notEmpty().withMessage('Wallet Transaction Data is Invalid'),
    body('walletTransactionStatus').exists().notEmpty().isString().if(body('walletTransactionStatus').equals('true')).withMessage('Wallet Transaction Status is Invalid'),
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
  validate,
}