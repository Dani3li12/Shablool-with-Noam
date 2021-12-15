import React, { useState } from "react"
import "../Game/Game.css"
import { kahoot } from "../../const/fakeDatabase"


export default function GameClient() {
    const [answerChoice, setChoice] = useState()
    const [quastionNum, setQuastion] = useState(0)
    let array = kahoot[0].games[0].quastions[quastionNum]
    return (
        <div>
            {!answerChoice ?
                <div className="answers_create">
                    <div className="answer_client answer1" onClick={() => { setChoice(array.answers[0]) }}>{array.answers[0]}</div>
                    <div className="answer_client answer2" onClick={() => { setChoice(array.answers[1]) }}>{array.answers[1]}</div>
                    <div className="answer_client answer3" onClick={() => { setChoice(array.answers[2]) }}>{array.answers[2]}</div>
                    <div className="answer_client answer4" onClick={() => { setChoice(array.answers[3]) }}>{array.answers[3]}</div>
                </div> : 
                <div className="right" onClick={() => { setQuastion(quastionNum + 1); setChoice() }} style={{ backgroundColor: answerChoice == array.rightAnswer ? "green" : "red" }}></div>}
        </div>
    )
}