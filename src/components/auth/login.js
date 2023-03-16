import { GoogleLogin } from "react-google-login";

const clientId =
  "515344927286-6n8i9v69911l6vhbd1t1lait1nve4eke.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! Res: ", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
