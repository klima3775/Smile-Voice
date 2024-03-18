import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import EmojiVote from "./components/Smile/smile-voite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmojiVote />
  </React.StrictMode>
);
