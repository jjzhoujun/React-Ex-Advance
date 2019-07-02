import React, { Component } from "react";
import PostItem from "./PostItem";
import "./PostList.css"


class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, title: "大家一起来讨论React吧", author: "张三", date: "2019-06-30 12:00", vote: 0},
          { id: 2, title: "前端框架，你最喜欢哪个", author: "李四", date: "2019-06-30 14:00", vote: 0},
          { id: 3, title: "Web App时代已经到来", author: "王五", date: "2019-06-30 16:30", vote: 0}
        ]
      })
    }, 1000);
  }

  componentWillUnmount() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
  }

  //todo 需要掌握这里 ...的用法
  handleVote(id) {
     const posts = this.state.posts.map(item => {
       const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
       return newItem;
     });
    this.setState({
      posts: posts
    });
  }

  render() {
    return (
      <div className='container'>
        <h2>帖子列表</h2>
        <ul>
          {this.state.posts.map(item =>
            <PostItem
              key = {item.id}
              post = {item}
              onVote = {this.handleVote}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default PostList;