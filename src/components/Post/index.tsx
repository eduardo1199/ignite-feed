import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar 
            avatarImg='https://avatars.githubusercontent.com/u/62710668?v=5'
          />
          <div className={styles.authorInfo}>
            <strong>Eduardo Soares</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title="14 de Agosto de 2022" dateTime="2022-08-14 09:51:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href=''>jane.design/doctorcare</a></p>

        <p> <a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}