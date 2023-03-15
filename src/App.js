import React, { useEffect, useState } from 'react'
import Preloader from './components/Preloader/Preloader'
import Layout from "./components/Layout/Layout.jsx"
import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <div>
      {
        loading
          ? <Preloader />
          : <Layout />
      }
    </div>
  )
}

export default App