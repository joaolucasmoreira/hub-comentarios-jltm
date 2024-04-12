const express = require('express');
const CommentRouter = express.Router()
const CommentController = require('../controller/comment.controller.js')

CommentRouter.get('/', CommentController.getComments)

module.exports = CommentRouter;