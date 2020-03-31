import React from 'react';
import { useParams, Route, NavLink, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import CocktailCard from './CocktailCard';
import Footer from './Footer';







const Header = (props) => { 

    console.log(`==>`, props)

    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/recipes'}>Recipes</Link>
            <Link to={'/contact'}>Contact</Link>
           
        </nav>
            

            
        
    )
}

export default Header;