import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbo";
import CardMovie from "../../components/CardMovie";
import Footer from "../../components/Footer"

function LandingPage() {
    return (
        <div>
<Navbar />
            <Jumbotron />
            <h1>TV Shows</h1>
            <CardMovie/>
            <h1>Movies</h1>
            <CardMovie/>
            <h1>The Latest</h1>
            <CardMovie/>
            <Footer/>
        </div>
    );
}

export default LandingPage;