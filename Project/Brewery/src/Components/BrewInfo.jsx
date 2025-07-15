import React, { useEffect, useState } from "react";

const BrewInfo = ({brew_id}) =>{
    const [Brewery,setBrewery] = useState('')
    useEffect(()=>{
        const getBrew = async() =>{
            const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${brew_id}`)
            const json = await response.json()
            setBrewery(json)
        }
            getBrew().catch(console.error)
    },[])
    return(
        <>
            <li className="main-list">
                <span>{Brewery.name}</span>
                
                <span>{Brewery.city}</span>
                <span>{Brewery.state}</span>
                 <span><a href={Brewery.website_url} target="_blank">
                {Brewery.website_url}
                </a></span>
               
            </li>
        </>
    )
}
export default BrewInfo