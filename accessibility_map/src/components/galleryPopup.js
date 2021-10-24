import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/menu-flyer-template-5632286b490608db0301a085b91cde86_screen.jpg?ts=1561491978' />
                    <p className="legend">Menu 1</p>
                </div>
                <div>
                    <img src='https://theredtomatopizzeria.com/wp-content/uploads/2019/10/Take-Out-Menu-Page-2.png'/>
                    <p className="legend">Menu 2</p>
                </div>
                <div>
                    <img src='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/stock%2Fshutterstock_373602469' />
                    <p className="legend">Aisle 1</p>
                </div>
                <div>
                    <img src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B1040%2C750%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F07%2F06%2Fimpulse-buying-2000.jpg' />
                    <p className="legend">Aisle 1</p>
                </div>
            </Carousel>
        );
    }
};
