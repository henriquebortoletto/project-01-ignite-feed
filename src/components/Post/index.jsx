import S from './styles.module.css'

function Post(props) {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  )
}

export default Post
