import React from "react";


class Test1 extends React.Component{

    constructor(props) {
        console.clear();
        console.log("constructor");
        console.log(props)
        super();
        this.state = {
            s1:props.argu,
        }
    }

    buttonHandler = () => {
        let value = this.state.s1;
        value++;
        this.setState({s1:value})
    }

    static getDerivedStateFromProps(props, state) {      //проверяет пропсы каждый раз. Узнать что лежит в них и изменились ли они
        console.log("get derived state")
        return (null);
        // return({"s1":props.argu})
    }

    componentDidMount() {                      // выводится после того как компонент закончил отрисовку
        console.log("component did mount")      //может использоваться для того чтобы сделать чтото после отрисовки компонента
    }

    componentDidUpdate() {                      //сообщает о том что компонент был обновлен
        console.log("component did Update")
    }

    render() {
        console.log("render 1")
        return (
            <>
                {console.log("render 2")}
                <button onClick={this.buttonHandler}>Push</button>
                <p>{this.state.s1 }</p>

            </>
        )
    }
}


export default Test1;