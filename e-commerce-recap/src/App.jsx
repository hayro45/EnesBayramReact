import './App.css'
import AppContainer from './components/Container'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'

function App() {

  return (
    <>
      <AppContainer>
        <Loading />
        <Header />
        <RouterConfig />
       
      </AppContainer>
    </>
  )
}

export default App
