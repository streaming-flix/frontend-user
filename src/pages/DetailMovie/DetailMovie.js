import React, {useEffect} from "react";
import Navbar from "../../components/Navbar";
import { Button, Card } from "react-bootstrap";
import poster from "../../assets/images/Bad-genius.jpg"
import { useSelector, useDispatch} from 'react-redux';
import { fetchGetAllMovies } from '../../redux/actions';
import { useParams } from "react-router-dom";


function DetailMovie() {
const {id} = useParams();
const dispatch = useDispatch();
const movie = useSelector((state) => state.GetAllMovie);
console.log(movie, 'movie');

useEffect(() => {
  dispatch(fetchGetAllMovies(id));
}, [dispatch, id]);
    return (
      <>
         <Navbar/>
         
           {movie.data !== undefined && (
             <>
             <div style={{ marginTop: '3em' }}>
               <Card.Header>Triller {movie.data.title}</Card.Header>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe title="Trailer movie" width="736" height="414" src={movie.data.link_triler} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
             </div>
             
             <Button style={{ margin: '2em'}} variant="info">Watch Full Movie</Button>
             
             <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
               <Card.Header style={{width:'100%'}}>{movie.data.title} {movie.data.year}</Card.Header>
               <Card.Img  style={{ marginTop:'2rem', height: '16rem', width: '14rem'}} variant="top" src={poster} />
               <Card.Text style={{ marginTop:'2rem'}}>
                   <p>
                     Rating:
                     {movie.data.rating}
                   </p>
                   <p>
                     sipnosis:
                     {movie.data.sipnosis}
                   </p>
                   <p>
                     stars:
                     {movie.data.actor}
                   </p>
                   <p>
                     genre:
                     {movie.data.genre}
                   </p>
                   <p>
                     director:
                     {movie.data.director}
                   </p>
               </Card.Text>
             </div>
             </>
               )
               }
           


        
        </>
    );
}

export default DetailMovie;

