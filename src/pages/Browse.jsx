import React from "react"
import { useState } from 'react'

const Browse = ()=> {
    const[query, setQuery] = useState(null)
    const handleSubmit = async (e) =>{
        const newId = Math.floor(Math.random() * 116127)
        const URL =`https://api.artic.edu/api/v1/artworks/${newId}`
        try {
            const response = await fetch(URL)
            const data = await response.json()
            if(data.status === 404){
                handleSubmit()
            }else{
                setQuery(data.data)
            }
        } catch (error) {
            console.log('Seems to be a Problem here')
        }
    }
    return(
        <div className="index">
                <div>
                    <h2>Want to discover new Art? Click the button!</h2>
                        <div>
                            <button className="button"
                                    onClick={handleSubmit}
                                    >
                                CLICK HERE</button>
                        </div>
                        {query ?
                        <>
                            <h1>{query.title}</h1>
                            <h3>{query.artist_title}</h3>
                            <img src={`https://www.artic.edu/iiif/2/${query.image_id}/full/843,/0/default.jpg`} alt={query.title}/>
                        </>: <h2>Loading...</h2> } 
                </div>
        </div>
    )
}
export default Browse