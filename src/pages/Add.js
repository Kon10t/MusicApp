import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [audio, setAudio] = useState({
        artist: "",
        path: "",
        name: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setAudio(prev => ({...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/audio_files", audio)
            navigate("/")
        }
        catch(err) {
            console.log(err)
        }
    }

    console.log(audio)
    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input type="text" placeholder='artist' onChange={handleChange} name="artist"/>
            <input type="text" placeholder='path' onChange={handleChange} name="path"/>
            <input type="text" placeholder='name' onChange={handleChange} name="name"/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add