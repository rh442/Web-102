import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {
    const deleteCrew = async (event) =>{
            event.preventDefault()
            await supabase
                .from('Crew')
                .delete()
                .eq('id',props.id)
            window.location='/Gallery'
        }


  return (
      <div className= {`Card ${props.Type}` }>
          <div>
              <h2 className="Name">{props.Name}</h2>
              <h3 className="Level">{"Lv." + props.Level}</h3>
              <h3 className="Type">{props.Type}</h3>
              <Link to={"/View/"+props.id}><button>View</button></Link>
              <Link to={"/Edit/"+ props.id}><button>Edit</button></Link>
              <button onClick={deleteCrew}>Release</button>
          </div>
          
      </div>
  );
};

export default Card