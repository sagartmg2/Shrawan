import React, { useState, useEffect } from 'react';

const User = () => {

    const [users, setUser] = useState([])
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")

    function fetchData() {
        // console.log("fetch data...");
        fetch(url)
            .then(response => response.json())
            .then(json => {
                // console.log("set user..");
                setUser(json)
            });
    }

    // componentDidMount(){
    // }

    useEffect(() => {
        console.log("did mount...");
        fetchData();
        // },dependencies)
        // }, [])
    }, [])

    useEffect(() => {
        console.log("did update......");
        fetchData();
    }, [url])

    if (users.length == 0) {
        // fetchData();
    }
    console.log("render...");

    return (
        <div>
            <h1>user list</h1>

            <button onClick={() => {
                setUrl("https://jsonplaceholder.typicode.com/todos")
                // setUrl({a:[]})
            }}>get todos</button>
            {
                users.length > 0
                    ?
                    users.map(user => {
                        return <li key={user.id}>{user.title}</li>
                    })
                    :
                    <p>empty users.. logadin....</p>
            }
        </div>
    );
}

export default User;
