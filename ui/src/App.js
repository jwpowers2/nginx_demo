import { Container, Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';

function App() {
  const [hotDogCount, setHotDogCount] = useState("");
  const [hotDogAPI, setHotDogAPI] = useState("");
  const getDogs = async () => {
    try {
      let dogs = await axios.get(`http://${process.env.PROXY_ADDRESS}/api/hotdogs`);
      console.log(dogs.data.count);
      setHotDogAPI(dogs.data.api);
      setHotDogCount(dogs.data.count);
      console.log(hotDogCount);
    } catch(e){
      console.log(e)
    }
  }
  useEffect(()=> {
    setInterval(()=> {
      getDogs()
    },3000)
  },[])
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container sx={{color:"black", height: "20rem", marginTop: "10rem"}}>
        <Typography  variant="h2">hotdogs served: {hotDogCount}</Typography>
        <Box b="1px solid black">
          <Typography  variant="h4">Served by API: {hotDogAPI}</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
