import express from 'express'

const router = express.Router()

const createNote = (name) => {
  return {
    id: 1,
    name: name,
    body: '# Lorem\r\n\r\n* ipsum\r\n* dolor\r\n\r\nsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    publishedAt: Date.now(),
  }
}

router.get('/', (req, res, next) => {
  res.json({
    note: createNote('Hello'),
  })
})

module.exports = router
