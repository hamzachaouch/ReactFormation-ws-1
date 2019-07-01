import { Action } from "./action";
const initialStateReports = {
  count: 0
};
export default function incrementReducer(state = initialStateReports, action) {
  switch (action.type) {
    case Action.INCREMENT:
      let s = initialStateReports;
      s.count++;
      //state.count = state.count+action.payload);
      return s;

    default:
      return { ...state };
  }
}
