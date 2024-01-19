const intialState = [];
const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "add": {
      let check = false;
      let map = state.map((ele) => {
        if (ele.title == payload[0].title) {
          check = true;
          return { ...ele, qty: ele.qty + 1 };
        } else {
          return ele;
        }
      });
      if (check) {
        return map;
      } else {
        return [...state, ...payload];
      }
    }
    case "remove": {
      let filter = state.filter((ele) => {
        return ele.title != payload;
      });
      return filter;
    }
    case "increase": {
      let map = state.map((ele) => {
        if (ele.title == payload) {
          return { ...ele, qty: ele.qty + 1 };
        } else {
          return ele;
        }
      });
      return map;
    }
    case "decrease": {
      let map = state.map((ele) => {
        if (ele.title == payload && ele.qty > 1) {
          return { ...ele, qty: ele.qty - 1 };
        } else {
          return ele;
        }
      });
      return map;
    }
    case "cleanCart": {
      return [];
    }

    default:
      return state;
  }
};

export default cartReducer;