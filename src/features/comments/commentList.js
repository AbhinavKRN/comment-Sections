import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editComment,
  deleteComment,
  addReply,
  editReply,
  deleteReply,
} from './commentsSlice';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleEdit = (id) => {
    dispatch(editComment({ id, text: editText }));
    setEditText('');
  };

  const handleReply = (commentId) => {
    if (replyText) {
      dispatch(
        addReply({
          commentId,
          reply: {
            id: uuidv4(),
            text: replyText,
            date: new Date().toISOString(),
          },
        })
      );
      setReplyText('');
    }
  };

  return (
    <div>
      {comments
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((comment) => (
          <div key={comment.id} className="comment-box">
            <p><strong>{comment.name}</strong></p>
            <p>{comment.text}</p>
            <p>{format(new Date(comment.date), 'dd MMM yyyy, HH:mm')}</p>
            <div className="comment-actions">
              <button onClick={() => dispatch(deleteComment(comment.id))}>
                Delete
              </button>
              <button onClick={() => setEditText(comment.text)}>Edit</button>
            </div>
            {editText && (
              <div>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                ></textarea>
                <button onClick={() => handleEdit(comment.id)}>Save</button>
              </div>
            )}
            <div className="reply-form">
              <textarea
                placeholder="Reply"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              ></textarea>
              <button onClick={() => handleReply(comment.id)}>Reply</button>
            </div>
            {comment.replies.length > 0 &&
              comment.replies.map((reply) => (
                <div key={reply.id} className="comment-box reply-box">
                  <p>{reply.text}</p>
                  <p>{format(new Date(reply.date), 'dd MMM yyyy, HH:mm')}</p>
                  <div className="comment-actions">
                    <button
                      onClick={() =>
                        dispatch(deleteReply({ commentId: comment.id, replyId: reply.id }))
                      }
                    >
                      Delete
                    </button>
                    <button onClick={() => setEditText(reply.text)}>Edit</button>
                  </div>
                  {editText && (
                    <div>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      ></textarea>
                      <button
                        onClick={() =>
                          dispatch(
                            editReply({
                              commentId: comment.id,
                              replyId: reply.id,
                              text: editText,
                            })
                          )
                        }
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default CommentList;
