export default function Result({score, quizLength, handleRestart}) {

    return (
        <div className="card">
            <h2>Result</h2>
            <p>You got {score} out of {quizLength}.</p>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}