const rootURL = 'http://localhost:4000';

export const apiFetch = ({URL, options, cbSuccess, cbError}) => {
  const urlService = `${rootURL}/${URL}`;
  fetch(urlService, options)
    .then( res => res.ok ? res.json() : Promise.reject(res) )
    .then( res => cbSuccess(res))
    .catch( error => cbError(error))
}