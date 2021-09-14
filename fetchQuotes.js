import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes';
  const req = await fetch(url);
  const body = await req.json();
  return { character:body[0].character, quote:body[0].quote, image:body[0].image };
};

export default fetchQuotes;
