import React from "react"
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Collection = ()=>{
    const URL ='https://api.artic.edu/api/v1/artworks/search?q=cezanne&fields=title,artist_title,image_id&limit=10'
    const[art, setArt] = useState(null)
    
    useEffect(() => {
        const getArt = async () => {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setArt(data.data)
            } catch (error) {
                console.log('there has been an error', error)
            }
        }
        getArt()
    }, [])
    
    console.log(art)

    return(
        
        <div>
            {art ? 
            <>
               
                {art.map ((work, idx)=>{
                    return(
                        <div key={idx}>
                            {/* <h1>{work.title}</h1>
                            <h4>{work.artist_title}</h4> */}
                            <Link to={'/collection/:id'}>
                                <img src={`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`} alt={art.title}/>

                            </Link>

                        </div>                       
                    )
                }
                )}
            </> : <h2>Loading</h2> }
        </div>
    )
}

export default Collection