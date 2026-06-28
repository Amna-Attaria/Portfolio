const Contact = require('../models/Contact')
const { sendContactNotification, sendAutoReply } = require('../services/emailService')

const submitContact = async (req, res) => {
  try {
    const { name, email, service, message } = req.body
    const contact = await Contact.create({ name, email, service: service || 'Not specified', message, ipAddress: req.ip })

    // Send emails non-blocking
    try {
      await Promise.all([
        sendContactNotification({ name, email, service, message }),
        sendAutoReply({ name, email }),
      ])
    } catch (emailError) {
      console.error('Email send failed:', emailError.message)
    }

    res.status(201).json({ success: true, message: "Message received! I'll get back to you within 24 hours.", data: { id: contact._id } })
  } catch (error) {
    console.error('Contact error:', error.message)
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' })
  }
}

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100)
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

module.exports = { submitContact, getAllContacts }
