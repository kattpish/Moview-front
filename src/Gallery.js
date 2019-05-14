import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SelectedImage from "./SelectedImage"

const Select = () => (
    <div>
        { [...Array(4)].map((_, i) => (
            <Link to={`/select/${i + 1}`} key={i + 1}>
                <img src={`/image/${i + 1}.jpg`} alt="test" width='414'/>
            </Link>
        )) }
        <audio autoPlay>
            <source src="http://localhost:9000/tts/갤러리입니다" type="audio/mpeg"></source>
        </audio>  
    </div>
)

const Gallery = () => (
    <Router>
        <div>
            <Route path="/" exact component={Select} />
            <Route path="/select/:id" component={SelectedImage} />
        </div>
    </Router>
)

export default Gallery