import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from './App';
import { setUserStore } from './redux/reducer/user';
const User = () => {
    const user_context = useContext(UserContext);

    const user_store = useSelector((state) => state.user.value)

    const dispatch = useDispatch()

    // const [users, setUser] = useState([])
    // const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")

    // function fetchData() {
    //     // console.log("fetch data...");
    //     fetch(url)
            // {
            //     method: get 
            // }
    //         .then(response => response.json())
    //         .then(json => {
    //             // console.log("set user..");
    //             setUser(json)
    //         });
    // }

    // CRUD
    // GET
    

    // // componentDidMount(){
    // // }

    // useEffect(() => {
    //     console.log("did mount...");
    //     fetchData();
    //     // },dependencies)
    //     // }, [])
    // }, [])

    // useEffect(() => {
    //     console.log("did update......");
    //     fetchData();
    // }, [url])

    // if (users.length == 0) {
    //     // fetchData();
    // }

    console.log("render.. user .");

    return (
        <div>
            <h1>user list</h1>
            userContext: 
            {
                JSON.stringify(user_context.user)
            }
            <hr/>
            user store:
          
            {
                JSON.stringify(user_store)
            }
            <button onClick={() => dispatch(setUserStore())}>change user  redux store</button>
            <button onClick={() => user_context.setUser({ id: 1, name: "user one" })}>change user context</button>

            {/* <button onClick={() => {
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
            } */}
        </div>
    );
}

export default User;
