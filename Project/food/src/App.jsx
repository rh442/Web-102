import { useState } from 'react'

import './App.css'
import Gallery from './components/Gallery';
import Bans from './components/Bans';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [Recipes, setRecipes] = useState({
    image:"",
    vegan:"",
    vegetarian:"",
    ingredients:[]
  
  })
  const [prevImages,setPrevImages] = useState([])
  const [prevBans,setPrevBans] = useState([])
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTags, setCurrentTags] = useState([])
  const [recipesName, setrecipeName] = useState("")
  const makeQuery=()=>{
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    const excludeIngredients = prevBans.join(',');
  const randomOffset = Math.floor(Math.random() * 100); // add randomness

  const query = `https://api.spoonacular.com/recipes/complexSearch` +
                `?apiKey=${ACCESS_KEY}` +
                `&excludeIngredients=${excludeIngredients}` +
                `&number=1` + // get one recipe
                `&offset=${randomOffset}` +
                `&addRecipeInformation=true`;

  console.log("Query URL:", query);
  callAPI(query).catch(console.error);
  }
  const callAPI = async (query) => {

  const response = await fetch(query);
  const json = await response.json();

  if (!json.results || json.results.length === 0) {
    alert("No recipes found. Try removing some banned ingredients.");
    return;
  }

  const recipe = json.results[0];

  // second API call to get ingredients
  const infoResponse = await fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${ACCESS_KEY}`
  );
  const info = await infoResponse.json();

  reset();
  setCurrentImage(recipe.image);
  setPrevImages((images) => [...images, recipe.image]);
  setCurrentTags(info.extendedIngredients.map((ing) => ing.name));
  setrecipeName(recipe.title);


} 
const addtoBan=(prop)=>{
  setPrevBans([...prevBans,prop])
}
const removeFromBan = (ingredient) => {
  setPrevBans((prev) => prev.filter(item => item !== ingredient));
};
const reset=()=>{
  setCurrentImage(null)
  setCurrentTags([])
}

////https://spoonacular.com/food-api/docs#Get-Random-Recipes
      // cusine
      // meal-type
      // ingredient
      // exlcud ingredient
      
  return (
    <>
      
      <div className='main-container'>  
          <div className='gallery_left'>
            <Gallery images={prevImages} title={recipesName}/>
          </div>
          <div className='main'>
            <h1>Food Explorer</h1>
            <h2>{recipesName}</h2>
            <div className="tags-container">
            {currentTags && currentTags.length > 0 ? (
                currentTags.map((tag, index) => (
                    <button key={index} type="submit" onClick={() => addtoBan(tag)}>{tag}</button>
                 
            ))
            ) : (
            <div>
        
            </div>
            )}
            </div>
            
            <div className='image_here'>
                {currentImage ? (
                    <img
                      className="screenshot"
                      src={currentImage}
                      alt="Screenshot returned"
                    />
                ) : (
                  <div> </div>
              )}
            </div>
            <button type="submit" className='Discover' onClick={makeQuery}>🔀 Discover Recipes!</button>
          </div>
          <div className='ban_right'>
            <Bans words={prevBans} removeFromBan={removeFromBan} />
          </div>
      </div>
    </>
  )
}

export default App
