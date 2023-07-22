import "./form.css";
const Form = () => {

  const onRegister = (e) => {
    e.preventDefault();
    console.log('event ', e);
  };
  return (
    <div className="outer-main-container-form">
      <form action="" method="POST">
        <div className="inner-main-container-form">
          <div>
            <div className="name">
              <input
                style={{
                  width: "48%",
                }}
                className="focused-input"
                type="text"
                placeholder="First Name"
              />
              <input
                style={{
                  width: "48%",
                }}
                className="focused-input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* ...................................................................... */}
          <div>
            <div className="name" style={{
              padding:'0 20px 0 0'
            }}>
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
                style={{
                  width: "48%",
                }}
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
                onClick={(e) => {
                  onRegister(e);
                }}
                className=" "
                type="submit"
                style={{
                  padding: "4px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
