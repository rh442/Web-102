import { Component, useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const BrewDetail = () => {
    const {id} = useParams()
    const [fullDetails,setFullDetails] = useState(null)
    useEffect(()=>{
        const getBrewDetail = async () =>{
            const details = await fetch (
                `https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`

            )
             const detailsJson = await details.json()
            const brewery = detailsJson[0]; 
             setFullDetails({
                name: brewery.name,
                type: brewery.brewery_type,
                address: brewery.address_1,
                state: brewery.state,
                city: brewery.city,
                country:brewery.country,
                phone: brewery.phone,
                web: brewery.website_url
             })
        }
       getBrewDetail();
    },[id])

    return (
    <>
        <h1>{fullDetails?.name}</h1>
        <br/>
        <h2>Type: {fullDetails?.type}</h2>
        <h2>Address: {fullDetails?.address}</h2>
        <h2>City: {fullDetails?.city}</h2>
        <h2>State: {fullDetails?.state}</h2>
        <h2>Country: {fullDetails?.country}</h2>
        <h2>Phone: {fullDetails?.phone}</h2>
        <h2>Website: <a href={fullDetails?.web} target="_blank">
                {fullDetails?.web}
                </a></h2>
        
    
    </>)
}

export default BrewDetail