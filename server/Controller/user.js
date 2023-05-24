const createError = require('../utils/createError.js')
const User = require('../Model/User.js')
const Video = require('../Model/Video.js')
const bcrypt = require('bcrypt')
const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateFields = {}
      if (req.body.password) {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        updateFields.password = hashedPassword
      }
      if (req.body.name) {
        updateFields.name = req.body.name
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: updateFields,
        },
        { new: true },
      )
      res.status(200).json(updatedUser)
    } catch (err) {
      next(err)
    }
  } else {
    return next(createError(403, 'You can update only your account!'))
  }
}

const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('User has been deleted.')
    } catch (err) {
      next(err)
    }
  } else {
    return next(createError(403, 'You can delete only your account!'))
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    })
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    })
    res.status(200).json('Subscription successfull.')
  } catch (err) {
    next(err)
  }
}

const unsubscribe = async (req, res, next) => {
  try {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id },
      })
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      })
      res.status(200).json('Unsubscription successfull.')
    } catch (err) {
      next(err)
    }
  } catch (err) {
    next(err)
  }
}

const like = async (req, res, next) => {
  const id = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    })
    res.status(200).json('The video has been liked.')
  } catch (err) {
    next(err)
  }
}

const dislike = async (req, res, next) => {
  const id = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    })
    res.status(200).json('The video has been disliked.')
  } catch (err) {
    next(err)
  }
}

module.exports = {
  dislike,
  like,
  subscribe,
  unsubscribe,
  update,
  getUser,
  deleteUser,
}
