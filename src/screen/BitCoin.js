import BitcoinNews from "../components/BitcoinNews";

const BitCoin = ({ bitcoin }) => {
  return (
    <div>
    {bitcoin.map((elem, id) => {
      return (
        <BitcoinNews bitcoin={elem} id={id} />
      );
    }
    </div>

     
    
  
);
      
};
export default BitCoin;


