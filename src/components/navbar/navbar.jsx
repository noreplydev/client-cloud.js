import React from 'react'; 
import { routes } from '../../data/sections.js';
import { useLocation } from 'react-router-dom'

//styled components
import { 
    Nav, 
    Img, 
    NavList,
    Item,     
} from './style.js'

import logo from '../../assets/icons/logo-mini.png'

const Navbar = () => {

  const pathname = useLocation().pathname; 

  return (
    <Nav>
      <Img src={logo} alt="logo" />
      <NavList>
        {
          routes.map((route) => {
            return <Item 
              key={route.path} 
              id={pathname === route.path ? 'active' : ''}
              to={route.path}
            >{route.title}</Item>
          })
        }
      </NavList>
    </Nav>
  )
}

export default Navbar