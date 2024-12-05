import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<h1>login</h1>}></Route>
      <Route path='/logout' element={<h1>logout</h1>}></Route>
      <Route path='/quiz' element={<h1>quiz</h1>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='*' element={<h1>error</h1>}></Route>


    </Routes>
    </>
  )
}

export default App
