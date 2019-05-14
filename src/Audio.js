import React from 'react'

const styles = {
    display: 'hidden'
}

function Audio(props) {
    const url = "http://localhost:9000/tts/" + props.word
    return(
        <div style={styles}>
            <audio controls preload="metadata">
                <source src={url} type="audio/mpeg"></source>
            </audio>  
        </div>
    )
}

export default Audio