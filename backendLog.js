class Console {
  static _logLevelValidation() {
    return process.env.LOG_LEVEL !== undefined ? process.env.LOG_LEVEL : 'ERROR'
  }

  static _print(param1, param2) {
    if (param2 == undefined) {
      console.info(param1)
    } else {
      console.info(param1, param2)
    }
  }

  static info(message, item) {
    const LOG_LEVEL = this._logLevelValidation()
    if (
      LOG_LEVEL !== 'OFF' &&
      LOG_LEVEL !== 'ERROR' &&
      LOG_LEVEL !== 'WARNING'
    ) {
      this._print(message, item)
    }
  }

  static payload(message, item) {
    const LOG_LEVEL = this._logLevelValidation()
    if (LOG_LEVEL !== 'OFF' && LOG_LEVEL !== 'ERROR') {
      this._print(message, item)
    }
  }

  static error(message, item) {
    const LOG_LEVEL = this._logLevelValidation()
    if (LOG_LEVEL !== 'OFF') {
      this._print(message, item)
    }
  }
}
module.exports.Console = Console
