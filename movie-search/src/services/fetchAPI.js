import debounce from '@/utils/debounce'

const URL_BASE = 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8'

async function fetchAPI(query, page, callback) {
  if (callback) callback()

  let url = URL_BASE
  if (!query) {
    return
  } else {
    url = `${URL_BASE}&s=${query}`
  }

  if (page) {
    url = `${URL_BASE}&s=${query}&page=${page}`
  }

  try {
    const response = await fetch(url)
    if (response.ok) {
      try {
        const data = await response.json()
        return data
      } catch (e) {
        throw new Error(`Invalid JSON: ${e}`)
      }
    }
  } catch (e) {
    throw new Error(`API Fetch Error: ${e}`)
  }
}

const fetchAPIDebounced = debounce(fetchAPI, 400)

export default fetchAPIDebounced
