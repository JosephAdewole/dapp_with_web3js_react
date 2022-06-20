import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

function App() {
  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()
  const [balance, setBalance] = useState()


  useEffect(() => {
    
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3002")

    async function loadAccounts(){
      const accounts = await web3.eth.requestAccounts()
      console.log(accounts)
      setAccount(accounts[0])
    }
    async function loadBalance(){
      const network = await web3.eth.net.getNetworkType()
      setNetwork(network)

      const balance = await web3.eth.getBalance(account)     
      setBalance(balance)
    }

    
    loadAccounts()
    loadBalance()

  }, [account, network, balance])
  
  return (
    <div className="App">
      <header className="App-header">
        Decentralised Ballot
        <br/>
        Network is {network}
        <br/>
        Account is {account}
        <br/>

        Balance is {balance}

      </header>
    </div>
  );
}

export default App;
