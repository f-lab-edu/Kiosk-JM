import { useImmerReducer } from "use-immer";

export const initialState = {
  selectedItems: {},
  total: 0,
};

export const reducer = (draft, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { coffee } = action;
      if (!draft.selectedItems[coffee.id]) {
        draft.selectedItems[coffee.id] = { ...coffee, quantity: 1 };
      } else {
        draft.selectedItems[coffee.id].quantity++;
      }
      draft.total += coffee.price;
      break;

    case "REMOVE_ITEM":
      const { coffee: coffeeToRemove } = action;
      if (draft.selectedItems[coffeeToRemove.id]) {
        draft.selectedItems[coffeeToRemove.id].quantity--;
        if (draft.selectedItems[coffeeToRemove.id].quantity === 0) {
          delete draft.selectedItems[coffeeToRemove.id];
        }
        draft.total -= coffeeToRemove.price;
      }
      break;

    case "CLEAR_ITEMS":
      draft.selectedItems = {};
      draft.total = 0;
      break;

    default:
      break;
  }
};
