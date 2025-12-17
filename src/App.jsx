import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Pages/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import ItemsList from './Pages/ItemsList/ItemsList.jsx'
import ItemsDetail from './Components/ItemsDetail/ItemsDetail.jsx'


export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="catalogue">
          <Route index element={<ItemsList />}/>
          <Route path=":id" element={<ItemsDetail />}/>
        </Route>
      </Route>
    </Routes> 
    </BrowserRouter>
    </>
  )
}
