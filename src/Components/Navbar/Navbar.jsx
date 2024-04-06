import logo from '../../assets/Logo.svg'
import './Navbar.css'
import { navLink } from '../../Data/Stats'
import {Link} from 'react-router-dom'

const Navbar = () => {
    let navigation = navLink.map((link, index) => {
     (
          <li>
            <Link>{link}</Link>
          </li>
        );
    })

  return (
      <>
          <div>
              <img src={logo} alt="GNLife logo" />
          </div>
      
    </>
  )
}

export default Navbar
