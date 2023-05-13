import { useState } from "react";
import validation from "../Validation/Validation";

const Forms = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htnlFor="email" style={{ color: "Black"}}>Email: </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange}/>
                {errors.email && <p style={{ color: "Black"}}>{errors.email}</p>}
                <br />
                <label htnlFor="email" style={{ color: "Black"}}>Password: </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p style={{ color: "Black"}}>{errors.password}</p>}
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
};

export default Forms;