import React from "react";

class ButtonClass extends React.Component {

    constructor(props) {
        super(props)

        this.count_custom = 0;

        this.state = {
            value: 100,
            count: 0,
            show: false,
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 10,
                    "id": 199,
                    "title": "numquam repellendus a magnam",
                    "completed": true
                },
                {
                    "userId": 10,
                    "id": 200,
                    "title": "ipsam aperiam voluptates qui",
                    "completed": false
                }
            ]
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    /* 
        Fragmnet  ==  <></>
    */

    handleClick() {
        console.log("her....");
        // console.log(this)
        // this.count = this.count + 1;
        // console.log("count value", this.count) // 2
        // this.render();

        let temp = [...this.state.todos]
        temp.unshift({ id: temp.length + 1, title: "random" })

        // value: this.state.value + 1,
        // count: this.state.count + 1,
        // show: true,
        this.setState({
            todos: temp,
        })

    }

    handleDelete(index) {
        let todos = this.state.todos.filter((el, i) => i != index)
        this.setState({
            todos
        })
    }

    componentDidMount() {
        console.log("mounted.....");
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }


    render() {

        console.log("render...");
        // console.log("render..." ,this.count);

        //   => 0
        // this.count = this.count + 1  // 1

        // setTimeout(() => {
        //     console.log("here....")
        //     this.count = this.count + 1;
        //     console.log("count value", this.count) // 2
        // }, 1000)

        // console.log("load dom..");
        // this.props.text = "changed....";

        console.log("todos", this.state.todos)


        return <>
            {
                this.state.todos.map((el, index) => {
                    return <li key={el.id?.toString()}>{el.title}  <button onClick={() => this.handleDelete(index)}>delete</button></li>
                    return <li >{el}  <button onClick={this.handleDelete}>delete</button></li>
                    return <li onClick={this.handleDelete(index)}>{el}</li>
                })
            }

            {1 + 1 + 1}

            {
                this.state.show
                &&
                <h1>Welocme</h1>
            }
            <h1>{this.state.count} </h1>
            <h1>{this.state.value} </h1>
            {/* <button onClick={this.handleClick()} >{this.props.text}</button> */}
            {/* VS */}
            <button onClick={this.handleClick} >{this.props.text}</button>
        </>
    }
}

export default ButtonClass
