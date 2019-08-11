const Post = ({id}) => (
  <h1>Post Page № {id}</h1>
)

// query = { id: "..." }
Post.getInitialProps = async ({query}) => query;

export default Post;