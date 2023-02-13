import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // const apiKey2 = process.env.REACT_APP_NEWS_API;
  const apiKey22 = "2bc1c9afe3d341eead771c75f2515e19"
  // console.log(apiKey22);
  // console.log(apiKey2);


  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/politics"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="politics"
                pageSize={6}
                country="in"
                category="politics"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey22}
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
