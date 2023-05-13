import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'


const Nav=({onSearch})=>{
    return(
        <nav className={style.nav}> 
            <NavLink to="/About"><button className={style.about}>ABOUT</button></NavLink>
            <NavLink to="/Home"><button className={style.home}>HOME</button></NavLink>
            <SearchBar onSearch={onSearch} />
        </nav>
        
    )
}

export default Nav;