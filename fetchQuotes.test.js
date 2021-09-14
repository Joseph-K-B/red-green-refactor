import fetchQuotes from './fetchQuotes';

describe('fetchQuotes', () => {
  it('it should return a quote including name, text, & image from futurama API', async () => {
    const quotes = await fetchQuotes();
    expect(quotes).toEqual({
      character: 'Fry',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png',
      quote: 'Not everyone turns out like their parents. Look at me: my parents were honest, hard-working people.',
    });
          
  });
});
