function BitcoinNews({ bitcoin, id }) {
  console.log(`bitcoin`, bitcoin);
  return (
    <div>
      <h3>{bitcoin.title}</h3>
      {bitcoin.author ? <p>author: {bitcoin.author}</p> : ""}
    </div>
  );
}
export default BitcoinNews;
