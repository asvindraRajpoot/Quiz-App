import React from "react";
import Loader from "./Loader";
import Quiz from "./Quiz";
class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            category: null,
            difficulty: null,
            quiz:false,
            id:null,
        }
    }
    componentDidMount() {
        fetch("https://opentdb.com/api_category.php")
            .then((data) => data.json())
            .then((data) => this.setState({
                data: data,

            }))
    }
    handleCategory = (e) => {
        const elm = e.target.innerText;
        console.log(elm);
        this.setState({
            category: elm,
            id:e.target.id,
        })


    }
    handleDifficulty = (e) => {
        const elm = e.target.innerText;
        console.log(e.target);
        this.setState({
            difficulty: elm,
        })


    }
    handleSubmit = () => {

       
        if(this.state.difficulty && this.state.category){
            this.setState({
                quiz:true,
            })
        
        }
    }





    render() {
        // console.log(this.state.category, this.state.difficulty);
       // console.log('inside checker', this.state.difficulty, this.state.category);
        if (!this.state.data) {

            return <Loader />
        } else if(this.state.data && !this.state.quiz){
            let categories = this.state.data.trivia_categories;
            console.log(categories);
            return (
                <>
                    <section className="container">
                        <div>
                            <h2>Select your category and Difficulty Level</h2>
                            <div className="level1">
                                <span onClick={(e) => this.handleDifficulty(e)} className={this.state.difficulty === "Easy" ? "active level" : "level"}>Easy</span>
                                <span onClick={(e) => this.handleDifficulty(e)} className={this.state.difficulty === "Medium" ? "active level" : "level"}>Medium</span>
                                <span onClick={(e) => this.handleDifficulty(e)} className={this.state.difficulty === "Hard" ? "active level" : "level"}>Hard</span>

                            </div>
                        </div>
                        <div className="categories">
                            {

                                categories.map((c) => {
                                    return (
                                        <div key={c.id} className={this.state.category === c.name ? "cat active" : "cat"}>
                                            <h4 onClick={(e) => this.handleCategory(e)} id={c.id}>{c.name}</h4>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </section>
                    {
                        this.state.category && this.state.difficulty ? <div className="start" onClick={this.handleSubmit}><button>Start</button></div> : <></>
                    }
                </>
            )
        }else{
            return <Quiz filter={this.state}/>
        }
    }
}

export default Hero;