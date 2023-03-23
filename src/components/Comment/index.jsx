import { Trash, ThumbsUp } from '@phosphor-icons/react'

import Avatar from '@/components/Avatar'
import S from './styles.module.css'

function Comment() {
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
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </div>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <button className={S.feedback}>
          <ThumbsUp size={20} />
          <span>Aplaudir</span>
          <span>30</span>
        </button>
      </div>
    </div>
  )
}

export default Comment
