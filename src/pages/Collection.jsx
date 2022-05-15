import React from "react"
import { useState, useEffect} from 'react'


const Collection = ()=>{
    const URL ='https://collectionapi.metmuseum.org/public/collection/v1/departments'
    const[art, setArt] = useState([])

    useEffect(() => {
        const getArt = async () => {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setArt(data.departments)
                console.log(art)
            } catch (error) {
                console.log('there has been an error', error)
            }
        }
        getArt()
    }, [])

    return(
        <div>
            {art.map((department, idx) =>{
                return(
                    <ul key={idx}>
                        <li>{department.displayName}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Collection