import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'styled-components'

import { Background } from "./About";
import { TextBox } from "./About";

import treeAvailabilityBackground from '../img/TreeAvailabilityPhotos/young-trees.jpg'
import treeAvailabilityContent from './text/tree-availability.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

//TODO: extract all of this behaviour to shared class or something?
//But then you'd wonder why we're doing a functional component...
export const TreeAvailability = () => {
    // TODO: call this text, setText
    const [content, setContent] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(treeAvailabilityContent)
        .then(response => response.text())
        .then(text => {
            setContent(text)
        })
    }, [])

    return (
    <Background
        backgroundImageLink={treeAvailabilityBackground}>
        <TextBox style={{
            borderStyle: 'solid',
            borderColor: '#870d0dae'
        }}>
        {md.render(content)}
        </TextBox>
    </Background>
    )
  }