import React from 'react';
import { Navigation, Pagination, /* Scrollbar, */ A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import Best from './../componenets/Best';
import FreshBox from './FreshBox';
import Products from './Products';
// import 'antd/dist/antd.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
/* import 'swiper/css/scrollbar'; */

const MainPage = () => {
    const navigate=useNavigate();
    return (
        <div>
            <section id='mainSlider'>
                <Swiper
                modules={[Navigation, Pagination, /* Scrollbar, */ Autoplay,  A11y]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500, 
                    disableOnInteraction: false,}}
                navigation
                loop
                pagination={{ clickable: true }}
                /* scrollbar={{ draggable: true }} */
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slider01.jpg'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slider02.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slider03.jpg'} alt="" /></SwiperSlide>
                </Swiper>
            </section>
            <section className='section2'>
                <Best />
            </section>
            <section className='section3'>
                <FreshBox />
            </section>
            <section className='section4'>
                <Products />
                <Button onClick={()=>navigate('/uploadpage')} type="default" icon={<DownloadOutlined />} /*size={size}*/>
                    상품업로드
                </Button>
            </section>
        </div>
    );
};

export default MainPage;