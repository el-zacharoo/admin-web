import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Outline } from '@/components/Outline';
import { theme } from '@/theme';
import Viewport from '@/Viewport';
import { DataFormat } from '@/views/DataFormat';


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Viewport>
          <Suspense fallback={<Outline visible={true} />}>
            <Routes>
              <Route exact path="/" element={<DataFormat />} />
            </Routes>
          </Suspense>
        </Viewport>
      </Router>
    </ThemeProvider>
  )
}

export default App
