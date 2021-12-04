function Result(props) {
    console.log(props.reset, props.result);
    return (
        <section className="container">
            <div className="result-header">
                <h3>Result of the quiz</h3>
                <div>
                    <button>Retake Quiz</button>
                </div>
            </div>
            <div className="result-table">
                <table>
                    <tr>
                        <th>Question</th>
                        <th>Correct Answers</th>
                        <th>You Selected</th>
                        <th>Right Or Wrong</th>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>

                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td>ques1</td>
                        <td>corr ans</td>
                        <td>selec</td>
                        <td>r or w</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td colSpan="2">4</td>

                    </tr>
                </table>
            </div>
        </section>
    );
}

export default Result;
