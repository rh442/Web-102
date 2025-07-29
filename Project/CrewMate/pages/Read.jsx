import React, { useEffect,useState } from 'react'
import { supabase } from '../client'
import Card from '../Components/Card'
import './Read.css'


const Read = (props) =>{
    const [crew,setCrew] = useState([])
    useEffect(()=>{
        const fetchCrew = async() =>{
            const {data} = await supabase
                .from('Crew')
                .select()
                .order('created_at',{ascending:false})
            setCrew(data)
        }
        fetchCrew();
    },[props])
    return(
        <>
            <div className="ReadPosts">
            {
                crew && crew.length > 0 ?
                [...crew]
                .map((crew,index) => 
                    <Card 
                        key={crew.id}
                        id={crew.id} 
                        Name={crew.Name}
                        Level={crew.Level}
                        Type={crew.Type}

                    />
                    
                ) : <div className='Nothing'><h1>{'No Crew Members Yet 😞'}</h1></div>
            }
        </div>  
        </>
    )
}
export default Read