import { Header } from './components/Header'
// import { InputTask } from "./components/Input"
import { ListToDo } from "./components/ListToDo"
import "./global.css"
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <ListToDo />
      </div>
      
    </>
  )
}

export default App
