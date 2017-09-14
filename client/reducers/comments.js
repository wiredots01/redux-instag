// a reducers takes in two things

// 1. the action (info about what happened)
// 2. copy of the current state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];

    case 'REMOVE_COMMENT':
      console.log('removing a comment')
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite with the new one
      [action.postId]: postComments(state[action.postId], action)

    }
  }
  return state;
}

export default comments;
