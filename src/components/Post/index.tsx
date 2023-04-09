import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from '@/components/Avatar'
import Comment from '@/components/Comment'

import S from './styles.module.css'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link' | 'span'
  content: string
}

export interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date
}

function Post({ author, content, publishedAt }: PostProps) {
  const [commentValue, setCommentValue] = useState('')
  const [comments, setComments] = useState(['Iw aew Beleza'])

  const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, commentValue])
    setCommentValue('')
  }

  function handleDeleteComment(commentToDelete: string) {
    const deletingCommentFromComments = comments.filter((comment) => comment !== commentToDelete)

    setComments(deletingCommentFromComments)
  }

  function handleChangeNewValue(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setCommentValue(event.target.value)
  }

  function handleNewValueInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewValueEmpty = !commentValue

  return (
    <section className={S.post}>
      <div className={S.header}>
        <div className={S.profile}>
          <Avatar
            src={author.avatarUrl}
            alt="Imagem de avatar do usuário"
            loading="lazy"
          />
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
        {content.map(({ type, content }) => {
          if(type === 'paragraph') {
            return <p key={content}>{content}</p>
          } else if(type === 'link') {
            return <p key={content}><a href="#">{content}</a></p>
          } else if(type === 'span') {
            return <p key={content}>{content.split(",").map((tag) => <span key={tag}>{tag}</span>)}</p>
          }
        })}
      </div>

      <form
        className={S.form}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={commentValue}
          onChange={handleChangeNewValue}
          onInvalid={handleNewValueInvalid}
          required
        />
        <div className={S.btn}>
          <button
            type="submit"
            disabled={isNewValueEmpty}
          >
            Publicar
          </button>
        </div>
      </form>

      {!!comments.length && (
        <div className={S.comments}>
          {comments.map((comment) => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={handleDeleteComment}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Post
