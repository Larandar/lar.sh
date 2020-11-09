import { defaultRedirect, redirects } from './redirects'

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Get the URL to redirect for a given path
 * @param {String} path
 * @returns {URL} url to return
 */
const redirectTarget = path => redirects[path] || defaultRedirect

/**
 * Respond with hello worker text
 * @param {Request} request
 * @returns {Response} http response
 */
async function handleRequest(request) {
    const url = new URL(request.url)
    const redirectUrl = redirectTarget(url.pathname)
    return Response.redirect(redirectUrl, 308)
}
