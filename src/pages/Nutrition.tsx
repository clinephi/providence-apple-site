import React, { useEffect, useState } from "react"
import { Remarkable } from 'remarkable'
import RemarkableReactRenderer from 'remarkable-react';

import { Background } from "./About";
import { TextBox } from "./About";
import NutritionImage from '../img/NutritionPagePhotos/DSC_6226.jpg'

import nutritionContent from './text/nutrition.en.md'

var md = new Remarkable();
md.renderer = new RemarkableReactRenderer()

//TODO: extract all of this behaviour to shared class or something?
//But then you'd wonder why we're doing a functional component...
export const Nutrition = () => {
    // TODO: call this text, setText
    const [nutritionText, setNutritionText] = useState('')
    // On mount (effectively), update the text for the component
    useEffect(() => {
      fetch(nutritionContent)
        .then(response => response.text())
        .then(text => {
            setNutritionText(text)
        })
    }, [])

    return (
    <Background
        backgroundImageLink={NutritionImage}>
        <TextBox>
        {md.render(nutritionText)}
        </TextBox>
    </Background>
    )
  }