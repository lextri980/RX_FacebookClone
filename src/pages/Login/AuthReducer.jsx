export const AuthReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, payload]
      };

    default:
      return state;
  }
};
