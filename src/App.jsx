import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import MainPage from './pages/main/MainPage';
import TopIndicator from './components/ios/TopIndicator';
import Indicator from './components/ios/Indicator';
import ChooseConsume from './pages/findconsume/ChooseConsume';

const RoutesWrapper = styled.div`
  height: calc(100vh - 80px); // TopIndicator + Indicator 높이 제외
  overflow-y: auto;
`;

function App() {
  return (
    <Router>
      <TopIndicator />
      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/choose-consume" element={<ChooseConsume />} />
        </Routes>
      </RoutesWrapper>
      <Indicator />
    </Router>
  );
}

export default App;
