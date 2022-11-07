import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment (comment: string) {
    props.onDeleteComment(comment);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        isAvatarComment
        avatarImg='https://avatars.githubusercontent.com/u/62710668?v=5'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Soares</strong>
              <time title="14 de Agosto de 2022" dateTime="2022-08-14 09:51:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={() => handleDeleteComment(props.content)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}