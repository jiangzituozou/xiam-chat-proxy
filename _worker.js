export default {
  async fetch(request, env) {
        console.log('test')
    console.log(request.url)
    // openai is already set all CORS heasders 
    return fetch('https://api.openai.com/v1/chat/completions', {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
