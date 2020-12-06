export default function getBaseUrl(window) {
    const { protocol } = window.location;
    let { host } = window.location;
    if (host.toLowerCase().includes('localhost')) {
      // we're local, so strip 3000 and append 8080 instead
      host = 'localhost:8080';
    } else {
      // in prod - put proper url in
      host = 'gab557backend.herokuapp.com';
    }
    const baseUrl = `${protocol}//${host}`;
    return baseUrl;
  }
  