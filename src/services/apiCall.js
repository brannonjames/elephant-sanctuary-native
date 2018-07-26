export default async  (url, method='GET', data) => {
  return fetch({
    url,
    method,
    data
  })
  .then(res => {
    return res.json();
  })
  .catch(err => console.log(err));
}