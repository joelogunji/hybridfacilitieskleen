import React from 'react';
import styled from 'styled-components';

const Map = () => {
  return (
    <Container>
        <ContainerWrapper>
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.955256589325!2d3.3854565999999995!3d6.527335499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d03c9f7fb49%3A0xeebbf73bf7e8c5ac!2s49%20Sholanke%20St%2C%20Yaba%20100213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652833584798!5m2!1sen!2sng" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.955256589325!2d3.3854565999999995!3d6.527335499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d03c9f7fb49%3A0xeebbf73bf7e8c5ac!2s49%20Sholanke%20St%2C%20Yaba%20100213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652833584798!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        {/* <iframe src="https://goo.gl/maps/nsBq7RUtPtC3siDN8" width="100%" height="100%" id="gmap_canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
        </ContainerWrapper>
    </Container>
  )
}

export default Map;

const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`

const ContainerWrapper = styled.div`
    width: 80%;
    height: 100%;

    @media screen and (max-width: 768px){
        width:90%
    }
`