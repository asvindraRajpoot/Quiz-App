import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Result(props) {
  var total = 0;
  console.log(props);
  const submittedAns = props.result.quiz;
  const originalAns = props.allQues;
  console.log("Submitted Ans:", submittedAns, "originalAns:", originalAns);

  return (
      <>
      <Header/>
    <section className="container">
      <div className="result-header">
        <h3>Result of the quiz</h3>
        <div>
          <button onClick={props.reset}>Retake Quiz</button>
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
          {originalAns.map((o, i) => {
            if (o.correct_answer === submittedAns[i].answers[0]) {
              total = total + 1;
            }

            return (
              <tr>
                <td>{o.question}</td>
                <td>{o.correct_answer}</td>
                <td>{submittedAns[i].answers[0]}</td>
                <td>
                  {o.correct_answer === submittedAns[i].answers[0] ? (
                    <i class="far fa-check-circle"></i>
                  ) : (
                    <i class="far fa-times-circle"></i>
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">Total</td>
            <td colSpan="2">{total}</td>
          </tr>
        </table>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Result;
