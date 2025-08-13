import './App.css'
import UserContextProvider from './context/Usercontextprovider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    <UserContextProvider>
      <h1>React with Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
