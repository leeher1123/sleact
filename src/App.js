import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { GlobalStyle } from './style/GlobalStyle';
import Workspace from './layouts/Workspace';

const App = () => (
  <Container>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workspace" element={<Workspace />} />
    </Routes>
  </Container>
);

const Container = styled.div`

`;

export default App;
