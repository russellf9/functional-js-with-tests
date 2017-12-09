async function asyncFetch(url) {
  return await fetch(url);
}



module.exports =  {
  asyncFetch: asyncFetch
}
