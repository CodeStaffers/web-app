import { GoogleLogout } from "react-google-login";

const clientId =
  "515344927286-6n8i9v69911l6vhbd1t1lait1nve4eke.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logged out successfully");
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText={"Logout"}
      onLogoutSuccess={onSuccess}
    />
  );
}

export default Logout;
