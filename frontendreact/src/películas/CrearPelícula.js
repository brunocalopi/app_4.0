//Axios => Librería de js para conectar frontend con backend => envía datos en direcciones opuestas.
//react-router-dom : Librería para colocar rutas 

import axios from 'axios';
import {useState,useEffect} from 'react/cjs/react.production.min';
import {Link} from 'react-router-dom';


const URL = 'http://localhost:4000/movie';



const ComponenteCrearPelícula = ()=>{

  const[movies,setMovie] = useState([])
  useEffect(()=>{
    getMovies()
  },[]);

  
}

export default ComponenteCrearPelícula;