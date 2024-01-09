import { useState } from "react"

export default function EffectHook(props){
    const [cleanTest, setCleanTest] = useState(props.question)

    console.log(cleanTest)
    setCleanTest(prevTest => prevTest.map(
        {
            ...prevTest,
            incorrect: prevTest.incorrect + prevTest.correct
        }
    ))

    console.log(cleanTest)
    return (
        <div>
            <p>useEffect hook in Testing here</p>
            <div>
                {props.question.map(quiz => 
                <div>
                    <p>{quiz.questions}</p>
                        <span>
                            {quiz.incorrect}
                            {quiz.correct}
                        </span>
                </div>
                )}
            </div>

        </div>
    )
}