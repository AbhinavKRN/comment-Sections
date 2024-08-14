# Comments Section Project

This project is a simple comments section built with React.js, implementing features like adding, editing, replying, and deleting comments. The project also utilizes Redux for state management and local storage to persist data.

## Features

- **Add Comments**: Users can add new comments by providing their name and a comment text.
- **Reply to Comments**: Users can reply to existing comments.
- **Edit Comments and Replies**: Users can edit the text of comments or replies. However, the name cannot be edited.
- **Delete Comments and Replies**: Users can delete comments and replies.
- **Sort Comments by Date and Time**: Comments are sorted by date and time, with the most recent comments appearing first.
- **Data Persistence**: All comments and replies are saved in local storage, so they persist even after a page refresh.
- **State Management**: The application uses Redux for state management.

## Technologies Used

- **React.js**: For building the user interface.
- **Redux**: For state management.
- **Local Storage**: For data persistence across sessions.
- **Date-fns**: For date formatting.
- **UUID**: For generating unique IDs for comments and replies.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **npm**: Node.js package manager, which comes with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:AbhinavKRN/comment-Sections.git
   cd comments-section
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## File Structure

- **`src/`**
  - **`index.js`**: Entry point of the application.
  - **`App.js`**: Main application component.
  - **`App.css`**: Styles for the application.
  - **`features/comments/`**: Contains the components and Redux slice for managing comments.
    - **`CommentForm.js`**: Component for adding new comments.
    - **`CommentList.js`**: Component for displaying the list of comments and replies.
    - **`commentsSlice.js`**: Redux slice for managing comments and replies.
  - **`store.js`**: Configures the Redux store.

## Usage

- **Add a Comment**: Enter your name and comment text in the input fields and click "Post" to add a new comment.
- **Reply to a Comment**: Click "Reply" under a comment, enter your reply, and click "Post" to add the reply.
- **Edit a Comment or Reply**: Click "Edit" under a comment or reply, modify the text, and click "Save" to update it.
- **Delete a Comment or Reply**: Click "Delete" to remove a comment or reply.

## Deployment

To deploy the application, build the project for production:

```bash
npm run build
```

You can then deploy the `build/` directory to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Testing

You can run the tests with the following command:

```bash
npm test
```

This runs the test suite and checks for any issues in your code.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.
