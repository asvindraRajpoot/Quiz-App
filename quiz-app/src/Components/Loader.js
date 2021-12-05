import Header from "./Header";

function Loader() {
    return (
        <>
            <Header />
            <div class="wrapper">
                <div class="circle circle-1"></div>
                <div class="circle circle-1a"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
            </div>
            <strong className="loader">Loading&hellip;</strong>
        </>

    )
}

export default Loader;