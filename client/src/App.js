import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [ message, setMessage ] = useState('')

    const handleMessage = (e) => {
        axios.get('http://localhost:5000/api/test').then((res) => {
            setMessage(res.data.message)
        }).catch((e) => {
            console.log(e)
        })
    }

    return(
        <div>
            <h4>Welcome</h4>
            <button onClick={handleMessage}>message</button>
            {message}
        </div>
    );
}

export default App