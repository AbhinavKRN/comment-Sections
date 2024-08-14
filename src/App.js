import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './features/comments/commentForm';
import CommentList from './features/comments/commentList';
import { loadComments } from './features/comments/commentsSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    dispatch(loadComments(savedComments));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="App">
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default App;
