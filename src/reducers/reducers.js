const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case "EDIT_EVENT":
      const updatedEvents = state.events.map((event) =>
        event.id === action.payload.eventId
          ? action.payload.updatedEvent
          : event
      );
      return {
        ...state,
        events: updatedEvents,
      };
    case "DELETE_EVENT":
      const filteredEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        ...state,
        events: filteredEvents,
      };
    default:
      return state;
  }
};

export default eventReducer;
