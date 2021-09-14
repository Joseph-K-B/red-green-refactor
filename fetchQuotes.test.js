import fetchQuotes from './fetchQuotes';

describe('fetchQuotes', () => {
  it('it should return a quote including name, text, & image from futurama API', async () => {
    const res = expect.any(String);
    const quotes = await fetchQuotes();
    expect(quotes).toEqual({
      character: res,
      image: res,
      quote: res,
    });          
  });
});
