
import { useSelector } from 'react-redux'
import './App.css'


function App() {


  const {login} = useSelector((state)=>state.login)


  return (
    <div>
      <h2>
        {login? 'Hello world!!!':null}
      </h2>
      <button>
        Login
      </button>
    </div>
  )
}

export default App
