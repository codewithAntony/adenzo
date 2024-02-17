import React from 'react';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Logo from './Components/Logo/Logo';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <Logo />
    </div>
    
  )
}

export default App
library.add(fab, fas, far)

