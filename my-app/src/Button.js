
import { useState,useEffect } from "react"

export default function Button(props) {

    // const [<variable_name>,<functionToMutateOurStateVaraible>] = useState([])
    const [todos, setTodos] = useState(["one", "two"])

    const [state, setstate] = useState({
        useranme: "usrname",
        password: "password"
    });

    let btn_style = {
        backgroundColor: props.color,
        border: "none",
    }

    function handleClick() {

        setstate(
            {
                useranme: "ram"
            }
        )


        let temp = [...todos]
        temp.push("new task ")
        setTodos(temp)

        // this.setState({
        //     value: this.state.value + 1,
        //     count: this.state.count + 1,
        //     show: true,
        //     todos: temp,
        // })

    }

    function handleDelete(index) {
        let temp = todos.filter((el, i) => i != index)
        // this.setState({
        //     todos
        // })
        setTodos(temp)
    }

    // console.log({ props })
    // return <button className="btn" style={btn_style}> {props.text} </button>
    // console.log("button-render");
    return <div>

        <hr>
        </hr>
        {
            todos.map((el, index) => {
                return <li >{el} <button onClick={() => handleDelete(index)}>delete </button></li>
            })
        }
        <button className="btn" style={{
            backgroundColor: props.color,
            border: "none",
        }} onClick={handleClick}> {props.text} </button>
        <hr />
    </div>

}

// Button()