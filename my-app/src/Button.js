
export default function Button(props) {


    let btn_style = {
        backgroundColor: props.color,
        border: "none",
    }

    // console.log({ props })
    // return <button className="btn" style={btn_style}> {props.text} </button>
    // console.log("button-render");
    return <div>
        <button className="btn" style={{
            backgroundColor: props.color,
            border: "none",
        }}> {props.text} </button>
        <hr />
    </div>

}

// Button()