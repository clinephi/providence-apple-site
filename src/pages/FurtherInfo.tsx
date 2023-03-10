import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';

import { Background } from "./About";
import { TextBox } from "./About";

import '../styles/FurtherInfo.css';

import treeAvailabilityBackground from '../img/FurtherInfoPhotos/DSC_0692.jpg'
import furterInfoContent from './text/further-info.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

//TODO: extract all of this behaviour to shared class or something?
//But then you'd wonder why we're doing a functional component...
export const FurtherInfo = () => {
    // TODO: call this text, setText
    const [content, setContent] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(furterInfoContent)
        .then(response => response.text())
        .then(text => {
            setContent(text)
        })
    }, [])

    return (
    <Background
        backgroundImageLink={treeAvailabilityBackground}>
        <TextBox className='articleLink' 
            style={{
                borderStyle: 'solid',
                borderColor: '#870d0dae'
        }}>
        {md.render(content)}
        </TextBox>
    </Background>
    )
  }