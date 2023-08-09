import React, { useEffect, useState } from 'react';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import { styled } from 'styled-components';
import Card from '../Card/Card';
import Dot from '../Dots/Dot';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css'
import { graphql, useStaticQuery } from 'gatsby';


const SliderStyles = styled.div`
`
const DotsContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin:  auto;
    
`
const CustomSwiper = styled(Swiper)`
    display: flex;
    flex-direction: row;
    /* overflow: hidden; */
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width:100%;
    /* height: 100vh; */
    height: auto;
`
const CustomSlide = styled(SwiperSlide)`
    margin: auto;
`
const Slider = ({data}) => {
    const [toShow, setToShow] = useState(1);
    console.log(data)

    return (
        <>
        <CustomSwiper 
            spaceBetween={50}
            slidesPerView = {1}
            loop={true}s
            autoplay={{
                delay: 2500,
                disableOnInteraction:false,
            }}
            delay={2000}
            navigation={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination, Navigation, Autoplay]}>
            {data.services.map(el=>{
                const {button, content, icon, id, title, link} = el;
                console.log(icon)
                return(
                <SwiperSlide>
                    <Card title={title} link={link} icon={icon.childrenImageSharp[0].gatsbyImageData} content={content} id={id} button={button}/>
                </SwiperSlide> )

            })}

        </CustomSwiper>
         {/* <DotsContainer>
            <Dot active id={0} click={()=>{console.log("dziala")}}  />
            <Dot active={false} id={1} />
            <Dot id={0} />
            <Dot id={0} />
            <Dot id={5} />
         </DotsContainer> */}

        </>

    );
};

export default Slider;



{/* <SwiperSlide>
<Card title="Kampanie Marketingowe" content="Tworzymy skuteczne kampanie marketingowe w Internecie. Tworzymy teksty oraz grafiki przyciągające uwagę. Na bieżąco analizujemy i testujemy nowe rozwiązania."/>
</SwiperSlide>
<SwiperSlide>
<Card title="Boty" content="Tworzymy skuteczne kampanie marketingowe w Internecie. Tworzymy teksty oraz grafiki przyciągające uwagę. Na bieżąco analizujemy i testujemy nowe rozwiązania."/>
</SwiperSlide> */}

        // <>
        // <div style={{display: 'flex', flexDirection: 'column', gap: '70px', justifyContent: 'space-between'}}>
        // <SliderStyles>
            // <Card title="Kampanie Marketingowe" content="Tworzymy skuteczne kampanie marketingowe w Internecie. Tworzymy teksty oraz grafiki przyciągające uwagę. Na bieżąco analizujemy i testujemy nowe rozwiązania."/>
            // <Card title="Kampanie Marketingowe" content="Tworzymy skuteczne kampanie marketingowe w Internecie. Tworzymy teksty oraz grafiki przyciągające uwagę. Na bieżąco analizujemy i testujemy nowe rozwiązania."/>

        // </SliderStyles>
        // <DotsContainer>
        //     <Dot active id={0} />
        //     <Dot active={false} id={1} />
        //     <Dot id={0} />
        //     <Dot id={0} />
        //     <Dot id={0} />
        // </DotsContainer>

        // </div>
        // </>