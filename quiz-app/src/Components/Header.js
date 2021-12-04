function Header() {
    return (
        <header>
            <div className="container">
            <nav className="nav-list">
                <div>
                    <a href={"s"}><span>Quiz</span><span className="yellow">Trivia</span></a>
                </div>
                <div className="about">
                    <a href={"s"}>Quizzes</a>
                    <a href={"s"}>About</a>
                    <a href={"s"}>Contact</a>
                </div>
            </nav>
            </div>
        </header>
    )
}

export default Header;