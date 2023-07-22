import './form.css';
import './login.css';

const Login = () => {
  return (
    <div className="outer-main-container-form">
      <form action="" method="POST">
        <div className="inner-main-container-form">
          {/* <div> */}
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
          {/* </div>      */}
        
        {/* ----------------------------------- */}
          <div>
            <div className="name">
              <input
                className="focused-input "
                style={{
                  width: "100%",
                }}
                type="password"
                placeholder="Password"
                
              />
            </div>
          </div>     
          
          {/* ..................................................... */}
          <div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  
                }}
                className=" "
                type="submit"
                style={{
                  padding: "4px",
                  backgroundColor: "red",
                  borderRadius: "10px",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login