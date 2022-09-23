import React, { Component, Fragment } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: "class state value",
            called_once: false,
            url: "https://jsonplaceholder.typicode.com/todos"
        }
    }

    fetchData() {

        fetch(this.state.url)
            .then(response => response.json())
            .then(json => {
                // if (this.state.mount) {
                    this.setState({
                        todos: json,
                        called_once: true,
                    })
                // }
            })
    }

    // LIFE CYCLE methods 
    componentDidMount() {
        console.log("todo- mounted.");
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.url != this.state.url) {
            console.log("urll... updatedd...");
            this.fetchData();
        }

        console.log("state. updatedd...");
    }

    componentWillUnmount() {
        console.log("will - unmount");
        this.setState({
            mount: false,
        })
    }


    render() {
        console.log("render..");

        // if (!this.state.called_once) {
        //     this.fetchData();
        // }

        return (
            // <></>
            <Fragment>
                <div>
                    <input value={this.state.value} onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <h1>list</h1><button onClick={() => {
                        this.setState(
                            {
                                url: "https://jsonplaceholder.typicode.com/posts"
                            }
                        )
                    }}>get Post</button>
                    <hr />
                    {
                        this.state.todos.length > 0
                            ?
                            this.state.todos.map(el => {
                                return <li>{el.title}</li>
                            })
                            :
                            <>
                                <p>Loading....</p>
                                <p>empty list</p>
                            </>
                    }

                </div>
            </Fragment>
        );
    }
}

export default Todo;
