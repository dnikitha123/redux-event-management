import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../actions/actions";
import EditForm from "./EditForm";

function EventList() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const [editedEventId, setEditedEventId] = useState(null);

  const handleDelete = (eventId) => {
    dispatch(deleteEvent(eventId));
  };

  return (
    <div className="container">
      <h2>Event List</h2>
      <ul className="list-group">
        {events.map((event) => (
          <li
            key={event.id}
            className="list-group-item"
            style={{ fontSize: "16px", fontWeight: "normal" }}
          >
            <p>Name : {event.name} </p>
            <p>Type : {event.type}</p>
            <p>Start Date: {event.startDate.toLocaleDateString()}</p>
            <p>End Date: {event.endDate.toLocaleDateString()}</p>
            <p>Description: {event.description}</p>
            <p>Handled By: {event.handledBy}</p>
            <p>Organisation: {event.organisation}</p>
            <p>Total Sub-Events: {event.subEvents}</p>
            <button
              className="btn btn-primary mr-2"
              onClick={() => setEditedEventId(event.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(event.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editedEventId !== null && (
        <EditForm
          editedEventId={editedEventId}
          setEditedEventId={setEditedEventId}
        />
      )}
    </div>
  );
}

export default EventList;
