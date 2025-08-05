import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../client.js";
import Card from "../Component/Card.jsx";
import './Gallery.css'
const Gallery = () =>{
    const [filter,setFilter] = useState([])
    const [list,setList] = useState([])
    const [search,setSearch] =useState('')
    const [buttonText, setButtonText] = useState("Descending/Newest ↓");
    const [sortState, setSortState] = useState(false)
    const [sortVar, setSortVar] = useState('created_at')
    
    
    const SearchItem = async(userInput) =>{
        setSearch(userInput);
        if(userInput!==''){
            const {data,error} = await supabase
            .from('Food')
            .select()
            .or(`Topic.ilike.%${userInput}%`)
            .order(sortVar,{ascending:sortState})
        if(error){
            console.log('Search error')
        }
        else{
            setFilter(data||[])
            }
        }
        else{
            setFilter([])
        }
        
        
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const {data}=await supabase
                .from('Food')
                .select('*')
                .order(sortVar,{ascending:sortState})
        setList(data)
    }  
        fetchData();     
    },[sortState,sortVar])

   const dateSort = () => {
        setSortVar('created_at')
   }
   const LikeSort = () =>{
        setSortVar('Likes')
   }

    const handleClick = () => {
    setButtonText(prevText => prevText === "Descending/Newest ↓" ? "Ascending/Oldest ↑" : "Descending/Newest ↓");
    setSortState(!sortState);
  };

    return(
        <>
            <div className="usertoggles">
                <input
                    type='text'
                    placeholder="Search..."
                    onChange={(e)=>SearchItem(e.target.value)}
                />
                
                <div className="buttons-group">
                    <button type="button" onClick={LikeSort}>Upvote</button>
                    <button type="button" onClick={dateSort}>Upload</button>
                    <button type="button" onClick={handleClick}>{buttonText}</button>
                </div>
            </div>

            {search.length>0?filter.map((food)=>{
                return(
                    <Link to={`/Details/${food.id}`} style={{color:'white'}} key={food.id}>
                        <Card
                        created_at={food.created_at}
                        Topic={food.Topic}
                        Likes={food.Likes}
                        Blurb={food.Blurb}
                        Description={food.Description}
                        Recipe={food.Recipe}
                        Url={food.Url}
                                        />
                    </Link>
                )
                


            }):list.map((food)=>{
                return(
                    <Link to={`/Details/${food.id}`} style={{color:'white'}}>
                        <Card
                        key={food.id}
                        Topic={food.Topic}
                        created_at={food.created_at}
                        Likes={food.Likes}
                        Blurb={food.Blurb}
                        Description={food.Description}
                        Recipe={food.Recipe}
                        Url={food.Url}
                                        />
                    </Link>
                )
                  
            })}
        </>
    
    )
    
}

export default Gallery