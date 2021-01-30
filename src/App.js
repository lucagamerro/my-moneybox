import React, { useState, useRef } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Entrate from './Components/Entrate';
import Stat from './Components/Stat/Stat';
import Add from './Components/Add';
import firebase from './firebase';
import './styles.css';

function App() {
  const ref = firebase.firestore().collection('money').orderBy('data');
  const myRef = useRef(null);
  //const mese = (new Date().getMonth())+1;

  const [data, setData] = useState([]);
  const [somma, setSomma] = useState(0);
  const [entrate, setEntrate] = useState(0);
  const [uscite, setUscite] = useState(0);
  const [uno, setUno] = useState(0);
  const [due, setDue] = useState(0);
  const [tre, setTre] = useState(0);

  const getMoney = async () =>  {
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setData(items.reverse());
    });
  }  
  
  return (
    <div>
      
      <Navbar />

      <Stat somma={somma} entrate={entrate} uscite={uscite} uno={uno} due={due} tre={tre} />

      <Entrate getMoney={getMoney} myRef={myRef} data={data} somma={somma} entrate={entrate} uno={uno} due={due} tre={tre} setData={setData} setSomma={setSomma} setEntrate={setEntrate} setUscite={setUscite} setUno={setUno} setDue={setDue} setTre={setTre} />
      
      <Add getMoney={getMoney} myRef={myRef} data={data} somma={somma} entrate={entrate} uscite={uscite} uno={uno} due={due} tre={tre} setData={setData} setSomma={setSomma} setEntrate={setEntrate} setUscite={setUscite} setUno={setUno} setDue={setDue} setTre={setTre} />

      <small>Created by <a href="https://github.com/lucagamerro" target="_blank" rel="noreferrer">@lucagamerro</a>.</small>
    </div>
  );
}

export default App;