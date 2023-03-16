import React from "react";
import "./css/responsive.css";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src="/image/coming.jpg" alt="coming soon" />
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { client } from "./client";
// import ThemeOne from "./components/templates/app/index";

// function App() {
//   const [page, setPage] = useState([]);

//   const getPage = async () => {
//     try {
//       const response = await client.getEntries({
//         content_type: "landingPage",
//       });
//       const responseData = response && response.items[0].fields;
//       if (responseData) setPage(responseData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getPage();
//   }, []);

//   return (
//     <div className="App1">
//       <ThemeOne page={page} />
//     </div>
//   );
// }

// export default App;
