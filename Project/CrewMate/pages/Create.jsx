import { useState } from 'react'
import './Create.css'
import {supabase} from '../client.js'


const Create = () => {
    const [data,setData] = useState(
        {
            Type:'',
            Level:1,
            Name:'',
            Description:''
        }
    )
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]:value
        }));
    };

    const handleCreate = async (event) => {
            event.preventDefault();

            const form = event.target;

             if (!form.checkValidity()) {
            form.reportValidity(); 
            return; 
  }
            await supabase
                .from('Crew')
                .insert({Type: data.Type, Level:data.Level, Name:data.Name, Description:data.Description})
                .select()
            window.location = "/Gallery";
        }
    return (
        <>
            <form onSubmit={handleCreate}>
                <div className='text-input'>
                    <label htmlFor='Name'>Name</label> <br/>
                    <input type="text" id="Name" name="Name" onChange={handleChange} required/> <br/>
                    <br/>
                    <label htmlFor='Level'>Level</label> <br/>
                    <input type="number" id="Level" name="Level" onChange={handleChange} required/> <br/>
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
                        checked={data.Type === type}
                        onChange={handleChange}
                        required
                    />
                    {type}
                    </label>
                ))}
                </div>
                <div className='Description'>
                    <label htmlFor='Description'>Description</label> <br/>
                    <textarea row='5' col='50' id="Description" name="Description" onChange={handleChange} required/> <br/>
                        <br/>
                </div>
                <input className="subButton" type="submit" value="Submit"/>
            </form>

        </>
    )
}

export default Create