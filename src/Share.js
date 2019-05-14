import React from 'react'
import './Share.css'


const Share = () => {
    const facebook = new Audio('http://localhost:9000/tts/페이스북에공유하기')
    const insta = new Audio('http://localhost:9000/tts/인스타그램에공유하기')
    const twitter = new Audio('http://localhost:9000/tts/트위터에공유하기')
    return (
        <div>
            <button className='facebook' onClick={()=>facebook.play()} />
            <button className='instagram' onClick={()=>insta.play()} />
            <button className='twitter' onClick={()=>twitter.play()}/>
        </div>
    )
}

export default Share