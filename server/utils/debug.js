module.exports = global.serverLog = (...msg) => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(...msg)
  } else {
    //...
  }
}