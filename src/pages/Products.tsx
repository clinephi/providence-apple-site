import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';
import styled from "styled-components";

// TODO: move to a util component section? 
import { Background } from "./About";
import { TextBox } from "./About";

import productContent from './text/products.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

const Image = styled.img`
  border-radius: 10px;
  border-color: white;
  border-style: solid;
  height: auto;
  left: 50vw;
  position: absolute;
  top: 30vh;
  max-height: 60vh;
  max-width: 40vw;
  width: auto;
`

//TODO: extract all of this behaviour to shared class or something?
//But then you'd wonder why we're doing a functional component...
export const Products = () => {
    // TODO: call this text, setText
    const [content, setContent] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(productContent)
        .then(response => response.text())
        .then(text => {
            setContent(text)
        })
    }, [])

    return (
    <Background
        backgroundImageLink="ProductPagePhotos/DSC_0096.JPG">
        <TextBox style={{
            borderStyle: 'solid',
            borderColor: 'white'
        }}>
        {md.render(content)}
        </TextBox>
        <Image alt="provide apple cider" src="ProductPagePhotos/DSC_0581.JPG"/>
    </Background>
    )
  }