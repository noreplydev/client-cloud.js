import React, {useState, useEffect} from 'react'; 
import { routes } from '../../data/sections.js';
import { useLocation } from 'react-router-dom'

//styled components
import { 
    Nav, 
    Title, 
    NavList,
    Item,     
} from './style.js'

const Navbar = () => {

  const pathname = useLocation().pathname; 

  return (
    <Nav>
      <Title>cloud.js</Title>
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