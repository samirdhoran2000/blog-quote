import QuoteCard from "./QuoteCard"

import Quotes from '../Constant/quoteCardData.js'

const Explore = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap:'wrap'
      }}>

      {Quotes.map((item) => {
        
        return <QuoteCard {...item} key={item.id} />;
      })}
      </div>
    </>
  );
}

export default Explore