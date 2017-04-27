/* global fetch */
export default function (url, options = {retries: 1, rejectCodes: []}) {
  const retries = options.retries
  const rejectCodes = options.rejectCodes.join(' ')
  let delay

  delete options.rejectCodes
  delete options.retries

  if (options.delay) {
    delay = options.delay
    delete options.delay
  }

  return new Promise((resolve, reject) => {
    let count = 1
    const attempt = () => {
      return fetch(url, options)
        .then(response => {
          if (rejectCodes.includes(response.status.toString()) && count < retries) {
            count++
            delay ? setTimeout(attempt, delay) : attempt()
          } else {
            resolve(response)
          }
        })
        .catch((error) => {
          if (count < retries) {
            count++
            delay ? setTimeout(attempt, delay) : attempt()
          } else {
            reject(error)
          }
        })
    }
    attempt()
  })
}
