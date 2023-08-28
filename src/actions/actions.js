export const addEvent = (event) => ({
  type: "ADD_EVENT",
  payload: event,
});

export const editEvent = (eventId, updatedEvent) => ({
  type: "EDIT_EVENT",
  payload: { eventId, updatedEvent },
});

export const deleteEvent = (eventId) => ({
  type: "DELETE_EVENT",
  payload: eventId,
});
