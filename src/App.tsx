import { Header } from "./components/Header"

import styles from './App.module.css';
import { SideBar } from "./components/SideBar";

function App() {

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>

      <SideBar />

      <main>
        <p>
          eduardo soares
        </p>
      </main>
    </div>
   </div>
  )
}

export default App
