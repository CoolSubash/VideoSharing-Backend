const express = require('express')

const router = express.Router()
const { signinlogic, signuplogic } = require('../Controller/auth.js')
const verifyToken = require('../middleware/verifyToken.js')
// signin

router.post('/signin', signinlogic)
// signup
router.post('/signup', signuplogic)

module.exports = router
