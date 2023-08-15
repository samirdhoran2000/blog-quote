import QuoteCard from "./QuoteCard"
import { useEffect, useState } from "react";

const Explore = () => {
  const [quote, setQuote] = useState([]);

  const token=localStorage.getItem('token')
  useEffect(() => {
    apiCall();
  },[])
  
  const apiCall = async() => {
    const res = await fetch('http://localhost:3000/blog', {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await res.json();
      console.log(result);
    setQuote(result.data);
    
  }
  return (
    <>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap:'wrap'
      }}>

      {quote?.map((item) => {
        
        return <QuoteCard {...item} key={item._id} onClick={() => {
          apiCall();
        } } />;
      })}
      </div>
    </>
  );
}

export default Explore