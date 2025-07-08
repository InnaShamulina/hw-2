import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case "sort":
      if (action.payload === "up") {
        console.log("up");
        const newState = state.sort((a, b) => a.name.localeCompare(b.name));
        return newState;
      }
      if (action.payload === "down") {
        const newState2 = state.sort((a, b) => b.name.localeCompare(a.name));
        return newState2;
      }
      break;
    case "check": {
      const newState = state.filter((u) => u.age >= action.payload);
      return newState; // need to fix
    }
    default:
      return state;
  }
};
