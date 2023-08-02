export default function cartReducer(draft, action) {
  switch (action.type) {
    case "count up": {
      draft[action.id]++;
      break;
    }

    case "count down": {
      if (draft[action.id] <= 0) return draft;
      {
        draft[action.id]--;
        break;
      }
    }
  }
}
