import React from 'react'

const SelectedImage = ({match}) => {
    const url = "/image/" + match.params.id + ".jpg"
    return (
        <div>
            <img width='414' src={url} alt='test' />
            <audio controls autoPlay name="media">
              <source src="http://localhost:9000/tts/SNS에공유하시겠습니까?" type="audio/mpeg"></source>
            </audio>   
        </div>
    )
}

export default SelectedImage