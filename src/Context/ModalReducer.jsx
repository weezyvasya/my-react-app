import { useReducer } from "react";

export const modalReducer = (state, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return { isOpen: true };
      case "CLOSE_MODAL":
        return { isOpen: false };
      default:
        return state;
    }
  };