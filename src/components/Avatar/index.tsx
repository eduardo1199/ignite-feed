import  styles from './avatar.module.css';

interface AvatarProps {
  isAvatarComment?: boolean;
  avatarImg: string;
}

export function Avatar({ isAvatarComment, avatarImg }: AvatarProps) {
  return  (
    <img 
      src={avatarImg}
      className={isAvatarComment ? styles.avatarDefault : styles.avatarBorder} 
    />
  )
}