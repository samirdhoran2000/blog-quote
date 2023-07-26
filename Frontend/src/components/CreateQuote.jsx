import { useState } from 'react';
import './form.css'
const CreateQuote = () => {
  const [quote, setQuote] = useState('');

  const CreateQuote = (e) => {
    e.preventDefault();
    console.log(e);
    
    console.log('quote',quote);
  }

  return (
    <div className="outer-main-container-form">
      <form action="" method="POST">
        <div
          className="inner-main-container-form"
          style={{
            height: " 250px",
            width: "450px",
          }}
        >
          <div>
            <div
              className="name"
              style={{
                padding: "0 20px 0 0",
              }}
            >
              <textarea
                rows={4}
               
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="text"
                value={quote}
                placeholder="Quote"
                onChange={(e) => {
                  setQuote(e.target.value);
                }}
              />
            </div>
          </div>

          {/* ..................................................... */}
          <div>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  CreateQuote(e);
                }}
                className=" "
                type="submit"
                style={{
                  padding: "4px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateQuote