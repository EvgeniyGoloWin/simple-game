import {questions} from "../constants/questions";
import React from "react";

export const Result = ({correct})=> {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href='/'>
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}