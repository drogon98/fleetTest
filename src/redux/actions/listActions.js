import * as t from "./actionsType";

export const saveList = (data) => {
  return (dispatch) => {
    dispatch({ type: t.SAVE_LIST, data: data });
  };
};

export const checkCurrent = (data) => {
  switch (data.current) {
    case "unStarred":
      return 1;
    case "Starred":
      return 0;
    case "Checked":
      return 2;
    default:
      return;
  }
};

export const updatePersistedList = (data) => {
  return {
    type: t.UPDATE_PERSISTED_LIST,
    data: data,
  };
};
export const updateLists = (data) => {
  return {
    type: t.UPDATE_LISTS,
    data: data,
  };
};
