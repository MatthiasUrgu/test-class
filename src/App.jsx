import style from './App.module.css'
import { useState } from 'react';
import { API_Axios } from './API/API';

import CityName from './Components/CityName';
import SearchCity from './Components/SearchCity';

function App() {
  
  const [ville,setVille] = useState('')

  
let france = 5
   // API_Axios.RecupererData({ville})
   API_Axios.RecupererVille({ville})
   API_Axios.RecupererTemperature({ville})

    function HandleOnChange(city){
      setVille(city)
      API_Axios.ChangerVille(city)
    }
  
  return (
    <div className={style.container}>
      
      <CityName ville={ville} Celcius={france} />
      <SearchCity onChange={HandleOnChange}  />
      
    </div>
  );
}

export default App;