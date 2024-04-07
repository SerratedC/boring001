import React from "react";
import "./App.css";
import IframeResizer from "iframe-resizer-react";
import getAPIKey from "./apiKey";

function App() {
  const key = getAPIKey();
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>This is a useless website full of useless resources ;)</h1>
        <p>(Work in progress, currently v1.0.2)</p>
        <p id="quote">
          <i>
            "The production of too many useful things results in too many
            useless people." - Karl Marx
          </i>
        </p>
      </div>
      <IframeResizer
        src={
          "https://googledriveembedder.collegefam.com/?key=" +
          key +
          "&folderid=1yfX0cpjv8IOxsw06C2ip3RpNveH19vUa"
        }
        style={{minWidth: "100%", minHeight: "900px" }}
      />
    </div>
  );
}

export default App;
