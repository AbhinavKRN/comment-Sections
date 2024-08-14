import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './commentsSlice';
import { v4 as uuidv4 } from 'uuid';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name && text) {
      dispatch(
        addComment({
          id: uuidv4(),
          name,
          text,
          date: new Date().toISOString(),
          replies: [],
        })
      );
      setName('');
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default CommentForm;
