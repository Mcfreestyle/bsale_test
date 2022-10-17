/**
 * Consume API
 * @param {string} path - Endpoint path
 * @returns {Array, Object} - API response
 */
async function requestAPI(path) {
  return await $.ajax({ url: API_URL + path });
}
