import S from './styles.module.css'

function Post(props) {
  return (
    <section className={S.post}>
      <div className={S.header}>
        <div className={S.avatar}>
          <div className={S.thumb}>
            <img
              src="https://github.com/henriquebortoletto.png"
              alt="Imagem de avatar do usuario"
              loading="lazy"
            />
          </div>
          <div className={S.info}>
            <strong>Henrique Bortoletto</strong>
            <p>Software Engineer</p>
          </div>
        </div>
        <time
          dateTime="2022-05-11 08:13:30"
          title="11 de Maio às 08:13h"
        >
          Públicado há 1h
        </time>
      </div>

      <div className={S.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉&nbsp;<a href="https://github.com/henriquebortoletto" target="_blank">github.com/henriquebortoletto</a></p>
        <p>
          <span>#novoprojeto</span>
          <span>#nlw</span>
          <span>#rocketseat</span>
        </p>
      </div>

      <form className={S.form}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
        />
        <div className={S.btn}>
          <button type="submit">Publicar</button>
        </div>
      </form>
    </section>
  )
}

export default Post
