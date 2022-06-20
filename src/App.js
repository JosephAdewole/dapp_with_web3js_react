import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

function App() {
  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()
  const [balance, setBalance] = useState()
  const [transactionCount, settransactionCount] = useState()
  const [gottenaccounts, setGottenaccounts] = useState([])
  const [gasEstimate, setGasestimate] = useState()


  useEffect(() => {
    
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3002")

    async function loadAccounts(){
      const accounts = await web3.eth.requestAccounts()
      const gottenaccounts = await web3.eth.getAccounts()
      console.log(gottenaccounts)
      setGottenaccounts(gottenaccounts)
      setAccount(accounts[0])
    }
    async function loadBalance(){
      const network = await web3.eth.net.getNetworkType()
      setNetwork(network)

      const balance = await web3.eth.getBalance(account)     
      setBalance(balance)
    }

    async function getNumberofTransactions(){
      const transactionCount = await web3.eth.getTransactionCount(account)
      settransactionCount(transactionCount)
    }
    async function estimateGas(){
      const gasEstimate = await web3.eth.estimateGas({
        to: "0xDc25A176beAbF03e86Fe593321123CEf5dae7931",
        data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
      })
      console.log(gasEstimate)
      setGasestimate(gasEstimate)
  
    }
    
    
    loadAccounts()
    loadBalance()
    getNumberofTransactions()
    estimateGas()

  }, [account, balance])
  
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
        <br/>
        and the Transaction Count is {transactionCount}
        <br/>
        The active account is {gottenaccounts}
        <br/>
        The gas estimate is {gasEstimate}
      </header>
    </div>
  );
}

export default App;
