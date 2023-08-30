export default function (context) {
  context.$axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  context.$axios.onResponse(response => {
    const code = parseInt(response.data && response.data.status_code)
    if (code === 204) {
      context.error({
        status_code: 404,
        message: 'Page not found'
      })
      // context.redirect('/404')
    }
  })

  context.$axios.onError(error => {
    context.error({
      status_code: error.response.status,
      message: 'Page not found'
    })
    // context.error({ statusCode: 404, message: 'Post not found' })
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   context.error('/400')
    // }
  })
}