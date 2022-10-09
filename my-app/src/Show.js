import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Show = () => {

    // const [todo, setTodo] = useState();
    // const [todo, setTodo] = useState(null);
    const [todo, setTodo] = useState({});

    let { id } = useParams();
    
    console.log({id});

    useEffect(() => {
        console.log("did mount...");
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(response => response.json())
            .then(json => {
                // console.log("set user..");
                setTodo(json)
            });

    }, [])


    if (!todo.title) {
        return <h1>loading....</h1>
    }

    return (
        <div>
            {/* {todo} */}
            <h1>{todo.title}</h1>
            <h3>status: {true}</h3>
            <h3>status: {todo.completed}</h3>
        </div>
    );
}

export default Show;
