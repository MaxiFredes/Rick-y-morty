import style from './SearchBar.module.css'
import { useState } from "react";

   const SearchBar =({onSearch}) =>{
   const [id,setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={style.searchbar}>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>AGREGAR</button>
      </div>
   );
}

export default SearchBar;