import React, { useEffect, useState } from "react";
import { client } from "./client";
import "./App.css";
import ThemeOne from "./components/templates/app/index";

function App() {
  const [page, setPage] = useState([]);

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
    getPage();
  }, []);

  return (
    <div className="App1">
      <ThemeOne page={page} />
    </div>
  );
}

export default App;
