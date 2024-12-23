// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe72xAyrxbVRWywoglomupqUQ8eYLaMZ-n1l2sIIKNzt8uySg/viewform?embedded=true";
function Form() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
        <iframe
          src={FORM_URL}
          title="Google Form"
          className="w-full h-[75vh] border-0"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
    //     )}
    //   </div>
    // </GoogleOAuthProvider>
  );
}

export default Form;
