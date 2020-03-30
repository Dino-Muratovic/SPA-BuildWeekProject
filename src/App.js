import React, {useState, useEffect} from 'react';
import Header from './Header';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import CocktailCardContainer from './CocktailCardContainer';





function App() {


//UseState here -- set state
const [data, setData] = useState([]);

//Use Effect hook here
useEffect(() => {
  //Fetch the cocktail API
  axios
  .get ('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then (response => {
    // console.log(`data`, response.data)
    setData(response.data.drinks); // set the data to be what we want it to be
    
  })
  // Display error if there is one
  .catch(error => {
    //print the response (array of cocktails)
    console.log(`Oops there's an error`, error)
  })

}, [])// dependancy array here

  return (
    <div className="App">  
      <Header/>
      {/* use data from useState and set it do the entire data object to pass it down to the child element in this case CocktailCardContainer*/}
      <CocktailCardContainer data={data}/> 
      <Footer/> 
    </div>

    
  );
}

export default App;
