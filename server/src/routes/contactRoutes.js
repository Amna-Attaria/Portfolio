const express = require('express')
const router = express.Router()
const { submitContact, getAllContacts } = require('../controllers/contactController')
const { contactValidationRules, validate } = require('../validations/contactValidation')

router.post('/', contactValidationRules, validate, submitContact)
router.get('/', getAllContacts)

module.exports = router
