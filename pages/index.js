// import fetch from 'isomorphic-unfetch';
import axios from "axios";
import React, { Component } from "React";

const url = "https://jsonplaceholder.typicode.com/posts";

/* const Index = ({ posts }) => {
  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {posts.map(({id, title}) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get(url);
  return { posts: res.data };
}; */

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const res = await axios.get(url);
    return { posts: res.data };
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <ul>
          {this.props.posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
