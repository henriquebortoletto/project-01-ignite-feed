import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'

import S from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <main className={S.container}>
        <Sidebar />
        <div>
          <Post
            author="Henrique Bortoletto"
            content="Esse e o primeiro post criado."
          />
          <Post
            author="Maria Joaquina"
            content="Esse e o segundo post criado."
          />
        </div>
      </main>
    </>
  )
}

export default App
