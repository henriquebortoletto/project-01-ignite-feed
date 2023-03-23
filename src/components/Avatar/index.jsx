import S from './styles.module.css'

function Avatar({ src, hasBorder = true }) {
  return (
    <div className={`${hasBorder ? S.avatar_has_border : S.avatar}`}>
      <img
        src={src}
        alt="Imagem de avatar do usuario"
        loading="lazy"
      />
    </div>
  )
}

export default Avatar
