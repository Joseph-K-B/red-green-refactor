import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes';
  const req = await fetch(url);
  const res = await req.json();
  return { character:res[0].character, quote:res[0].quote, image:res[0].image };
};

export default fetchQuotes;
