import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Edit.css'
import {supabase} from '../../client.js'




const Edit = () =>{
    const [food,setFoodData] = useState({
    Topic: '',
    Blurb: '',
    Description: '',
    Recipe: '',
    Url: ''
})
    const {id} = useParams()

     useEffect(() => {
            const fetchFood = async () => {
            const { data, error } = await supabase
            .from('Food')
            .select('*')
            .eq('id', id)
            .single();

    if (error) {
      console.error('Error fetching food:', error);
    } else {
      setFoodData(data); // pre-fill the form
    }
  };

  fetchFood();
}, [id]);
    const handleChange = (event) => {
        const {name, value} = event.target
        setFoodData( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const handleUpdate = async (event) =>{
        event.preventDefault()
        await supabase
            .from('Food')
            .update({Topic:food.Topic, Blurb:food.Blurb, Description:food.Description, Recipe:food.Recipe, Url:food.Url})
            .eq('id',id)
        window.location=`/Details/${id}`
    }

   return(
            <>
                <form>
                    <div className="form-inputs">
                        <br/>
                        <label className="Topic">
                            <input type="text" id="Topic" name="Topic" value={food.Topic} required onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Blurb">
                            <input type="text" id="Blurb" name="Blurb" value={food.Blurb} required onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Description">
                            <textarea  rows='5' cols='50' id="Description" name="Description" value={food.Description} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Recipe">
                            <textarea  rows='5' cols='50' id="Recipe" name="Recipe" value={food.Recipe} onChange={handleChange}/>
                        </label>
                        <br/>
                        <label className="Url">
                            <input type="url" id="Url" name="Url" value={food.Url} required onChange={handleChange}/>
                        </label>
                        <br/>
                        <button type="button" onClick={handleUpdate}>Update</button>
                    </div>

                </form>
            </>
   )
}
export default Edit