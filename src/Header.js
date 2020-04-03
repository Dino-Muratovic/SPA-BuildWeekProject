import React from 'react';
import { useParams, Route, NavLink, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { FaCocktail } from 'react-icons/fa';
import { HeaderContainer, NavContainer } from './Styled-Components/Header-styles'; //Where styling comes from




const Header = (props) => { 
    // console.log(`==>`, props)
    
    return ( 
        <HeaderContainer>  
            <div className="logo">
                <FaCocktail size={50}/> 
            </div>  

            <NavContainer>   
                <Link className="link" to={'/'}>Home</Link>
                <Link className="link" to={'/recipes'}>Recipes</Link>
                <Link className="link" to={'/contact'}>Contact</Link>                      
            </NavContainer>        
        </HeaderContainer>    

            
        
    )
}

export default Header;