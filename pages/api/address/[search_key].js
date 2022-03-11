import tradly from 'tradly';

export default async function handler(req, res) {
  const { auth_key } = req.cookies;
  const response = await tradly.app.searchAddress({
    searchKey: req.query.search_key,
    authKey: auth_key ? auth_key : '',
  });
  if (!response.error) {
    res.status(500).send(response.data);
  } else {
    res.status(500).send(response.error);
  }
}