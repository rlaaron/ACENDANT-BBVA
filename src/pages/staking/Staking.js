import React from "react";
import Footer from "../global components/footer/Footer";
import Navbar from "../global components/navbar/Navbar";
import "./Staking.css";

function Staking({ account, setAccount }){
    return(
        <React.Fragment>
<<<<<<< HEAD
            <Navbar/>
            <div className="staking__container-general">
=======
            <Navbar account={account} setAccount={setAccount}/>
            <div className="hipoteca__container-general">
>>>>>>> 6d19d2f0c1c0bffe190ebfb7072c5c6c8ac70d40
                <div className="main-staking">
                        <div className="beneficios-container">
                            <div className="beneficios-container-items">
                                <img src={require("../../assets/money-incoming.png")} alt="staking"/>
                                <p>BBVA TAMBIEN OFRECE STAKING</p>
                            </div>
                        </div>
                        <div className="triangle-container">
                            <div className="triangle-container-items">
                                <div className="triangle1">
                                    <div className="niv1">
                                        <h2>Nivel 1 </h2>
                                    </div>
                                    <div className="info-de-nivel1">
                                        <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                    </div>
                                </div>
                                <div className="triangle2">
                                    <div className="niv2">
                                        <h2>Nivel 2 </h2>
                                    </div>
                                    <div className="info-de-nivel2">
                                        <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                    </div>
                                </div>
                                <div className="triangle3">
                                    <div className="niv3">
                                        <h2>Nivel 3 </h2>
                                    </div>
                                    <div className="info-de-nivel3">
                                        <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
                <Footer/>
        </React.Fragment>
    );
}

export default Staking;