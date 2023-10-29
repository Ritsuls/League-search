import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState("");
  const API_Key = "RGAPI-c2c088ae-6c9c-4ef6-81eb-92afefa77c6f";
  
  function searchforPlayer(event){
    //set up the correct api call
      var APIcallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_Key; 
    //handle the api call
    axios.get(APIcallString).then(function (response) {
      setPlayerData(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }
console.log(playerData);
  return (
    <div className="App">
      <div className='container'>
        <h5>League of legends Player Searcher

        </h5>
        <input type='text' onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchforPlayer(e)}>
          Search for Player
        </button>

      </div>
      {JSON.stringify(playerData) != '{}' ? 
      <><p>We have player Data</p></>
      : 
      <><p>No player data</p></>

      }
    </div>
  );
}

export default App;
