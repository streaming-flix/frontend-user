import React from "react";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbo";
import CardMovie from "../../components/CardMovie";

function LandingPage() {
    return (
        <div>
<Navbar />
            <Jumbotron />
            <CardMovie/>
        </div>
    );
}

export default LandingPage;