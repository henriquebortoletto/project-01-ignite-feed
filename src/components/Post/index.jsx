import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from '@/components/Avatar'
import Comment from '@/components/Comment'

import S from './styles.module.css'

function Post({ author, content, publishedAt }) {
  const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <section className={S.post}>
      <div className={S.header}>
        <div className={S.profile}>
          <Avatar src={author.avatarUrl} />
          <div className={S.info}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormat}
        >
          {publishedDateToNow}
        </time>
      </div>

      <div className={S.content}>
        {content.map(({ type, content, children = [] }) => {
          if(type === 'paragraph') {
            return <p>{content}</p>
          } else if(type === 'link') {
            return <p>{children.map(({ content }) => <a href="#">{content}</a>)}</p>
          } else if(type === 'span') {
            return <p>{children.map(({ content }) => <span>{content}</span>)}</p>
          }
        })}
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

      <div className={S.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  )
}

export default Post
