module.exports =
class MissingParamError extends Error {
  constructor (paramName) {
    super(`MissingParam: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
