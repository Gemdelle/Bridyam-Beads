import React from 'react';
import logo from './loogo.png';
import './App.css';
import ReactWhatsapp from "react-whatsapp";

const ButtonLink = () => {
    function openWhatsapp(number:string, message: string) {
        let url = `https://web.whatsapp.com/send?phone=${number}&text=${encodeURI(message)}&app_absent=0`;
        window.open(url)
    }

    return (
      <button
          className="App-link"
          rel="noopener noreferrer"
          onClick={() => openWhatsapp("1553420181", "Oloaloaloaloaloaloa 👋😬 Me gustan los Minions jiijijiji\n" +
              "⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜\n" +
              "⬜⬜⬜🟨🟨🟨🟨🟨🟨⬜⬜⬜\n" +
              "⬜⬜🟨🟨🟨🟪🟪🟨🟨🟨⬜⬜\n" +
              "⬜🟨🟨🟨🟪⬜⬜🟪🟨🟨🟨⬜\n" +
              "⬜⬛⬛🟪⬜⬛⬛⬜🟪⬛⬛⬜\n" +
              "⬜⬛⬛🟪⬜⬛⬛⬜🟪⬛⬛⬜\n" +
              "⬜🟨🟨🟨🟪⬜⬜🟪🟨🟨🟨⬜\n" +
              "⬜🟨🟨🟨🟨🟪🟪🟨🟨🟨🟨⬜\n" +
              "⬜🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨⬜\n" +
              "⬜🟨🟨🟨⬛⬛⬛⬛🟨🟨🟨⬜\n" +
              "⬜🟦🟨🟨🟨🟨🟨🟨🟨🟨🟦⬜\n" +
              "⬜🟨🟦🟨🟨🟨🟨🟨🟨🟦🟨⬜\n" +
              "⬜🟨🟨🟦🟦🟦🟦🟦🟦🟨🟨⬜\n" +
              "⬜🟨🟨🟦🟦🟦🟦🟦🟦🟨🟨⬜")}
      >
        Whatsapp Me!
      </button>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holaaa aaa
        </p>
        <ButtonLink/>
      </header>
    </div>
  );
}

export default App;
