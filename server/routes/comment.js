const express = require('express')
const {
  addComment,
  deleteComment,
  getComments,
} = require('../Controller/comment.js')
const verifyToken = require('../middleware/verifyToken.js')
const router = express.Router()

router.post('/', verifyToken, addComment)
router.delete('/:id', verifyToken, deleteComment)
router.get('/:videoId', getComments)

module.exports = router
