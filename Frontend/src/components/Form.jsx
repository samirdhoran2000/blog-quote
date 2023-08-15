import { useState } from "react";
import "./form.css";
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const onRegister = async(e) => {
    e.preventDefault();
    console.log('event ', e.target.value);

    console.log({ firstName, lastName, email, mobile, dob, password, gender });
    
    const res = await fetch('http://localhost:3000/author', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname:firstName, lastname:lastName, email, mobile, dob, password, gender })
    });
    const result = await res.json();
    console.log(result);
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
                value={firstName}
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                style={{
                  width: "48%",
                }}
                className="focused-input"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          {/* ...................................................................... */}
          <div>
            <div
              className="name"
              style={{
                padding: "0 20px 0 0",
              }}
            >
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                pattern="[0-9]{0,10}"
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
                max={12}
                value={mobile}
                placeholder="Mobile No."
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <input
                className="focused-input"
                style={{
                  width: "48%",
                }}
                type="date"
                value={dob}
                placeholder="Date of Birth"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div>
            <div className="name" onChange={(e) => {
              setGender(e.target.value)
            }}>
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
          {/* ------------------------------------- */}
          <div>
            <div className="name">
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
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
