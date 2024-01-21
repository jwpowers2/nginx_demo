import { Container, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [hotDogCount, setHotDogCount] = useState(0)
  const getDogs = async () => {
    let dogs = await axios.get("http://api:80/api/hotdogs");
    setHotDogCount(dogs.count)
  }
  useEffect(()=> {
    setInterval(()=> {
      //getDogs()
    },2000)
  },[])
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <h1>{JSON.stringify(hotDogCount}</h1>
      </Container>
    </div>
  );
}

export default App;
