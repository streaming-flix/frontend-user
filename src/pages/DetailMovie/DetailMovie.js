import React from "react";
import Navbar from "../../components/Navbar";
import { Jumbotron , Image, Container, ResponsiveEmbed, Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

function DetailMovie() {
    return (
        <div>
          <Navbar/>
          <div class="embed-responsive embed-responsive-16by9">
          <card><h3>Trailer</h3>
  <iframe  class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe></card>
</div>
      <Button style={{ margin: '2em'}} variant="info">Watch Full Movie</Button>{' '}
<Card>
  <Card.Header>Title Movie (year)</Card.Header>
  <Card.Img className="card text-left" style={{ height: '16rem', width: '14rem'}} variant="top" src="holder.js/100px180" />
  <Card.Text className="card text-top">
    <blockquote className="blockquote mb-0">
      <p>
        Rating
      </p>
      <p>
        sipnosis
      </p>
      <p>
        stars
      </p>
      <p>
       genre
      </p>
      <p>
       director
      </p>
    </blockquote>
  </Card.Text>
</Card>


        </div>
    );
}

export default DetailMovie;

