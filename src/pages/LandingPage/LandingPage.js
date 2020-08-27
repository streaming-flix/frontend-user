import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbo";
import CardMovie from "../../components/CardMovie";

function LandingPage() {
    return (
        <div>
<Navbar />
            <Jumbotron />
            <h1>Trending</h1>
            <CardMovie/>
        </div>
    );
}

export default LandingPage;