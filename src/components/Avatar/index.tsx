import { ImgHTMLAttributes } from 'react'

import S from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  const hasBorderProps = hasBorder ? `${S.avatar_has_border}` : `${S.avatar}`

  return (
    <div className={hasBorderProps}>
      <img {...rest} />
    </div>
  )
}

export default Avatar
