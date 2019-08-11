import axios from "axios";
import Comment from "../components/Comment";

const baseURL = "https://jsonplaceholder.typicode.com/comments";

const Post = ({ id, comments }) => (
  <>
    <h1>Comments for Post № {id}</h1>
    <ul>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
  </>
);

// query = { id: "..." }
Post.getInitialProps = async ({ query }) => {
  const url = `${baseURL}?postId=${query.id}`;
  const res = await axios.get(url);
  return { ...query, comments: res.data };
};

export default Post;

/* Второй вариант

import { withRouter } from "next/router";

const Post = ({ router }) => <h1>Post Page № {router.query.id}</h1>;

export default withRouter(Post); */
