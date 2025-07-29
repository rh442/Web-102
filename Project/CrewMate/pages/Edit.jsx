import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Edit.css'
import {supabase} from '../client.js'

const Edit = ({data}) => {

    const {id} = useParams()
    const [crew, setCrew] = useState({id: null, Name: "", Level: 1,Type:"", Description: ""})

     const deleteCrew = async (event) =>{
            event.preventDefault()
            await supabase
                .from('Crew')
                .delete()
                .eq('id',id)
            window.location='/Gallery'
        }

    useEffect(() => {
  const fetchCrew = async () => {
    const { data, error } = await supabase
      .from('Crew')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching crew member:', error);
    } else {
      setCrew(data); // pre-fill the form
    }
  };

  fetchCrew();
}, [id]);
    const handleChange = (event) => {
        const {name, value} = event.target
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const handleUpdate = async (event) =>{
        event.preventDefault()
        await supabase
            .from('Crew')
            .update({Name: crew.Name, Level: crew.Level, Type: crew.Type,Description: crew.Description})
            .eq('id',id)
        window.location='/Gallery'
    }

    const deletePost = async (event) =>{
        event.preventDefault()
        await supabase
            .from('Posts')
            .delete()
            .eq('id',id)
        window.location='/'
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className='text-input'>
                    <label htmlFor='Name'>Name</label> <br/>
                    <input type="text" id="Name" name="Name" onChange={handleChange} value={crew.Name}  required/> <br/>
                    <br/>
                    <label htmlFor='Level'>Level</label> <br/>
                    <input type="number" id="Level" name="Level" onChange={handleChange} value={crew.Level} required/> <br/>
                    <br/>
                </div>

                <div className="radio-grid">
                {[
                "Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison",
                "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark",
                "Steel", "Fairy", "Stellar"
                ].map((type) => (
                    <label key={type} className="radio-item">
                    <input
                        type="radio"
                        id={type}
                        name="Type"
                        value={type}
                        checked={crew.Type === type}
                        onChange={handleChange}
                        required
                    />
                    {type}
                    </label>
                ))}
                </div>
                <div className='Description'>
                    <label htmlFor='Description'>Description</label> <br/>
                    <textarea row='5' col='50' id="Description" name="Description" onChange={handleChange} value={crew.Description} required/> <br/>
                        <br/>
                </div>
                <div className='buttons'>
                    <input className="subButton" type="submit" value="Submit"/>
                    <button type="button" onClick={deleteCrew}>Release</button>
                </div>
            </form>
        </div>
    )
}

export default Edit