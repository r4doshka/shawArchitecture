import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';

import Masonry from 'masonry-layout/masonry';

const scriptName = () => {

    //sliders main page

    $('.shaw-slider__hero').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            },
        ]
    });

    $('.shaw-slider__product').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
         ]
    });

    $('.shaw-slider__projects').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true
                }
            },
        ]
    });

    $('.shaw-slider__reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    autoplay:true
                }
            },
        ]
    });

    $('.shaw-btn-filter').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('button.shaw-filter-all').on('click', function(){
        $('.shaw-slider__projects').slick('slickUnfilter');
        $('.shaw-slider__projects').slick('slickFilter','.shaw-filter-all');

    });

    $('button.shaw-filter-residential').on('click', function(){
        $('.shaw-slider__projects').slick('slickUnfilter');
        $('.shaw-slider__projects').slick('slickFilter','.shaw-filter-residential');

    });


    $('button.shaw-filter-commercial').on('click', function(){
        $('.shaw-slider__projects').slick('slickUnfilter');
        $('.shaw-slider__projects').slick('slickFilter','.shaw-filter-commercial');

    });


    //menu toggle mobile

    $('.shaw-menu-toggle').on('click', function(){
        $('.shaw-header-menu').slideToggle();
    });

    //show/hide product card

    $('.shaw-slider__product .shaw-btn-view').on('click', function(event){
        event.preventDefault();

        let btnTextInitial =  $(this).text();
        let btnTextCurrent = 'Show information';
        btnTextInitial = btnTextInitial.trim();

        $(this).siblings('.shaw-slider-item-description').find('.shaw-product').toggleClass('active');

        if(btnTextInitial === btnTextCurrent){
            $(this).text('hide information');
            $(this).toggleClass('passed');
        }else
        {
            $(this).text('Show information');
            $(this).toggleClass('passed');
        }

    });


};

export default scriptName();