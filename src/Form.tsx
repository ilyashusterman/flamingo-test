// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function Form() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

//   const handleLoginSuccess = (credentialResponse) => {
//     console.log("Login successful!", credentialResponse);
//     setIsLoggedIn(true);
//   };

//   const handleLoginFailure = () => {
//     console.error("Login failed!");
//   };

  return (
    // <GoogleOAuthProvider clientId="729210324996-vqopjlstfdh7ma01m5pdaeabnas9veke.apps.googleusercontent.com">
    //   <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    //     {!isLoggedIn ? (
    //       <div className="text-center">
    //         <h1 className="text-2xl font-bold mb-4">Login with Gmail</h1>
    //         <GoogleLogin
    //           onSuccess={handleLoginSuccess}
    //           onError={handleLoginFailure}
    //         />
    //       </div>
    //     ) : (
          <div>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
            >
              Go Back
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe72xAyrxbVRWywoglomupqUQ8eYLaMZ-n1l2sIIKNzt8uySg/viewform?embedded=true"
              width={640}
              height={1869}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
    //     )}
    //   </div>
    // </GoogleOAuthProvider>
  );
}

export default Form;
