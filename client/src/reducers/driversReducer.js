import { GET_DRIVERS } from "../actions/types";

const initialState = {
  drivers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        loading: false
      };
    default: {
      return state;
    }
  }
}
