import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import react from 'react';
import ComponenteMostrarPelícula from './películas/MostrarPelícula';

function App() {
  return (
    <div className="App">
    <div className='container'>
      <h1>Tabla de películas</h1>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<ComponenteMostrarPelícula/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;