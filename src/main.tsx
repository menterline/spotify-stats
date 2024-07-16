import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //add back strict mode when adding react-query
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
