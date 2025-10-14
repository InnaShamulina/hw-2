const initState = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: ActionType
): initStateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID": {
      debugger;
      return { ...state, themeId: action.id };
    }
    // дописать

    default:
      return state;
  }
};

export const changeThemeId = (id: number): ActionType => ({
  type: "SET_THEME_ID" as const,
  id,
}); // fix any
type ActionType = {
  type: "SET_THEME_ID";
  id: number;
};
type initStateType = {
  themeId: number;
};
