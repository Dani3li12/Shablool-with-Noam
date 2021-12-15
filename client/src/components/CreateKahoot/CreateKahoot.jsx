import React, { useState } from "react"
import "./CreateKahoot.css"
import { kahoot, addQuastion } from "../../const/fakeDatabase"
import { Refresh } from "@material-ui/icons"

export default function CreateKahoot() {
    const [quastionType, setQuastionType] = useState("quiz")
    const [rightAnswer, setRightAnswer] = useState()

    const array = kahoot[0].games[0].quastions

    const handleClick = () => {
        // array.push({
        //     quastion: document.getElementById("quastionName").value,
        //     answer1: document.getElementById("answer1").value,
        //     answer2: document.getElementById("answer2").value,
        //     answer3: document.getElementById("answer3").value,
        //     answer4: document.getElementById("answer4").value,
        //     rightAnswer: rightAnswer
        // })

        let quastion = document.getElementById("quastionName").value
        let answer1 = document.getElementById("answer1").value
        let answer2 = document.getElementById("answer2").value
        let answer3 = null
        let answer4 = null
        if (quastionType == "quiz") {
            answer3 = document.getElementById("answer3").value
            answer4 = document.getElementById("answer4").value
        }

        addQuastion(quastion, answer1, answer2, answer3, answer4, rightAnswer)
        console.log(array)
        // window.location = "/create"
        document.getElementById("quastionName").value = ""
        document.getElementById("answer1").value = ""
        document.getElementById("answer2").value = ""
        if (quastionType == "quiz") {
            document.getElementById("answer3").value = ""
            document.getElementById("answer4").value = ""
        }
        setRightAnswer("")
        let answers_clear = document.getElementsByClassName("answer_create")
        for (let i = 0; i < answers_clear.length; i++) {
            answers_clear[i].classList.add("clearAnswer")
        }
        document.getElementById(rightAnswer).checked = false
    }

    const onChange = () => {
        if (document.getElementById("type").value == "quiz") {
            setQuastionType("quiz")
        } else {
            setQuastionType("trueORfalse")
        }
    }

    return (
        <div>
            <div className="navbar_create">
                <ul className="navbar_create">
                    <li className="li_create"><div className="btn_create">שמור</div></li>
                    <li className="li_create"><div className="btn_create exitBtn_create" onClick={() => {
                        window.location = "/"
                    }}>צא</div></li>
                </ul>
            </div>
            <div className="quastionType_create">
                <form>
                    <select id="type" name="type" className="type_create" onChange={onChange}>
                        <option value="quiz">Quiz</option>
                        <option value="trueFalse">True or False</option>
                    </select>
                </form>
                <form>
                    <select name="time" className="type_create">
                        <option value="5 seconds"> 5 seconds</option>
                        <option value="10 seconds"> 10 seconds</option>
                        <option value="20 seconds"> 20 seconds</option>
                        <option value="30 seconds"> 30 seconds</option>
                        <option value="45 seconds"> 45 seconds</option>
                        <option value="1 minute"> 1 minute</option>
                    </select>
                </form>
            </div>
            <div className="newQuastion_create">
                <input className="quastionName_create" id="quastionName" name="quastionName" placeholder="הכנס את השאלה" />
                <div className="quastionImage_create">הוספת תמונה</div>
                <div>
                    <div>
                        <input className="answer_create" id="answer1" name="answer1" placeholder="תשובה 1" onChange={() => { document.getElementById("answer1").classList.add("answer_hover1") }} />
                        <input type="checkbox" className="rightanswer" id="rightanswer1" onClick={() => setRightAnswer("rightanswer1")} />

                        <input className="answer_create" id="answer2" name="answer2" placeholder="תשובה 2" onChange={() => { document.getElementById("answer2").classList.add("answer_hover2") }} />
                        <input type="checkbox" className="rightanswer" id="rightanswer2" onClick={() => setRightAnswer("rightanswer2")} />
                    </div>
                    {quastionType == "quiz" ?
                        <div>
                            <input className="answer_create" id="answer3" name="answer3" placeholder="תשובה 3" onChange={() => { document.getElementById("answer3").classList.add("answer_hover3") }} />
                            <input type="checkbox" className="rightanswer" id="rightanswer3" onClick={() => setRightAnswer("rightanswer3")} />

                            <input className="answer_create" id="answer4" name="answer4" placeholder="תשובה 4" onChange={() => { document.getElementById("answer4").classList.add("answer_hover4") }} />
                            <input type="checkbox" className="rightanswer" id="rightanswer4" onClick={() => setRightAnswer("rightanswer4")} />
                        </div> : null}
                </div>
            </div>
            <div>
                <div onClick={handleClick} className="addBtn_create"> הוסף שאלה</div>
            </div>
        </div>

    )
}