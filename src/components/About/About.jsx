import maxi from "./img/Maxi.png";
import style from "../About/About.module.css"

const About = () =>{
    return(
        <div className={style.About}>
            <h1>Hola (sin ofender) </h1>
            <img className={style.imagen} src={maxi} />
        </div>
    )
};

export default About;