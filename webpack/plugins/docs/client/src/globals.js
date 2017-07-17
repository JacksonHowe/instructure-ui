import React from 'react'
import ReactDOM from 'react-dom'
import lorem from 'lorem-ipsum' // eslint-disable-line import/no-extraneous-dependencies

import placeholderImage from './util/placeholder-image'

global.React = React
global.ReactDOM = ReactDOM
global.lorem = {
  sentence () {
    return lorem({
      count: 1,
      units: 'sentences'
    })
  },
  paragraph () {
    return lorem({
      count: 1,
      units: 'paragraphs'
    })
  },
  paragraphs (count) {
    return lorem({
      count: count || Math.floor(Math.random() * 10),
      units: 'paragraphs'
    })
  }
}
global.placeholderImage = placeholderImage

export default function initGlobals (globals) {
  Object.keys(globals).forEach((key) => {
    global[key] = globals[key]
  })
}