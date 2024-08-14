import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    editComment: (state, action) => {
      const { id, text } = action.payload;
      const comment = state.find(comment => comment.id === id);
      if (comment) {
        comment.text = text;
      }
    },
    deleteComment: (state, action) => {
      return state.filter(comment => comment.id !== action.payload);
    },
    addReply: (state, action) => {
      const { id, reply } = action.payload;
      const comment = state.find(comment => comment.id === id);
      if (comment) {
        comment.replies.push(reply);
      }
    },
    editReply: (state, action) => {
      const { commentId, replyId, text } = action.payload;
      const comment = state.find(comment => comment.id === commentId);
      if (comment) {
        const reply = comment.replies.find(reply => reply.id === replyId);
        if (reply) {
          reply.text = text;
        }
      }
    },
    deleteReply: (state, action) => {
      const { commentId, replyId } = action.payload;
      const comment = state.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies = comment.replies.filter(reply => reply.id !== replyId);
      }
    },
  },
});

export const { addComment, editComment, deleteComment, addReply, editReply, deleteReply } = commentsSlice.actions;

export default commentsSlice.reducer;
