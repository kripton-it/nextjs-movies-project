// import fetch from 'isomorphic-unfetch';

const Index = () => {
  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  console.log("fetching");
  // const res = await fetch('https://api.github.com/repos/zeit/next.js');
  // const json = await res.json();
  // return { stars: json.stargazers_count };
};

export default Index;

/* import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    // сработает и на сервере, и на клиенте
    // console.log("fetching");
  }

  // сработает ТОЛЬКО на клиенте
  // componentDidMount() {
  //   console.log("fetching");
  // }

  static async getInitialProps({ req }) {
    // При первом рендере сработает только на сервере
    // При последующих - только на клиенте
    console.log("fetching");
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // return { userAgent };
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
      </div>
    );
  }
}

export default Index;*/
