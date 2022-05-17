import React from "react"
import { useState } from 'react'
// import Search from "./Search"
// import Results from "./Results"

// import { Link } from 'react-router-dom'
const Browse = ()=> {
    const URL ='https://api.artic.edu/api/v1/artworks/search?q=flowers&limit=1'
    const[query, setQuery] = useState(null)
    // const randomArt = document.querySelector('.button')
    // randomArt.addEventListener('click', handleSubmit)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log('you clicked PUSH ME')
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setQuery(data.data)
            console.log(query)
        } catch (error) {
            console.log('Seems to be a Problem here', error)
        }
    }
    // function handleChage(e){
    //     setQuery(e.target.value)
    // }
    return(
        <div>
             {/* {query ? */}
            {/* <> */}
                <div>
                    <h1>Not Sure What to look for?  Click this button to learn discover new Art!</h1>
                      
                        <div>
                            <button className="button"
                                    onClick={handleSubmit}>
                                Push ME!!!</button>
                           
                        </div>
                </div>
            {/* </>  */}
            {/* : <h2>Loading...</h2> } */}
        </div>
    )
}

export default Browse