const Post = ({ id }) => <h1>Post Page № {id}</h1>;

// query = { id: "..." }
Post.getInitialProps = async ({query}) => query;

export default Post;

/* Второй вариант

import { withRouter } from "next/router";

const Post = ({ router }) => <h1>Post Page № {router.query.id}</h1>;

export default withRouter(Post); */


