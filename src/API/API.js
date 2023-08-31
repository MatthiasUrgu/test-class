import axios from "axios";


const API_key = 'd30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_LInk = `https://api.openweathermap.org/data/2.5/weather?`

let ville ='Namur'
//`${API_BASE_LInk}q=${city}&appid=${API_key}`



class API_Axios{
    static ChangerVille(city){
      ville = city
    }


   static async RecupererData(){
        const response = await axios.get(`${API_BASE_LInk}q=${ville}&appid=${API_key}`)
                console.log(response);
                return response
        
    }
   static async RecupererVille(){
        const response = await axios.get(`${API_BASE_LInk}q=${ville}&appid=${API_key}`)
                console.log(response.data.name);
                return response.data.name
        
    }
   static async RecupererTemperature(){
        const response = await axios.get(`${API_BASE_LInk}q=${ville}&appid=${API_key}`)
                console.log(response.data.main.temp);
                return response.data.main.temp
        
    }
}

export { API_Axios,ville}
