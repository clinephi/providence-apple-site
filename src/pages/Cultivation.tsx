import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';
import styled from 'styled-components'

import '../styles/Cultivation.css';
import { Background } from "./About";

import cultivationContent from './text/cultivation.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

const TableTitle = styled.div`
  background-color: pink;
  border-bottom: solid;
  border-radius: 10px;
  font-weight: bold;
  height: 40px;
  left: 10vw;
  padding: 10px;
  position: absolute;
  text-align: left;
  top: 15vh;
  vertical-align: middle;
  width: fit-content;
`

//TODO: extract all of this behaviour to shared class or something?
//But then you'd wonder why we're doing a functional component...
export const Cultivation = () => {
    const [cultivationText, setCultivationText] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(cultivationContent)
        .then(response => response.text())
        .then(text => {
            setCultivationText(text)
        })
    }, [])

    return (
      <Background
        backgroundImageLink="CultivationPagePhotos/orchard-background.JPG"
      >
        <TableTitle>
          Providence Tree Characteristics
        </TableTitle>
        <div className="tableContainer">
          {md.render(cultivationText)}
        </div>
      </Background>
    )
  }