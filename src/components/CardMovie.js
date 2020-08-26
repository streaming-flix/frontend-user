import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const CardMovie = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CardMovie;

// import React, { useContext } from "react";

// import styled from "styled-components";
// import { useMediaQuery } from "react-responsive";
// import { navigate } from "@reach/router";

// // import { CTX } from "../Store/Store";

// import AltPoster from "../assets/images/Bad-genius.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStopwatch } from "@fortawesome/free-solid-svg-icons";

// import RemoveFavoriteButton from "../Helper/RemoveFavoriteButton";

// const CardContainer = styled.div`
//   position: relative;
//   flex: 0 0 9%;
//   display: flex;
//   justify-content: space-around;
//   margin: 1.55vw 1vw;
//   border-radius: 10px 10px 0 0;
//   transition: transform;
//   transition-duration: 0.25s;
//   color: white;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.08);
//   }
//   @media screen and (max-width: 3000px) {
//     flex: 0 0 10%;
//   }
//   @media screen and (max-width: 2000px) {
//     flex: 0 0 13%;
//   }
//   @media screen and (max-width: 1440px) {
//     flex: 1 0 15%;
//   }
//   @media screen and (max-width: 1025px) {
//     flex: 1 0 25%;
//   }
//   @media screen and (max-width: 640px) {
//     flex: 1 0 25%;
//   }
//   @media screen and (max-width: 361px) {
//     flex: 1 0 33%;
//   }
// `;

// const StyledImg = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// const StyledRuntime = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   margin: 0.25rem;
//   padding: 0.3rem;
//   border-radius: 10%;
//   background-color: rgba(0, 0, 0, 0.808);
// `;

// const RuntimeIcon = styled(FontAwesomeIcon).attrs({ icon: faStopwatch })`
//   font-size: 1em;
//   margin: 0 0.25rem 0 0;
// `;

// const StyledRating = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   margin: 0.25rem;
//   padding: 0.3rem;
//   border-radius: 10%;
//   background-color: rgba(0, 0, 0, 0.808);
// `;

// const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
//   color: gold;
//   margin: 0 0.25rem 0 0;
// `;

// const CardMovie = props => {
// //   const { dispatch } = useContext(CTX);
//   const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

// //   const { poster_path, title, vote_average } = props.movie;
//   const { runtime } = props.movie.details;

//   const imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;

//   function handleMovieClick() {
//     // dispatch({ type: "MOVIE_CLICKED", payload: props.movie });
//     navigate(`/fullmoviepage/`, { myMovie: props.movie });
//   }

//   const convertRuntime = num => {
//     let hours = num / 60;
//     let rhours = Math.floor(hours);
//     let minutes = (hours - rhours) * 60;
//     let rminutes = Math.round(minutes);
//     return rhours + "h " + rminutes + "m";
//   };

//   const convertedRuntime = convertRuntime(runtime);

//   const showRuntime = () => {
//     if (!isMobile && runtime !== 0) {
//       return (
//         <StyledRuntime>
//           <RuntimeIcon />
//           {convertedRuntime}
//         </StyledRuntime>
//       );
//     }
//   };

//   const showRating = () => {
//     if (!isMobile && vote_average !== 0) {
//       return (
//         <StyledRating>
//           <RatingIcon />
//           {vote_average}
//         </StyledRating>
//       );
//     }
//   };

//   return (
//     <CardContainer>
//       <StyledImg
//         src={poster_path ? imageURL : AltPoster}
//         onClick={handleMovieClick}
//         alt={`${title} poster`}
//       />
//       {showRuntime()}
//       {showRating()}
//       {/* {props.removeMode && <RemoveFavoriteButton movie={props.movie} />} */}
//     </CardContainer>
//   );
// };

// export default CardMovie;