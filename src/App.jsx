import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tutors from './components/Tutors';
import Plans from './components/Plans';
import TryCourse from './components/TryCourse';
import AllCourses from './components/AllCourses';
import { useSelector } from 'react-redux';
import './App.css';
import MainPage from './components/MainPage';


function App() {

  const {login} = useSelector((state)=>state.login)


  return (
    <>
      <Navbar/>
      {login?<MainPage/>:null}
    </>
  )
}

export default App
