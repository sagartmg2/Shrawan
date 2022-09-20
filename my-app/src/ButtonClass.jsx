import React from "react";

class ButtonClass extends React.Component {

    constructor(props) {
        super(props)

        this.count_custom = 0;

        this.state = {
            value: 100,
            count: 0,
            show: false,
            todos: [],
        }

        this.handleClick = this.handleClick.bind(this)
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

        this.setState({
            value: this.state.value + 1,
            count: this.state.count + 1,
            show: true,
            todos: ["one", "task two"]
        })

    }

    handleDelete(index) {
        let todos = ["threee"]
        this.setState({
            todos
        })
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

        return <>
            {
                this.state.todos.map((el, index) => {
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
