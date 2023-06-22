import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const Audios = () => {
    const [audios, setAudios] = useState([])

    useEffect(() => {
        const fetchAllAudios = async () => {
            try {
                const res = await axios.get("http://localhost:8800/audio_files")
                setAudios(res.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchAllAudios()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/audio_files/${id}`)
            window.location.reload()
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>Audio playlist</h1>
            <div className="audios">
                {audios.map(audio => (
                    <div className='audio' key={audio.id}>
                        <br/>
                        <h2>{audio.artist}</h2>
                        <h2>{audio.path}</h2>
                        <h2>{audio.name}</h2>
                        <button className="delete" onClick={() => handleDelete(audio.id)}>Delete</button>
                        <button className="update">
                            <Link 
                                to={`/update/${audio.id}`}>
                                Update
                            </Link>
                        </button>
                        <br/>                       
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">
                    Add new audios
                </Link>
            </button>
        </>
    )
}

export default Audios