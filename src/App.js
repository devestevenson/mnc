import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'
import News from './components/News/News'
import Table from './components/Table/Table'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/Form" element={<Form/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Table' element={<Table/>}/>
      </Routes>
    </div>
  )
}

export default App
