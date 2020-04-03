import React, {useState, useEffect} from 'react';
import Header from './Header';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import CocktailCardContainer from './CocktailCardContainer';
// import CocktailCard from './CocktailCard'; -- We don't have to import this because CocktailCardContainer contains CocktailCard
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';



function App() {


//UseState here -- set state
const [data, setData] = useState([]);

//Use Effect hook here
useEffect(() => {
  //Fetch the cocktail API
  axios
  .get ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then (response => {
    //print the response (array of cocktails)
    // console.log(`data`, response.data)
    setData(response.data.drinks); // set the data to be array of objects full of cocktails
    
  })
  // Display error if there is one
  .catch(error => {    
    console.log(`Oops there's an error`, error)
  })

}, [])// dependancy array here

  return (
    <div className="App">  
    <Header/> 

     {/* Set up your routes here -- LINKS are inside Header.js  */}
      <Switch>  
        {/* use data from useState and set it do the entire data object to pass it down to the child element in this case CocktailCardContainer*/}    
        <Route path={'/recipes'}><CocktailCardContainer data={data}/></Route> -- {/* What was on line 49 here is done this way when adding Route and passing data down*/}
        <Route path={'/contact'} component={Contact}/> 
        <Route exact path={'/'} component={Home}/>   
      </Switch>        
       
      {/* <CocktailCardContainer data={data}/>  */}

    <Footer/> 
    </div>    
  );
}

export default App;
