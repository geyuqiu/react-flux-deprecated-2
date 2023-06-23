const commentsReducer = (comments, action) => {
  console.log(action);
  switch (action.type) {
    case "COMMENTS/ADD":
      const newState = [
        ...comments,
        {
          id: comments.length + 1,
          postId: action.payload.postId,
          username: action.payload.username,
          text: action.payload.text
        }
      ];
      console.log(newState);
      return newState;
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export { commentsReducer };
