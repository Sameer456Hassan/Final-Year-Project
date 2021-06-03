import guest from './images/Guest.png'
import employee from './images/Employee.png'
import { NavLink } from 'react-router-dom'

const Card = () =>{


    return(
        <>
            <div className="main">
                <NavLink to="Home" className="navlink" smooth={true}>
                    <button className="home" >
                            <h2>About Us</h2>  
                    </button>
                </NavLink>
                <NavLink exact to="Guest" className="navlink">
                    <button className="guest">
                        <img src={guest} alt="404" />
                        <div>
                            <h2>Guest</h2>
                            <p>  Click here if you are a guest.</p>
                        </div>
                    </button>
                </NavLink>
                <NavLink exact to="Employee" className="navlink">
                    <button className="employee">
                        <img src={employee} alt="404" />
                        <div>
                            <h2>Employee</h2>
                            <p>Click here if you are an employee.</p>
                        </div>
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default Card;