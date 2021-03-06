import React, { Component } from 'react'

class Comments extends Component {

  renderComment({ user, text }, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{user}</strong>
          {text}
          <button
            onClick={() => this.props.removeComment(this.props.params.postId, i)}
            className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  submit(e) {
    e.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref='commentForm' className='comment-form' onSubmit={e => this.submit(e)}>
          <input type='text' placeholder='author' ref='author' />
          <input type='text' placeholder='comment' ref='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
