import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Pages/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import ItemsList from './Pages/ItemsList/ItemsList.jsx'


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="catalogue">
          <Route index element={<ItemsList />}/>
        </Route>
      </Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}
