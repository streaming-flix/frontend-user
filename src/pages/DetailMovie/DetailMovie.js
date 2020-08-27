import React from "react";
import Navbar from "../../components/Navbar";
import { Jumbotron , Image, Container} from "react-bootstrap";
import gots8 from '../../assets/images/GoTS8.jpg';

function DetailMovie() {
    return (
        <div>
            <Navbar />
            <Jumbotron fluid>
            <Container>

                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
            </Jumbotron>
        </div>
    );
}

export default DetailMovie;