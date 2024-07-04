import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjgyY2I5ZjJiNjYwYzAwMTUzZDhlMjgiLCJpYXQiOjE3MTk4NDc4MzksImV4cCI6MTcyMTA1NzQzOX0.nIpiN4YiSnRrZ8WOvi4xUIUuvmppUTN_M3GoXsyDL6E',
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} fetchComments = {fetchComments}/>
      <CommentList commentsToShow={comments}  fetchComments = {fetchComments} />
    </div>
  );
};

export default CommentArea;