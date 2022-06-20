import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { useState } from 'react';

function App() {
  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()
  const [balance, setBalance] = useState()

  const web3 = new Web3(Web3.givenProvider)

  return (
    <div className="App">
      <header className="App-header">
        Decentralised Ballot
      </header>
    </div>
  );
}

export default App;
