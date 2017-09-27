import superagent from 'superagent'
import { IS_SERVER } from '../constants/common'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path
  //Means it's server
  if (IS_SERVER) {
    // Prepend host and port of the API server to the path.
    return `http://localhost:8080/${adjustedPath}`
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return `/api${adjustedPath}`
}

export default class ApiClient {
  constructor(req) {
    methods.forEach(
      (
        method //eslint-disable-line
      ) =>
        (this[method] = (path, { params, data } = {}) =>
          new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path))

            if (params) {
              request.query(params)
            }
            //Means it's server stuff
            if (IS_SERVER && req.get('cookie')) {
              request.set('cookie', req.get('cookie'))
            }
            if (data) {
              request.send(data)
            }

            request.end((err, { body } = {}) => (err ? reject(body || err) : resolve(body))); //eslint-disable-line
          })),
    )
  }

  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {} //eslint-disable-line
}
