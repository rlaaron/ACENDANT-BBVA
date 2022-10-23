import './App.css';
import React, { useState } from "react";
import Staking from './pages/staking/Staking.js';
import Landing from './pages/landing/Landing.js';
import Mint from './pages/mint/Mint.js';
import CC from './pages/credit card/TCC.js';
import Wallet from './pages/wallet/Wallet.js';
import Claim from './pages/claim/Claim';
import {BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom"
import Hipoteca from './pages/hipoteca/Hipoteca';
//  puto aaron de mierda tienes que hacer una ruta de la pagina de mint: src\pages\mint\Mint.js
// agregar a todasd la paginas uncontenedor de 1200 px de width y un margin 0 auto
function App() {
  const [account,setAccount] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path='*' element={<h1>Not found</h1>} />
<<<<<<< HEAD
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/mint" element={<Mint />} ></Route>
        <Route path="/staking" element={<Staking />} ></Route>
        <Route path="/tcc" element={<CC />} ></Route>
        <Route path="/wallet" element={<Wallet />} ></Route>
        <Route path="/hipoteca" element={<Hipoteca />} ></Route>
        <Route path="/claim" element={<Claim />} ></Route>
=======
        <Route path="/" element={<Landing  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/mint" element={<Mint  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/staking" element={<Staking  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/tcc" element={<CC account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/wallet" element={<Wallet account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/hipoteca" element={<Hipoteca  account={account} setAccount={setAccount}/>} ></Route>
>>>>>>> 6d19d2f0c1c0bffe190ebfb7072c5c6c8ac70d40
      </Routes>
    </Router>
  );
}

export default App;

