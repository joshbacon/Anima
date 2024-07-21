import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { setToken, testAuthorization } from './apicontroller';

import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
import Feedback from './pages/feedback';
import { loadSettings } from './state/settingsSlice';

function App() {

  // Load in potentially existing settings, then
  // see if they have already logged in and either refresh the token or go to the sign in page accordingly
  useEffect(() => {
    loadSettings().then(() => {
      const signedIn:string|null = localStorage.getItem('token') && localStorage.getItem('code') && localStorage.getItem('verifier');
      if (!signedIn) {
        testAuthorization().then(authorized => {
          if (authorized) <Navigate to="/dashboard" />;
          else {
            // TODO: refresh the token
            // - https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens
            if (true) { // token refresh worked, so navigate to dashboard
              <Navigate to="/dashboard" />;
            } else { // token refresh didn't work, so go to signIn

            }
          }
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
