import './quoteCard.css'
import { IconContext } from 'react-icons';
import { CiHeart,CiBookmark } from "react-icons/ci";
import { BsEye } from "react-icons/bs";


const QuoteCard = ({id, content, likes, views, author}) => {
  return (
    <div className="quote-container" >
      <div className="quote-heading capitalize">{author}</div>
      <div className="quote-body-container" style={{
        width:'100%'
      }}>
        <p>
          {content}
        </p>
      </div>
      <div className="secondary-container">
        <div className="quote-icon">
          <IconContext.Provider
            value={{
              className: "search-icon",
              color: "black",
              style: {
                height: "38px",
                width: "40px",
               cursor:'pointer'
              },
            }}
          >
            <CiHeart /> <p style={{
              fontSize: '20px',
              margin:'auto'
            }}>{likes}</p>
            
            <CiBookmark />
          </IconContext.Provider>
        </div>
        <div className="quote-views">
          <p style={{
            fontSize: '15px',
            margin: 'auto',
            padding:'3px'
          }}>{views}</p>
          <IconContext.Provider
            value={{
              className: "search-icon",
              color: "black",
              style: {
                height: "20px",
                width: "20px",
                margin: 'auto',
              },
            }}
          >
            <BsEye />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;