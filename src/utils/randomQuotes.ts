type Quote = {
  frase: string;
  autor: string;
  id: number;
};

export default (quotes: Quote[]) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};
