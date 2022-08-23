import React, { useEffect, useState } from "react";
import { client } from "./client";
import "./App.css";
import Content from "./components/content-section/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Rating from "./components/rating/Rating";

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
      <Header />
      <Content page={page} />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
