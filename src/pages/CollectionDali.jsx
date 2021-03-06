
import React from "react"
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const CollectionDali = ()=>{
    const URL ='https://api.artic.edu/api/v1/artworks/search?q=SalvadorDali&fields=title,artist_title,image_id,id&limit=24'
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
    return(
        <div >
            <div>
                <h1 className="title">Dali Exhibit</h1>
            </div>
            <div   className="index imageContainer" id="grid">
            {art ? 
            <>
                {art.map ((work, idx)=>{
                    return(
                        <div key={idx}>
                            <Link to={`/collection/${work.id}`}>
                               { (work.image_id === null) ?
                                         <img className="indexImage art" src={'../default.jpeg'} alt='Mona Lisa'/>
                                     :
                                        <img className="indexImage art" src={`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`} alt={work.title}/>
                                 } 
                            </Link>
                        </div>                       
                    )
                }
                )}
            </> : <h2>Loading...</h2> }
            
            </div>
        </div>
    )
}
export default CollectionDali