import React from "react";
import { useEffect,useState } from "react";
import { useParams,Link } from 'react-router-dom'
import {supabase} from '../client'
import './View.css'

const View = () =>{
    const {id} = useParams()
    const[crew,setCrew] =useState({
        id:null,
        Name:'',
        Level:1,
        Type:'',
        Description:''
    },[id])
    useEffect(()=>{
        const fetchCrew = async()=>{
            const{data,error} = await supabase
                .from('Crew')
                .select('*')
                .eq('id', id)
                .single();
             if(error){
            console.log("retrieval error")
            }
            else{
                setCrew(data)
        }   
        }
        fetchCrew();
       

    },[id])  


    return(
        <>
        <div className="viewContainer">
            <div className="head">
                <h1>Crew Mate: {crew.Name}</h1>
                <h2>Crew Type: {crew.Type}</h2>
                <h3>Crew Level: {crew.Level}</h3>
            </div>
            <br/>
            <div className="head">
                <h2>Description</h2>
                 <h3>{crew.Description}</h3>
            </div>
            <Link to="/Gallery"><button className="Back">Back</button></Link>
            <Link to={"/Edit/"+id}><button>Edit</button></Link>
        </div>

        </>
    )

    
}
export default View