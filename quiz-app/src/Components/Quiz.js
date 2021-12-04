import React from "react";
import Loader from "./Loader";
import Result from "./Result";
class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foundQuiz: false,
            quesAndAns: null,
            QuesNo: 1,
            clickedAns: {
                question: "",
                answers: []
            },
            error: "",
            count: 0,
            quiz: [],
        }
    }
    componentDidMount() {
        const categoryId = this.props.filter.id;
        const difficulty = this.props.filter.difficulty;
        // console.log('inside componentDidMount', categoryId, difficulty);
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty.toLowerCase()}`)
            .then((data) => data.json())
            .then((data) => this.setState({
                foundQuiz: true,
                quesAndAns: data,

            }))
    }

    handleNext = () => {
        //console.log(this.state.clickedAns.answers.length, 'length')
        if (!this.state.count) {

            // console.log('inside if');
            this.setState({
                error: "Please select atleast one answer."
            })

        } else {
            let obj = {};
            obj.question = this.state.clickedAns.question;
            obj.answers = this.state.clickedAns.answers;
            let arr = this.state.quiz;
            arr.push(obj);
            console.log('pushed object', arr);
            this.setState({

                QuesNo: this.state.QuesNo + 1,
                count: 0,
                quiz: arr,
                error: "",
                clickedAns: {
                    question: "",
                    answers: [],
                },
            })
        }
    }

    handleAnswer = (e) => {
        // console.log(e.target.parentElement.parentElement.previousElementSibling);
        const q = e.target.parentElement.parentElement.previousElementSibling.innerText;
        const a = e.target.innerText;
        let clickedAns = this.state.clickedAns.answers;
        if (!this.state.clickedAns.answers.includes(a)) {
            //console.log('inside handle answer if');
            clickedAns.push(a)
            this.setState({

                clickedAns: {
                    question: q,
                    answers: clickedAns,

                },
                count: 1,
                error: "",

            })




        } else {
            clickedAns.splice(this.state.clickedAns.answers.indexOf(a), 1);
            this.setState({
                clickedAns: {
                    question: q,
                    answers: clickedAns,
                },
                count: 0,

            })
        }















    }
    handleReset = () => {
        this.setState({
            foundQuiz: false,
            quesAndAns: null,
            QuesNo: 1,
            clickedAns: {
                question: "",
                answers: [],
            },

        })
    }

    render() {
        // console.log('render');
        if (this.state.QuesNo > 10) {
            return <Result result={this.state} reset={this.handleReset} allQues={this.state.quesAndAns.results} />


        } else {

            if (this.state.foundQuiz && this.state.quesAndAns) {
                const allQues = this.state.quesAndAns.results;
                //console.log(allQues);
                const order = this.state.QuesNo - 1;
                // console.log(this.state.clickedAns.answers, 'updated');
                // //  console.log(allQues[0], 'value');
               // console.log(order, 'order');
               // console.log(this.state.clickedAns.answers.includes(allQues[order].correct_answer))
               // console.log(this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[0]));
                // console.log(this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[0]));
                // console.log(this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[1]));
                // console.log(this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[2]));


                return (
                    <section>
                        <div className="container">
                            <div className="progress">
                                <span className="first-ques">Question {this.state.QuesNo}/10</span>
                                <progress value={10 * this.state.QuesNo} max="100"></progress>
                            </div>
                            <h5>{allQues[order].question}</h5>

                            <ul className="ques">
                                {allQues[order].correct_answer ? <div> <li onClick={(e) => this.handleAnswer(e)} className={this.state.clickedAns.answers.includes(allQues[order].correct_answer) ? "clickedAns" : ""}>{allQues[order].correct_answer}</li></div> : <></>}
                                {allQues[order].incorrect_answers[0] ? <div> <li onClick={(e) => this.handleAnswer(e)} className={this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[0]) ? "clickedAns" : ""}>{allQues[order].incorrect_answers[0]}</li></div> : <></>}
                                {allQues[order].incorrect_answers[1] ? <div> <li onClick={(e) => this.handleAnswer(e)} className={this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[1]) ? "clickedAns" : ""}>{allQues[order].incorrect_answers[1]}</li></div> : <></>}
                                {allQues[order].incorrect_answers[2] ? <div> <li onClick={(e) => this.handleAnswer(e)} className={this.state.clickedAns.answers.includes(allQues[order].incorrect_answers[2]) ? "clickedAns" : ""}>{allQues[order].incorrect_answers[2]}</li></div> : <></>}
                            </ul>
                            <div className="next"><button onClick={this.handleNext}>Next</button></div>
                            {
                                this.state.error ? <span className="error">{this.state.error}</span> : <></>
                            }
                        </div>

                    </section>

                )
            } else {
                return <Loader />
            }

        }

    }
}

export default Quiz;