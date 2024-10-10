export default function debounce(fn, wait) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    return new Promise((resolve, reject) => {
      timer = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }, wait)
    })
  }
}
