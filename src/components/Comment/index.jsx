import { useState } from 'react'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import Avatar from '@/components/Avatar'
import S from './styles.module.css'

function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  const isLike = !likeCount ? `${S.feedback}` : `${S.feedback} ${S.pressed}`

  return (
    <div className={S.comment}>
      <Avatar
        src="https://github.com/henriquebortoletto.png"
        hasBorder={false}
      />
      <div className={S.wrapper}>
        <div className={S.content}>
          <div className={S.header}>
            <div className={S.user}>
              <strong>Devon Lane <span>(você)</span></strong>
               <time
                dateTime="2022-05-11 08:13:30"
                title="11 de Maio às 08:13h"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </div>
          <p>{content}</p>
        </div>
        <button
          className={isLike}
          onClick={handleLikeComment}
        >
          <ThumbsUp size={20} />
          <span>Aplaudir</span>
          <span>{likeCount}</span>
        </button>
      </div>
    </div>
  )
}

export default Comment
