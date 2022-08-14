import { Header } from "./components/Header"

import styles from './App.module.css';
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

function App() {

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>

      <SideBar />

      <main>
        <Post />
      </main>
    </div>
   </div>
  )
}

export default App
