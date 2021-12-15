const kahoot = [
    {
        name: "Noam Delmar",
        games: [
            {
                id: 1,
                name: "simba",
                image: "",
                descripshen: "sdfdsdfdsfsdsdffrd",
                quastions: [
                    {
                        quastion: "quastion 1",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "1",
                        image: ""
                    },
                    {
                        quastion: "quastion 2",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "1",
                        image: ""
                    },
                    {
                        quastion: "quastion 3",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "3",
                        image: ""
                    }
                ]
            },
            {
                id: 1,
                name: "oliver",
                image: "",
                descripshen: "sdfdsdfdsfsdsdffrd",
                quastions: [
                    {
                        id: 1,
                        quastion: "quastion 1",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "1",
                        image: ""
                    },
                    {
                        id: 2,
                        quastion: "quastion 2",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "1",
                        image: ""
                    },
                    {
                        id: 3,
                        quastion: "quastion 3",
                        answers: [ "1", "2", "3", "4"],
                        rightAnswer: "1",
                        image: ""
                    }
                ]
            }
        ] 
    }
]

const addQuastion = (quastionName, answer1, answer2, answer3, answer4, rightAnswer) => {
    const array = kahoot[0].games[0].quastions
    array.push({
        quastion: quastionName,
        answers: [ answer1, answer2, answer3, answer4],
        rightAnswer: rightAnswer
    })
}

export {kahoot, addQuastion}