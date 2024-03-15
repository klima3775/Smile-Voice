import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import EmojiVote from "./components/Smile/smile-voite";
import ShowVoite from "./components/ShowVoite/show-voite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmojiVote />
    <ShowVoite />
  </React.StrictMode>
);
