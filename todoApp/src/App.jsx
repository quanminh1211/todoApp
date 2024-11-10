import './App.css'
import Title from './Components/Title/Title.jsx'
import MenuTab from './Components/Menu/MenuTab.jsx'
import AllTab from './Components/AllTab/AllTab.jsx'
import ActiveTab from './Components/ActiveTab/ActiveTab.jsx'
import CompletedApp from './Components/CompletedTab/CompletedApp.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Title />
      <MenuTab />
      <Routes>
        <Route path="/all" Component={AllTab} > </Route>
        <Route path="/active" Component={ActiveTab} ></Route>
        <Route path="/completed" Component={CompletedApp} ></Route>
      </Routes>
    </>
  )
}

export default App

