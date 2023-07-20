import "./form.css";
const Form = () => {
  return (
    <div className="outer-main-container-form">
      <form action="">
        <div className="inner-main-container-form">
          <div>
            <div className="name">
              <input
                className="focused-input"
                type="text"
                placeholder="First Name"
              />
              <input
                className="focused-input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* ...................................................................... */}
          <div>
            <div className="name">
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div>
            <div className="name">
              <input
                className="focused-input number-input"
                type="number"
                placeholder="Mobile No."
              />
              <input
                className="focused-input"
                style={{
                  width: "48%",
                }}
                type="date"
                placeholder="Date of Birth"
              />
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div>
            <div className="name">
              <input
                className="focused-input radio-button"
                type="radio"
                value="male"
                name="gender"
              />
              Male
              <input
                className="focused-input radio-button"
                type="radio"
                value="female"
                name="gender"
              />
              Female
            </div>
                  </div>
                  {/* ..................................................... */}
          <div>
            <div className="flex justify-center">
              <button
                className="focused-input radio-button"
                              type="submit"
                              style={{
                                  padding: "4px",
                                  'background-color':'red','border-radius':'10px'
                              }}
              >Register</button>              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
