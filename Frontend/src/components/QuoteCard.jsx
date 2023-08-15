import './quoteCard.css'
import { useState, useEffect } from "react";
import {  CiHeart, CiBookmark } from "react-icons/ci";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import {IconContext} from 'react-icons'
const QuoteCard = (data) => {
  const [like, setLike] = useState(data.like.length);
  const [islike, setIsLike] = useState(false);
  const authorId = localStorage.getItem("authorId");

  useEffect(() => {
    setIsLike(data.like.includes(authorId));
  }, [data.like, authorId]);

  const onHeartClick = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/blog/likeBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          blogId: id,
        }),
      });

      const resData = await response.json();

      setIsLike(resData.like);
      setLike(resData.data.like.length);
    } catch (error) {
      console.log(error);
    }
  };

  const renderLikeButton = () => {
    if (islike) {
      return <AiTwotoneHeart onClick={() => onHeartClick(data._id)} />;
    } else {
      return <CiHeart onClick={() => onHeartClick(data._id)} />;
    }
  };

  return (
    <div className="quote-container">
      <div className="quote-heading capitalize">
        {data.authorId.firstName} {data.authorId.lastName}
      </div>
      <div
        className="quote-body-container"
        style={{
          width: "100%",
        }}
      >
        <p>{data.body}</p>
      </div>
      <div className="secondary-container">
        <div className="quote-icon">
          <IconContext.Provider
            value={{
              className: "search-icon",
              color: "red",
              style: {
                height: "38px",
                width: "40px",
                cursor: "pointer",
              },
            }}
          >
            {renderLikeButton()}{" "}
            <p
              style={{
                fontSize: "20px",
                margin: "auto",
              }}
            >
              {like}
            </p>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              className: "search-icon",
              color: "black",
              style: {
                height: "38px",
                width: "40px",
                cursor: "pointer",
              },
            }}
          >
            <CiBookmark />
          </IconContext.Provider>
        </div>
        <div className="quote-views">
          <p
            style={{
              fontSize: "15px",
              margin: "auto",
              padding: "3px",
            }}
          >
            {45}
          </p>
          <IconContext.Provider
            value={{
              className: "search-icon",
              color: "black",
              style: {
                height: "20px",
                width: "20px",
                margin: "auto",
              },
            }}
          >
            <BsEye />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;