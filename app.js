const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const notes = require('./routes/notes')
const notes_show = require('./routes/notes_show')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  next()
})

app.use('/', index)
app.use('/notes', notes)
app.use('/notes/1', notes_show)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

module.exports = app
