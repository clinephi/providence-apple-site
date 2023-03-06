import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'styled-components'

import '../styles/About.css';
import backgroundImage from '../img/AboutPagePhotos/DSC_9513.jpg'

import aboutContent from './text/about.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

interface BackgroundProps {
  backgroundImageLink: string
}

// TODO: move to index
export const Background = styled.div<BackgroundProps>`
  background-image: url(${props => props.backgroundImageLink});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
`

export const TextBox = styled.div`
  background-color: white;
  border-radius: 10px;
  height: fit-content;
  left: 6vw;
  /* left: 15.5vw; */
  top: 20vh;
  padding: 20px;
  position: absolute;
  width: 40vw;
`

export const About = () => {
    const [aboutText, setAboutText] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(aboutContent)
        .then(response => response.text())
        .then(text => {
          setAboutText(text)
        })
    }, [])

    return (
      <Background
        backgroundImageLink={backgroundImage}
        >
        <TextBox className="textBox">
          <h1 
            style={{
              color: '#870d0dae'
          }}
          >The Providence Story</h1>
          {md.render(aboutText)}
        </TextBox>
      </Background>
    )
  }