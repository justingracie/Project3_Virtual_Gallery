import React from "react"
import { useState } from 'react'
// import Search from "./Search"
// import Results from "./Results"

// import { Link } from 'react-router-dom'
const Browse = ()=> {
    const URL ='https://api.artic.edu/api/v1/artworks/search?q=VanGough&fields=title,artist_title,image_id,id&limit=1'
    const[query, setQuery] = useState(null)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log('you clicked PUSH ME')
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setQuery(data.data)
          
        } catch (error) {
            console.log('Seems to be a Problem here', error)
        }
        // console.log(query.title)
    }
   
    // function handleChage(e){
    //     setQuery(e.target.value)
    // }
    return(
        <div className="index">
             
            {/* <> */}
                <div>
                    <h1>Want to discover new Art? Click the button!</h1>
                      
                        <div>
                            <button className="button"
                                    onClick={handleSubmit}>
                                Push ME!!!</button>
                        </div>
                        {query ?
                        <>
                            <h1>{query[0].title}</h1>
                            <h3>{query[0].artist_title}</h3>
                            <img src={`https://www.artic.edu/iiif/2/${query[0].image_id}/full/843,/0/default.jpg`} alt={query[0].title}/>
                        </>: <h2></h2> } 
                </div>

            
        </div>
    )
}

export default Browse