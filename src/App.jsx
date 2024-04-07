import React from 'react';
import './App.css';
import IframeResizer from 'iframe-resizer-react';

function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
      <h1>This is a useless website full of useless resources ;)</h1>
      <p>(Work in progress)</p>
      <p id='quote'><i>"The production of too many useful things results in too many useless people." - Karl Marx</i></p>
      </div>
     <IframeResizer src="https://googledriveembedder.collegefam.com/?key=AIzaSyC9d4ikcBn6k2foxIALl6SFere-jBskpFs&folderid=1yfX0cpjv8IOxsw06C2ip3RpNveH19vUa" style={{minWidth: '100%', minHeight:"650px"}}/>
    </div>
  );
}

export default App;
