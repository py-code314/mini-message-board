const db = require('../db/queries')
const {
  body,
  validationResult,
  matchedData,
} = require('express-validator')

// Error messages
const alphaErr = 'must only contain letters.'
const lengthErr = 'must be between 1 and 255 characters.'
const emptyErr = 'must not be empty.'

// Validation rules
const validateMsg = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage(`Name ${emptyErr}`)
    .bail()
    .isAlpha()
    .withMessage(`Name ${alphaErr}`)
    .bail()
    .isLength({ min: 1, max: 255 })
    .withMessage(`Name ${lengthErr}`),
  body('message').trim().notEmpty().withMessage(`Message ${emptyErr}`),
]

// Show new message form
async function getNewMsgForm(req, res) {
  res.render('pages/form', { title: 'New Message' })
}

// Validate and add new message
addNewMsg = [
  validateMsg,
  async (req, res) => {
    // Validate request
    const errors = validationResult(req)
   

    // Show errors if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).render('pages/form', {
        title: 'New Message',
        errors: errors.array(),
      })
    }

    const { username, message } = matchedData(req)
    console.log('message in controller:', message)
    await db.insertMsg(username, message)
    res.redirect('/')
  }
]

module.exports = {
  getNewMsgForm,
  addNewMsg
}