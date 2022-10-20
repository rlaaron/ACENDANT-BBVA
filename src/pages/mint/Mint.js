import React from "react";
import "./Mint.css";
import Navbar from "../global components/navbar/Navbar";

function Mint() {
    return (
    <React.Fragment>
        <Navbar/>
   
        <main className="main">
            <div className="main__NFTcontainer">
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-1" alt=""/>
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-3" alt=""/>
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-2" alt=""/>
            </div>
            <div className="main__title">
                <h3>Bank pets</h3>
            </div>
            <div className="main__subtitle">
                <h4>El futuro esta a nuestro alcance</h4>
            </div>
            <div className="main__text">
                <h1>Lorem Ipsum is simply dummy text of the printing and  </h1>
                <p>El futuro esta a nuestro alcance  <br/> 
                El futuro esta a nuestro alcance  <br/>
                El futuro esta a nuestro alcance</p>
            </div>
            <div className="main__button-container">
                <button className="main__button-minus">-</button>
                <label className="main__label">3</label>
                <button className="main__button-plus">+</button>
                
            </div>
            <button className="main__button-mint">Mint Now</button>
        </main>
    </React.Fragment>
  );
}

export default Mint;