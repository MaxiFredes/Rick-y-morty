import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Card(props) {
   const {name, status, species, gender, origin, image, onClose, id} = props
   return (
      <div className={style.Card}> 
         <button className={style.boton} onClick={()=>{onClose(id)}}>X</button>
               <img className={style.image} src={image} alt="" />
            <div>
               <Link to={`/detail/${id}`}>
               <h2>Nombre: {name}</h2>
               </Link>
               <h2>Status: {status}</h2>
               <h2>Species: {species}</h2>
               <h2>Gender: {gender}</h2>
               <h2>Origin: {origin}</h2>
            </div>
      </div>
   );
};

export default Card;
