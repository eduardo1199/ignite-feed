import styles from './sidebar.module.css';

import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

      <div className={styles.profile}>
       <Avatar 
          avatarImg='https://avatars.githubusercontent.com/u/62710668?v=5'
       />

        <strong>Eduardo Soares</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}