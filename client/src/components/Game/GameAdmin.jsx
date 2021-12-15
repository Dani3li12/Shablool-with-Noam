import React from "react"
import "./Game.css"
import { kahoot } from "../../const/fakeDatabase"
import Quastion from "../Quastion/Quastion"

export default function Game() {
    let array = kahoot[0].games[0].quastions

    return (
        <div>
        {/* --------------------
        pass the game name to the Quastion component */}
            <Quastion />
        </div>
    )
}