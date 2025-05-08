import { useState } from 'react'
import './App.css'
import React from 'react'
import styled from 'styled-components'
import MainPage from './pages/main/MainPage'
import TopIndicator from './components/Home/TopIndicator'
import Indicator from './components/Home/Indicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopIndicator/>
      <MainPage/>
      <Indicator/>
    </>
  )
}

export default App
