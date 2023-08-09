import React from 'react';
import Hero from './Hero.section';
import About from './About.section';
import Benefits from './Benefits.section';
import Service from './Service.section';
import Faq from './Faq.section';

const Page = ({hero,about, benefits, service, faq}) => {
  console.log(service)
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '120px'}}>
        <Hero data={hero} />
        <About data={about}/>
        <Benefits data={benefits} />
        <Service data= {service} />
        <Faq data={faq}/>
  
      </div>
    );
};

export default Page;