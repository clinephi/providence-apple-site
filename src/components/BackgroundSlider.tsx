import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import '../styles/BackgroundSlider.css';

import imageSlide from '../data';

const Title = styled.div`
    left: 5vw;
    top: 8vh;
    position: absolute;

    @media screen and (max-width: 500px) {
        left: 50%;
        transform: translateX(-50%);
    }

`

const Header = styled.div`
    background-color: #870d0dae;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    font-family: Capriola;
    font-size: 40px;
    min-width: 380px; // Point at which text is multi lined.
    padding: 5px 5px 0px 10px;
    text-align: left;
    width: 40vw; 

    /* Adjust rules for mobile */
    @media screen and (max-width: 500px) {
        font-size: 30px;
        margin: auto;
        min-width: 300px; // Point at which text is multi lined.
        text-align: center;
    }

`

const SubHeader = styled.div`
    background-color: #870d0dae;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    font-family: Capriola;
    font-size: 20px;
    min-width: 380px; 
    padding: 5px 5px 5px 10px;
    text-align: left;
    width: 40vw;
    
    @media screen and (max-width: 500px) {
        min-width: 300px; // Point at which text is multi lined.
        text-align: center;
    }
`
    
const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentState === 2) setCurrentState(0)
            else setCurrentState(currentState+1)
            return () => clearTimeout(timer)
        }, 10*1000)
    }, [currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext = (currentState: number) => {
        setCurrentState(currentState)
    }
    return (
        <div className='container-style'>
            <Title>
                <Header>The Providence Apple</Header>
                <SubHeader>A red-fleshed apple for the cider, specialty juices, jellies, and food processing industries</SubHeader>
            </Title>
            <div style={bgImageStyle}> </div>
            <div className='description' >
                <div>
                    <h1>{imageSlide[currentState].title}</h1>
                    <p>{imageSlide[currentState].body}</p>
                </div>
                <div className='carousel-boullt'>
                    {
                        imageSlide.map((imageSlide, order) => {
                            const spanStyle = order === currentState ? 'rgba(224, 74, 87, 1)' : 'rgb(159, 158, 158)'
                            return (
                                <span 
                                    key={order}
                                    // TODO: sort out issues with the onClick
                                    // onClick={() => goToNext(order)}
                                    style={{backgroundColor: spanStyle}}
                                ></span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BackgroundSlider