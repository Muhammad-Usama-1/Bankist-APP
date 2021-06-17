import { accounts } from "./Data.js";
export const initialState = {
  basket: [],
  user: null,
  allAccounts: accounts,
};

export const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "TRANSFER":
      return {
        state,
        ...state,
        user: action.payload,
      };
    case "REQUEST_LOAN":
      return {
        state,
        ...state,
        user: action.payload,
      };
    case "DELETE":
      return {
        state,
        ...state,
        user: "",
      };
    case "LOGOUT":
      return {
        state,
        ...state,
        user: "",
      };
    case "SORT":
      return {
        state,
        ...state,
        user: action.payload,
      };

    case "ADD_TO_BASKET":
      return {
        state,
        ...state,
        basket: [...state.basket, action.item],
      };
    //   Logic to adding item to basket

    case "REMOVE_FROM_BASKET":
      console.log("----------------->>>>> Enter in the situation of removing");
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(newBasket);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove id   `);
      }
      console.log(newBasket);

      return {
        ...state,
        basket: newBasket,
      };
    // logic to remove item to basket

    default:
      return state;
  }
};

export default reducer;
