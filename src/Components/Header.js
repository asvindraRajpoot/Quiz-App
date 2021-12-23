import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="nav-list">
                    <Link to="/">
                        <div>
                            <a href={"s"}><span>Quiz</span><span className="yellow">Trivia</span></a>
                        </div>
                    </Link>
                    <div className="about">
                        <Link to="/App">   <a href={"s"} className="link-hover">Quizzes</a></Link>
                        <Link to="/About">   <a href={"s"} className="link-hover">About</a></Link>
                        <Link to="/Contact">   <a href={"s"} className="link-hover">Contact</a></Link>


                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;