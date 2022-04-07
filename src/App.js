import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Navigations } from "./components/Navigations";


function App() {

  const [DarkTheme, setDarkTheme] = useState(true);

  return (
    <div className={DarkTheme ? 'dark' : ''} >
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme} />
        <Navigations />
        <Footer />
      </div>
    </div>
  );
}

export default App;
