const initState = {
  events: [
    // { id: "1", title: "stslsls", content: "balalals" },
    // { id: "2", title: "sts", content: "balalalss" },
    // { id: "3", title: "stsls", content: "balalalas" }
  ]
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      // console.log("created", action.event);
      return state;
    case "CREATE_EVENT_ERROR":
      // console.log("error", action.err);
      return state;
    case "DELETE_EVENT":
      // console.log("Removed Project");
      return state;
    case "DELETE_EVENT_ERROR":
      // console.log("Removed Project Error", action.err);
      return state;

    default:
      return state;
  }
};

export default eventReducer;
