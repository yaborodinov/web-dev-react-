import React from "react";
import { useState } from "react";   /* чтобы использовать стейт в функциональном компоненте */


function Component2() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);

    let myRef = React.createRef();       /* подключаем РЕФ*/ 

    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount)
    }


    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value = "";
    }

    return (
        <>
            <h1>State</h1>
            <div>
                <button onClick={handler}>this btn change state</button>
            </div>
            <div>
                {count % 2 === 0 ? "even" : "odd"}
            </div>
            <div>
                {count}
            </div>





            <div>
                <textarea ref={myRef}></textarea>           {/*   обращаемся к текстэриа через РЕФ*/}
            </div>
            <button onClick={addComment}>add comment</button>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}  {/*  уникальный ключ key лучше прописать через такую конструкцию*/}
                </ul>
            </div>
        </>
    )
}


export default Component2;