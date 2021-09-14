import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/characters/fry';
  const res = await fetch(url);
  const body = await res.json();

  //   return body.map((item) => item.character);
  console.log(body[0]);
  return body[0];
};

export default fetchQuotes;
