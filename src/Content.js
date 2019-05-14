import React from 'react'

function translator(voice) {
    return '해커톤 일등 각이다'
}

const Content = () => {
    const text = translator('eff')
    const audio = new Audio('http://localhost:9000/tts/해커톤일등각이다')
    return (
        <div>
            <h1 style={style}>{text}</h1> 
            <img src="/image/icon.png" alt="icon" width="70%" onClick={()=>audio.play()} />
        </div>
    )
}

const style = {
    fontSize: '5.3rem',
    margin: '3rem 0'
}

export default Content