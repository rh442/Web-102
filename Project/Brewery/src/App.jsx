import { useState,useEffect } from 'react'
import BrewInfo from './Components/BrewInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [list,setList] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [filterUrl,setFilterUrl] = useState(false);
  const getFilteredList = () => {
    let filtered = [...list]

    if (filterUrl) {
      filtered = filtered.filter(item => item.website_url && item.website_url.trim() !== "")
    }

    if (searchInput.trim() !== "") {
      filtered = filtered.filter(item =>
        [item.name, item.city, item.state]
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      )
    }

    return filtered
  };

  const filterButton = () =>{
    setFilterUrl(!filterUrl)
  }
  
useEffect(() => {
    const fetchALLBrewData = async() =>{
        const response = await fetch(
           'https://api.openbrewerydb.org/v1/breweries?per_page=20'
  )
  const json = await response.json()
  setList(json)
    }
  fetchALLBrewData().catch(console.error);
  }, [])
  const totalBreweries = list.length;

const stateCounts = list.reduce((acc, brew) => {
  const state = brew.state;
  if (state) {
    acc[state] = (acc[state] || 0) + 1;
  }
  return acc;
}, {});

let mostState = '';
let leastState = '';
let max = -Infinity;
let min = Infinity;

for (const state in stateCounts) {
  const count = stateCounts[state];
  if (count > max) {
    max = count;
    mostState = state;
  }
  if (count < min) {
    min = count;
    leastState = state;
  }
}
  return (
    <>
      <div className='navbar'>
          <h2>BrewFinder</h2>
          <h3>DashBoard</h3>  
          <h3>Search</h3>
          <h3>About</h3>
      </div>
      <div className='main'>
        <div className='stats'>
            <div className='stats-bubble'>
              Breweries:
              <br></br>
              {list.length}
            </div >
              
            <div className='stats-bubble'>
              States with most Breweries:
              <br></br>
              {mostState}
            </div>
            <div className='stats-bubble'>
              States with least Breweries:
              <br></br>
              {leastState}
            </div>
        </div>
        
        <div className='search-container'>
          <input

          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
                />
         <button className='filter-button' type="button" onClick={filterButton}>{filterUrl?("Show All"):("Url only")}</button>
        </div>
        <div className='brew_display'>
           <ul>
            <li className='main-list'>
              <span><strong>Name</strong></span>
              <span><strong>City</strong></span>
              <span><strong>State</strong></span>
              <span><strong>Website</strong></span>
            </li>
           {getFilteredList().map((brew) => (
  <BrewInfo key={brew.id} brew_id={brew.id} />
))}
  
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
