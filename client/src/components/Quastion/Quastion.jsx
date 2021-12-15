import React from "react"
import "./Quastion.css"
import { kahoot } from "../../const/fakeDatabase"

export default function Quastion(props) {
    const array = kahoot[0].games[0]
    let answer_array = []

    array.quastions[0].answers.map(answer => {
        answer_array.push(answer)
    })

    console.log(answer_array);
    return (
        <div className="quastion">
            <div> {array.quastions[0].quastion} </div>
            <div className="quastionImage_create">הוספת תמונה</div>
            <div className="answers_create">
                <div className="answer answer1"> {answer_array[0]} </div>
                <div className="answer answer2"> {answer_array[1]} </div>
                <div className="answer answer3"> {answer_array[2]} </div>
                <div className="answer answer4"> {answer_array[3]} </div>
            </div>
        </div>
    )
}