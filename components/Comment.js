const Comment = ({ id, email, body }) => {
  const styles = {
    border: "2px solid blue",
    margin: 0,
    padding: 0,
    listStyle: 'none'
  };

  return (
    <li style={styles}>
      <h3>{id}</h3>
      <h4>{email}</h4>
      <p>{body}</p>
    </li>
  );
};

export default Comment;
