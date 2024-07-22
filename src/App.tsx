import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
import Feedback from './pages/feedback';

function App() {
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
