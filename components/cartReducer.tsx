export default function cartReducer(draft, action) {
  switch (action.type) {
    case "COUNT_UP": {
      draft[action.id]++
      break
    }

    case "COUNT_DOWN": {
      if (draft[action.id] <= 0) {
        return draft
      } else draft[action.id]--
      break
    }
  }
}
