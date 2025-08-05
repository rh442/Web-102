import React, { useState } from "react";
import { supabase } from "../../client.js";
import './Create.css'


const Create = () =>{
    const [data,setData] = useState({
        Topic:'',
        Blurb:'',
        Description:'',
        Recipe:'',
        Url:''
    })

    const handleChange = (event) => {
        const {name,value} = event.target;
        setData((prev) => ({
            ...prev,
            [name]:value
        }));
    }
    const createPost = async(event) =>{
        event.preventDefault()

        await supabase
            .from('Food')
            .insert({Topic: data.Topic,Blurb: data.Blurb, Description: data.Description, Recipe:data.Recipe, Url:data.Url})
            .select()
        window.location='/'

    }

    return(

        <>
            <div className="center-container">
                <form>
                    <div className="form-inputs">
                        <br/>
                        <label className="Topic">
                            <input type="text" id="Topic" name="Topic" placeholder="Topic"required onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Blurb">
                            <input type="text" id="Blurb" name="Blurb" placeholder="short message about Food (max:150 characters)"required onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Description">
                            <textarea  rows='5' cols='50' id="Description" name="Description" placeholder="Description here ..." onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Recipe">
                            <textarea  rows='5' cols='50' id="Recipe" name="Recipe" placeholder="Recipe here ..." onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Url">
                            <input type="url" id="Url" name="Url" placeholder="Image link here ..." required onChange={handleChange}/>
                        </label>
                        <br/>
                        <button type="button" onClick={createPost}>Post</button>
                    </div>

                </form>
            </div>
        </>
    )
}
export default Create