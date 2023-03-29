import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'

import { posts } from './data'

import S from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <main className={S.container}>
        <Sidebar />
        <div>
          {posts.map(({ author, content, publishedAt }) => (
            <Post
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
