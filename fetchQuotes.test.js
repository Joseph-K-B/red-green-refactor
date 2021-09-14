import fetchQuotes from './fetchQuotes';

describe('fetchQuotes', () => {
  it('it should return a quote including name, text, & image from futurama API', async () => {
    const req = await fetchQuotes();
    const res = expect.any(String);
    expect(req).toEqual({
      character: res,
      image: res,
      quote: res,
    });          
  });
});
