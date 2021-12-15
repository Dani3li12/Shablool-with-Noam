import { React } from "react"
import "./Home.css"
import { kahoot } from "../../const/fakeDatabase"

export default function HomePage() {
    const array = kahoot[0].games[0]
    return (
        <div className="homePage">
            <ul className="navbar_home">
                <li className="li_home"><a href="/"> דף הבית </a></li>
                <li className="li_home"><a href="playpage"> עמוד משחק </a></li>
                <li className="li_home"><a href="#libary"> הספרייה שלי </a></li>
                <li className="li_home"><a href="#history"> היסטוריה </a></li>
                <li className="name_home"><p>Hey {kahoot[0].name}</p></li>
            </ul>
            <div className="creatGame_home" onClick={() => {
                window.location = "/create"
            }}>+ צור משחק חדש </div>

            <div className="lastPlayedContainer_home">
                <h3 className="lastplayedTitle_home" id="history">שיחקתי לאחרונה</h3>
                <div className="lastPlayed_home"></div>
            </div>
            <div className="lastPlayedContainer_home">
                <h3 className="lastplayedTitle_home">הפעלתי לאחרונה</h3>
                <div className="lastPlayed_home"></div>
            </div>

            <div id="libary" style={{ paddingBottom: "30vh" }}>
                <div className="container_libary">
                    <div className="image_libary"></div>
                    <div style={{ marginRight: "1vw" }}>
                        <h3 className="name_libary">{array.name}</h3>
                        <p className="numberQuastions_libary">{array.quastions.length}</p>
                        <p> {array.descripshen} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}