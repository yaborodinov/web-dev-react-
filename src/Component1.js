import React from "react"


class Component1 extends React.Component{          /* state  на основе класса!!! */

    constructor() {
        super();
        this.state = {
            count: 0,
            comment : []
        }
        this.myRef = React.createRef();      /* подключаем РЕФ в конструкторе  */
    }
    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount,
        })
    }


    addComment = () => {
        let comment = this.myRef.current.value
        let comments = this.state.comment;
        comments.push(comment)
        this.setState({
            "comments":comments
        })
        this.myRef.current.value = "";
    }


    render() {
        return (
            
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>this btn change state</button>
                </div>
                <div>
                    {this.state.count % 2 ===0 ? "even" : "odd"}
                </div>
                <div>
                    {this.state.count}
                </div>

                <div>
                    <textarea ref={this.myRef}></textarea>           {/*   обращаемся к текстэриа через РЕФ*/ }
                </div>
                <button onClick={this.addComment}>add comment</button>
                <div>
                    <ul>
                        {this.state.comment.map((item, index) => <li key={index.toString()}>{item}</li>)}  {/*  уникальный ключ key лучше прописать через такую конструкцию*/}
                    </ul>
                </div>



            </>
            

        )
    }
}

export default Component1;