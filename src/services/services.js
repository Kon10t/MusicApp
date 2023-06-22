import React, { useEffect, useState } from "react";
import axios from 'axios';

// const res = await axios.get("http://localhost:8800/audio_files")
// get - запрос
function GetService(url) {
    const [data, setData] = useState(null);

        const fetchAllAudios = async () => {
            try {
                const res = await axios.get(`${url}`);
                setData(res.data);
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchAllAudios()

    return data;
}

export default GetService