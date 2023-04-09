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
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
