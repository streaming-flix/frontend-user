import React, { useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAllMovies } from "../redux/actions";

const CardMovie = () => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.GetAllMovies);
    console.log(movie);
    useEffect(() => {
        dispatch(fetchGetAllMovies());
    }, [dispatch]);
    
    return (
        <div style={{ display: "flex", margin: "2em", padding: "2em" }}>
            {movie.result !== undefined &&
                movie.result.map((item) => {
                    return (
                        <CardColumns
                            className="my-carousel"
                            style={{
                                display: "flex",
                                padding: "10px",
                                margin: "10px",
                            }}
                        >
                            <Link
                                to={`/detailmovie/${item._id}`}
                                key={item._id}
                            >
                                <Card
                                    className="my-carousel"
                                    style={{ width: "10rem" }}
                                >
                                    <Card.Img
                                        style={{ height: "10rem" }}
                                        variant="top"
                                        src={item.image_url}
                                    />
                                    <Card.Body
                                        style={{
                                            textAlign: "left",
                                            margin: 0,
                                            padding: "0.5em",
                                        }}
                                    >
                                        <Card.Text
                                            style={{
                                                fontSize: "0.8em",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </CardColumns>
                    );
                })}
        </div>
    );
};

export default CardMovie;
