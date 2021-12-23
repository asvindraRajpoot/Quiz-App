import Header from "./Header";
import {Link} from "react-router-dom";
function Home() {
    return (
        <><Header/>
            <div className="container ">
                <h1>
                    Welcome to the Quiz Trivia!
                </h1>
                <Link to="/app">
                <div className="goto-btn"><a href={"s"} className="goto">Goto Quizzes</a></div>
                </Link>
            </div>
        </>
    )
}

export default Home;