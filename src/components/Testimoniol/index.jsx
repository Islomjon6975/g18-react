import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper } from "./style.js";

export default class Testimoniol extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 676,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <Container>
        <Wrapper>
          <h2> Single Item</h2>
          <Slider className="slider" {...settings}>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
            <div className="slide">
              <h3>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </h3>
            </div>
          </Slider>
        </Wrapper>
      </Container>
    );
  }
}
