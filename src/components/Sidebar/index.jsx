import { PencilSimpleLine } from '@phosphor-icons/react'

import Avatar from '@/components/Avatar'
import S from './styles.module.css'

function Sidebar() {
  return (
    <aside className={S.container}>
      <div className={S.thumb}>
        <img
          src="https://images.unsplash.com/photo-1679189792474-6c2796dc78ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=60"
          loading="lazy"
        />
      </div>
      <div className={S.profile}>
        <Avatar src="https://github.com/henriquebortoletto.png" />
        <strong>Henrique Bortoletto</strong>
        <p>Software Engineer</p>
      </div>
      <div className={S.footer}>
        <a href="#">
          <PencilSimpleLine size={20} />
          <span>Editar seu perfil</span>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
