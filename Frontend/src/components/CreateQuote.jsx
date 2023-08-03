import { useState } from "react";
import "./form.css";

const postQuote = async (data) => {
  try {
    const responce = await fetch("http://localhost:3000/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });

    const result = await responce.json();
    console.log("quote result of responce ", result);
  } catch (error) {
    console.log("error in post quote error ", error);
    throw error;
  }
};
const CreateQuote = () => {
  const [quote, setQuote] = useState("");

  const handleCreateQuote = async (e) => {
    try {
      console.log(e);
      e.preventDefault();

      const data = await postQuote({
        body: quote,
        id: "64c8fc6914d53d3f7cedd6b2",
      });

      console.log(data);
    } catch (error) {
      console.log("error in post create quote ", error);
      throw error;
    }
  };
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
                  // console.log(e.key);
                  setQuote(e.target.value);
                }}
                onKeyDown={(e) => {
                  console.log(e.key);

                  if (e.key === "Enter") {
                    postQuote({
                      body: quote,
                      id: "64c8fc6914d53d3f7cedd6b2",
                    });
                  }
                }}
              />
            </div>
          </div>

          {/* ..................................................... */}
          <div>
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  handleCreateQuote(e);
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
};

export default CreateQuote;
