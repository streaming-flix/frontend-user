import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetById } from "../../redux/actions";
import { useParams } from "react-router-dom";

function DetailMovie() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.detailmovie);
    console.log(movie, "movie");

    useEffect(() => {
        dispatch(fetchGetById(id));
        // eslint-disable-next-lines
    }, [dispatch]);
    return (
        <>
            <Navbar />

            <>
                <div style={{ marginTop: "3em" }}>
                    <Card.Header>Triller {movie.title}</Card.Header>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                            title="Trailer movie"
                            width="736"
                            height="414"
                            src={movie.link_triler}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>

                <Button href={movie.link_full} style={{ margin: "2em" }} variant="info">
                    Watch Full Movie
                </Button>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}
                >
                    <Card.Header style={{ width: "100%" }}>
                        {movie.title} {movie.year}
                    </Card.Header>
                    <Card.Img
                        style={{
                            marginTop: "2rem",
                            height: "16rem",
                            width: "14rem",
                        }}
                        variant="top"
                        src={movie.image_url}
                    />
                    <Card.Text style={{ marginTop: "2rem", marginLeft: "2rem", marginRight: "2rem" }}>
                        <p>
                            Rating:<br></br>
                            {movie.rating}/10
                        </p>
                        <p>
                            sipnosis:<br></br>
                            {movie.sipnosis}
                        </p>
                        <p>
                            stars:<br></br>
                            {movie.actor}
                        </p>
                        <p>
                            genre:<br></br>
                            {movie.genre}
                        </p>
                        <p>
                            director:<br></br>
                            {movie.director}
                        </p>
                    </Card.Text>
                </div>
            </>
        </>
    );
}

export default DetailMovie;
