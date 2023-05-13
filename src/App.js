import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import React from 'react';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect} from 'react';
import axios from 'axios'
import Forms from './components/Forms/Forms';
import About from './components/About/About'
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const email = 'maxi@gmail.com';
const password= 'abc123';

function App() {
const location = useLocation();
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);

const login = (userData) => {
   if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/')
}, [access])

function onClose(id) {
   setCharacters((oldChars) => oldChars.filter((char) => char.id!== id));
}

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         const characterExists = characters.find(char => char.id === data.id);
         if (characterExists) {
            window.alert('!Este personaje ya esta en pantalla!');
      } else {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   return (
      <div className='App'>
         {
         location.pathname !== '/' && <Nav onSearch={onSearch} />
         }
            <Routes>
               <Route path='/' element={<Forms login={login}/>} />
               <Route path='/Home' element={<Cards characters={characters} onClose={onClose} />}/>
               <Route path='/About' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>} />
            </Routes>
      </div>
   );
}

export default App;
