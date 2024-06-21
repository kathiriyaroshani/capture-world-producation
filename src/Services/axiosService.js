import { http } from './http.client'

export const fetchData = (url) => http.get(url)

// simple all data  - string - contenttype = application/json || application/form-url-encoded
// file vala data  - string + files - contenttype = multipart/form-data

export const addData = (url, data, contentType = 'application/json') =>
  http.post(url, data, {
    headers: { 'content-type': contentType },
  })
export const deleteData = (url) => http.delete(url)
export const updateData = (url, data) => http.put(url, data)
