const Home = ()=>{
    return(
        <div>
            <h1>Home Page Goes Here</h1>
                <ul className="gallery js-gallery">
                    <li className="homeArt"> <img src="https://www.artic.edu/iiif/2/86cb98bf-0279-86ce-3995-fa42e6d76be2/full/843,/0/default.jpg"></img></li>
                    <li className="homeArt"> <img src="https://www.artic.edu/iiif/2/11cfc829-cf72-3b5f-c59f-44357721d09e/full/843,/0/default.jpg"></img></li>
                    <li className="homeArt"> <img src="https://www.artic.edu/iiif/2/b7b7ecd0-5a50-b89a-c72a-d435a1957c73/full/843,/0/default.jpg"></img></li>
                    {/* <li className="homeArt" style="background-image: url('https://www.artic.edu/iiif/2/11cfc829-cf72-3b5f-c59f-44357721d09e/full/843,/0/default.jpg')"></li> */}
                    {/* <li className="homeArt" style="background-image: url('https://www.artic.edu/iiif/2/b7b7ecd0-5a50-b89a-c72a-d435a1957c73/full/843,/0/default.jpg')"></li> */}

                </ul>
        </div>
    )
}

export default Home