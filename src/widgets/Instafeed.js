import React, { Component } from 'react'
import { buildUrl } from 'react-instafeed'
import ig from 'fetch-instagram';
import Slider from 'react-slick';


const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};


class Instagram extends Component {

    constructor (props) {
        super (props)

        this.state = {
          APIData: []
        }
    }

  componentWillMount() {
    const apiid = ig({
         accessToken: '6441986712.39e610e.04d86db2af844635bd9df83ad7f4f824',
    });
    const instagramval = apiid.media();
    instagramval.then(res => this.setState({APIData:res.data}));
  }

  render (){
    const {APIData} = this.state;
    return (
         <div class="insta_v2_wrapper insta_v2_style--default insta_v2_list_type--carousel insta_v2_without_header">
                <div class="insta_v2_content">
                    <div class="insta_v2_items insta_v2_style--with_meta">
                        <Slider {...settings} >
                          {APIData.map((image,i) =>
                                <div key={i}>
                                      <a href={image.link} target="_blank">
                                      <img src={`${image.images.standard_resolution.url}`}  />
                                    </a>
                                </div>
                            )}
                          </Slider>
                    </div>
                </div>
          </div>
      )
  }
}
export default Instagram;