function handleFetchResponse (res) {
  if (!res.ok) {
    const errors = {
      400: 'Server does not understand given command',
      401: 'You are not authorized yet to do this action',
      403: 'You are not authorized to do this action',
      404: 'The requested resource was not found',
      405: 'The requested HTTP verb is not allowed on this resource',
      500: 'Something went wrong in the server',
      501: 'This feature is not (yet) available',
      502: 'The server was unable to connect to a required resource',
      503: 'This service is (temporarily) unavailable',
      504: 'The server was unable to get a timely response from a required resource'
    }
    if (res.status === 401) {
      // TODO signout
      console.log('Unauthorized')
    }
    throw new Error(res.status ? `${res.status}: ${errors[res.status]}` : 'An unexpected error has occured')
  }
  if (res.headers.get('content-type').indexOf('application/json') >= 0) return res.json()
  else return res.text()
}

async function fetchStar (path, method, body, headers, isJson = true) {
  const obj = {
    method,
    headers
  }

  if (body) {
    if (isJson) obj.body = JSON.stringify(body)
    else obj.body = body
  }
  const res = await fetch(path, obj)
  return handleFetchResponse(res)
}

class VaSe {
  static async _fetchVaSe (path, method, body) {
    if (path[0] !== '/') path = `/${path}`

    const token = localStorage.getItem('auth_token')
    const headers = {
      'content-type': 'application/json',
      token
    }
    return fetchStar('/VaSe' + path, method, body, headers)
  }

  static get (path, body) {
    return this._fetchVaSe(path, 'GET', body)
  }

  static patch (path, body) {
    return this._fetchVaSe(path, 'PATCH', body)
  }

  static post (path, body) {
    return this._fetchVaSe(path, 'POST', body)
  }

  static put (path, body) {
    return this._fetchVaSe(path, 'PUT', body)
  }

  static delete (path, body) {
    return this._fetchVaSe(path, 'DELETE', body)
  }
}

export {
  VaSe
}
