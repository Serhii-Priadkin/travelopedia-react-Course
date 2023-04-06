import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./components/DestinationIndex";
import Header from "./layout/Header";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationApi } from "./api/destinationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationApi}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);
