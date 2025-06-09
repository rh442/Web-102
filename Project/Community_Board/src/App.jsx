import './App.css';
import Meal from './components/Meals'
import Hunter from './assets/Hunter.jpg'
const App = () => {

  return (
    <div className="App">
      <div>
          <img className='Hunter' src={Hunter} alt="Hunter"/>
      </div>
      <h1> 🍴 Food Near Hunter 🍴</h1>
      <Meal/>
    </div>
  )
}

export default App