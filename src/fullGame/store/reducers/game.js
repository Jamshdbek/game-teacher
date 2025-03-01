const initialState = {
  status: "idle", // or "game-over", "playing", etc.
  // Add other necessary properties here.
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, status: "playing" };
    case "GAME_OVER":
      return { ...state, status: "game-over" };
    default:
      return state;
  }
};

export default gameReducer;