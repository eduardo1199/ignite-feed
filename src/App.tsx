import { Header } from "./components/Header"

import styles from './App.module.css';
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

interface PostProps {
  id: number;
  author: {
    avatar: string;
    name: string;
    role: string;
  }
  publishedAt: Date;
  content: string;
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatar: 'https://avatars.githubusercontent.com/u/62710668?v=5',
      name: 'Eduardo Soares',
      role: 'Web Developer'
    },
    publishedAt: new Date('2022-08-14'),
    content: "cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
  },
  {
    id: 2,
    author: {
      avatar: 'https://avatars.githubusercontent.com/u/62710668?v=5',
      name: 'Eduardo Soares',
      role: 'Web Developer'
    },
    publishedAt: new Date(),
    content: "cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
  },
  {
    id: 3,
    author: {
      avatar: 'https://avatars.githubusercontent.com/u/62710668?v=5',
      name: 'Eduardo Soares',
      role: 'Web Developer'
    },
    publishedAt: new Date(),
    content: "cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
  },
]

function App() {

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>

      <SideBar />

      <main>
        {posts.map((post) => (
            <Post 
              key={post.id}
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
                role: post.author.role
              }}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        )}
      </main>
    </div>
   </div>
  )
}

export default App
