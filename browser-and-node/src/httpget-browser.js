// Same as httpget-node.js, just using patched version of index.js as workaround to the Webpack version mess
(async () => {
  const mp_js = await require('../index-patched.js');

  await mp_js.init_python(64 * 1024);
  let stdout = await mp_js.do_str(`

  import js

  fetch = JS('fetch')

  response = fetch('https://httpbin.org/anything').wait()
  text = response.text().wait()
  print(text)
  
  `);
  console.log(stdout);
})();
