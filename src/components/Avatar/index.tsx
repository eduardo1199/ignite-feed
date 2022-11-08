import { ImgHTMLAttributes } from 'react';
import  styles from './avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  isAvatarComment?: boolean;
  avatarImg: string;
}

export function Avatar({ isAvatarComment, avatarImg, ...props }: AvatarProps) {
  return  (
    <img 
      src={avatarImg}
      className={isAvatarComment ? styles.avatarDefault : styles.avatarBorder} 
      {...props}
    />
  )
}