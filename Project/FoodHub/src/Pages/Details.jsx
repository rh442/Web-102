import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { supabase } from "../../../CrewMate/client";
import './Details.css'
const Details = () =>{
    const {id} = useParams()
    const [foodData,setFoodData] = useState({
        Topic: '',
        Blurb: '',
        Description: '',
        Recipe: '',
        Likes:0,
        Url: ''
    })
    const [comments,setComments] = useState([])
    const [newComments,setNewComments] =useState('')
     const fetchFood= async() =>{
            const {data,error} = await supabase
                .from('Food')
                .select('*')
                .eq('id',id)
                .single()
            if(error){
                console.log('supabase fetch error')
            }
            else{
                setFoodData(data)
            }
        }
    useEffect(()=>{
       
        fetchFood()
    },[id])
     const fetchComments= async() =>{
            const {data,error} = await supabase
                .from('comment')
                .select('*')
                .eq('Food_id', id)
                .order('created_at',{ascending:true})
            if(error){
                console.log('supabase fetch error')
            }
            else{
                setComments(data)
                            }
        }
    useEffect(()=>{
       
        fetchComments()
    },[id])

      const handleChange = (event) => {
            
            setNewComments(event.target.value)
        }
      
        const createComment = async(event) =>{
            event.preventDefault()
              if (!newComments.trim()) {
                alert("Please write a comment before posting.");
                return;
            }
            const {data,error}   = await supabase
                .from('comment')
                .insert({detail:newComments,Food_id:id})
                .select()
              if (error) {
                console.error('Insert error:', error);
                alert("Failed to post comment.");
                return;
            }
            setNewComments('')
            
            fetchComments()
            
        }
         const deletePost = async (event) =>{
            event.preventDefault()
            await supabase
                .from('Food')
                .delete()
                .eq('id',id)
            window.location='/'
        }
        const updateLike = async() =>{
            const newLikes = foodData.Likes + 1
            await supabase
                .from('Food')
                .update({Likes:newLikes})
                .eq('id',id)
                
            fetchFood()
        }



     if (!foodData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="View">
                <img src={foodData.Url||"https://static.vecteezy.com/system/resources/previews/013/468/689/non_2x/alert-exclamation-notice-icon-emergency-alert-cartoon-something-went-wrong-free-vector.jpg"}/>
                <br/>
                <h1>{foodData.Topic}</h1>
                <p>{foodData.Description}</p>
                <br/>
                <p>Ingredients: {foodData.Recipe}</p>
                <p>Upvotes: {foodData.Likes}</p>
                <br/>
                <Link to={`/Edit/${id}`} style={{color:'white'}}><button type="button">Edit</button></Link>
                <button type="button" onClick={deletePost}>Delete</button>
                <button type="button" onClick={updateLike}>Upvote</button>
                <br/>
            
            </div>
            <div className="Comments">
                {Array.isArray(comments) && comments.map((com)=>{
                    return(
                        <h3>{com.detail}</h3>
                    )
                
                })}
                
                    <div className="Comment_button">
                        <label>
                            <input type="text" id="comment" name="comment" onChange={handleChange} placeholder="comment here"/>
                        </label>
                        <button type="button" onClick={createComment}>Post</button>
                    </div>
            </div>
            
        </>
    )
}
export default Details