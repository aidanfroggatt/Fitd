import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/message").then((response) => {
            setMessage(response.data.message);
        });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Home;
