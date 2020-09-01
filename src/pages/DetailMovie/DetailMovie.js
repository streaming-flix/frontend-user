import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Card } from "react-bootstrap";

function DetailMovie() {
    return (
      <>
         <Navbar/>
         <div style={{ marginTop: '3em' }}>
           <Card.Header>Title Movie (year)</Card.Header>
           <div class="embed-responsive embed-responsive-16by9">
              <card>
                <Card.Header>Title Movie (year)</Card.Header>
                
                <iframe width="736" height="414" src="https://www.youtube.com/embed/c34Bw_bKbF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </card>
            </div>
          </div>

      <Button style={{ margin: '2em'}} variant="info">Watch Full Movie</Button>{' '}
      <div>
<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
  <Card.Header style={{width:'100%'}}>Title Movie (year)</Card.Header>
  <Card.Img  style={{ height: '16rem', width: '14rem'}} variant="top" src="holder.js/100px180" />
  <Card.Text >
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
</div>
</div>

        
        </>
    );
}

export default DetailMovie;

