import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEvent } from "../actions/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EditForm({ editedEventId, setEditedEventId }) {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventStartDate, setEventStartDate] = useState(null);
  const [eventEndDate, setEventEndDate] = useState(null);
  const [eventDescription, setEventDescription] = useState("");
  const [eventHandledBy, setEventHandledBy] = useState("");
  const [eventOrganisation, setEventOrganisation] = useState("");
  const [totalSubEvents, setTotalSubEvents] = useState("");

  useEffect(() => {
    if (editedEventId !== null) {
      const editedEvent = events.find((event) => event.id === editedEventId);
      if (editedEvent) {
        setEventName(editedEvent.name);
        setEventType(editedEvent.type);
        setEventStartDate(editedEvent.startDate);
        setEventEndDate(editedEvent.endDate);
        setEventDescription(editedEvent.description);
        setEventHandledBy(editedEvent.handledBy);
        setEventOrganisation(editedEvent.organisation);
        setTotalSubEvents(editedEvent.subEvents);
      }
    }
  }, [editedEventId, events]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id: editedEventId,
      name: eventName,
      type: eventType,
      startDate: eventStartDate,
      endDate: eventEndDate,
      description: eventDescription,
      handledBy: eventHandledBy,
      organisation: eventOrganisation,
      subEvents: totalSubEvents,
    };
    dispatch(editEvent(editedEventId, updatedEvent));
    setEditedEventId(null);
  };

  return (
    <div className="container">
      <h2>Edit Event</h2>
      <form onSubmit={handleEditSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Type</option>
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="general">General</option>
            <option value="children">Children</option>
            <option value="school">School</option>
          </select>
        </div>
        <div className="form-group">
          <label>Event Start Date</label>
          <DatePicker
            selected={eventStartDate}
            onChange={(date) => setEventStartDate(date)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Event End Date</label>
          <DatePicker
            selected={eventEndDate}
            onChange={(date) => setEventEndDate(date)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Event Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="form-control"
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Event Handled By</label>
          <input
            type="text"
            value={eventHandledBy}
            onChange={(e) => setEventHandledBy(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Event Organisation</label>
          <input
            type="text"
            value={eventOrganisation}
            onChange={(e) => setEventOrganisation(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Total Number of Sub-Events</label>
          <input
            type="number"
            value={totalSubEvents}
            onChange={(e) => setTotalSubEvents(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Event
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={() => setEditedEventId(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditForm;
