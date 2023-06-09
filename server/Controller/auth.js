const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../Model/User.js')
const createError = require('../utils/createError.js')

const signuplogic = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ ...req.body, password: hash })

    await newUser.save()
    res.status(200).send('User has been created!')
  } catch (err) {
    next(err)
  }
}

const signinlogic = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name })

    if (!user) return next(createError(404, 'User not found!'))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)

    if (!isCorrect) return next(createError(400, 'Wrong Credentials!'))

    const token = jwt.sign({ id: user._id }, process.env.JWT)
    const { password, ...others } = user._doc

    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others)
  } catch (err) {
    next(err)
  }
}

module.exports = { signinlogic, signuplogic }
