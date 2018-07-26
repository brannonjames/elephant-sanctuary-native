export default () => {
  return fetch('https://www.reddit.com/r/babyelephantgifs/.json?limit=3')
  .then(res => {
    return res.json();
  })
  .then(data => {
    return data.data.children
    .filter(function(elephantFromReddit){
      return elephantFromReddit.data.preview.images[0].variants.gif &&
      elephantFromReddit.data.thumbnail;
        
    })
    .map(function(elephantFromReddit){
      // return a clean array of objects with just the columns I need
      return {
        url: elephantFromReddit.data.preview.images[0].variants.gif.source.url,
        thumbnail: elephantFromReddit.data.thumbnail,
        id: elephantFromReddit.data.id
      }
    });
  })
  .catch(err => console.log(err));
}