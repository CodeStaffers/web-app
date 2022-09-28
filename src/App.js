import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { client } from "./client";
import ThemeOne from "./components/templates/app/index";

const clientId = process.env.REACT_APP_ACCESS_ID;

function App() {
  const [page, setPage] = useState([]);

  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    var obj = jwt_decode(response.credential);
    console.log(obj.exp);
    setUser(obj);
    document.getElementById("signInDiv").hidden = true;
  }

  const getPage = async () => {
    try {
      const response = await client.getEntries({
        content_type: "landingPage",
      });
      const responseData = response && response.items[0].fields;
      if (responseData) setPage(responseData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    google.accounts.id.prompt();
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    getPage();
  }, []);

  return (
    <div className="App1">
      {/*       
    
      {/* {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )} */}

      {Object.keys(user).length !== 0 ? (
        <ThemeOne page={page} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="signInDiv"></div>
          <h1>Welcome to CodeStaffers App</h1>
        </div>
      )}
    </div>
  );
}

export default App;
