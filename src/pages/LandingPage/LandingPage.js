import React from "react";
import Jumbotron from "../../components/Jumbo";
import CardMovie from "../../components/CardMovie";

function LandingPage() {
    return (
        <div>
            <Jumbotron />
            <h1>TV Shows</h1>
            <CardMovie/>
            <h1>Movies</h1>
            <CardMovie/>
            <h1>The Latest</h1>
            <CardMovie/>
        </div>
    );
}

export default LandingPage;