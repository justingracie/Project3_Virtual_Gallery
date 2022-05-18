import React from "react"
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const CollectionDetails = ()=>{
    const params = useParams();
    const workId = params.id
    const URL =`https://api.artic.edu/api/v1/artworks/${workId}`
    const[artDetails, setArtDetails] = useState(null)
    const getArtShow = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setArtDetails(data.data)
        } catch (error) {
            console.log('there seems to be an issue!, error')
        }
    }
    useEffect(() =>{
        getArtShow();
    }, [])
    return(
        <div className="details">
            {artDetails ?
            <>
                <h1>{artDetails.title}</h1>
                <h3>{artDetails.artist_title}</h3>
                <h5>Medium: {artDetails.medium_display}</h5>
                <h5>Year: {artDetails.date_display}</h5>
                {console.log(artDetails.image_id)}
                <img src={`https://www.artic.edu/iiif/2/${artDetails.image_id}/full/843,/0/default.jpg`} alt={artDetails.title}/>
            </>: <h2>LOADING...</h2> }
        </div>
    )
}
export default CollectionDetails