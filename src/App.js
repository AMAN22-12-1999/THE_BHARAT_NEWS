import './App.css';
import React from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const settingProgress = (progress) => {
    setProgress(progress);
  }
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News apikey={apikey} setProgress={settingProgress} key="general" pageSize={6} country={'in'} category={'general'} />} />
          <Route exact path="/business" element={<News apikey={apikey} setProgress={settingProgress} key="business" pageSize={6} country={'in'} category={'business'} />} />
          <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={settingProgress} key="entertainment" pageSize={6} country={'in'} category={'entertainment'} />} />
          <Route exact path="/health" element={<News apikey={apikey} setProgress={settingProgress} key="health" pageSize={6} country={'in'} category={'health'} />} />
          <Route exact path="/science" element={<News apikey={apikey} setProgress={settingProgress} key="science" pageSize={6} country={'in'} category={'science'} />} />
          <Route exact path="/sports" element={<News apikey={apikey} setProgress={settingProgress} key="sports" pageSize={6} country={'in'} category={'sports'} />} />
          <Route exact path="/technology" element={<News apikey={apikey} setProgress={settingProgress} key="technology" pageSize={6} country={'in'} category={'technology'} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
//let apiKeyValue = '644fd5c877264986a76faf9638db0880' - aman;
//5c2ed0201e3a4fc1af4dd65073c72390 - vansh
//c63d7dc101e44be79b3b20dc8cb1ce4f -spraxa