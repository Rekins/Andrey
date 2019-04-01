module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(name) {
      return !!name.trim().length
    },
  },
]
