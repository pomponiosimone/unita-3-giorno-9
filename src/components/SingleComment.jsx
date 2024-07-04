import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment, fetchComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyY2I5ZjJiNjYwYzAwMTUzZDhlMjgiLCJpYXQiOjE3MTk4NDc4MzksImV4cCI6MTcyMTA1NzQzOX0.nIpiN4YiSnRrZ8WOvi4xUIUuvmppUTN_M3GoXsyDL6E',
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
        fetchComments();
      } 
      else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
