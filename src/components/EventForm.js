import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../actions/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EventForm() {
  const dispatch = useDispatch();

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventStartDate, setEventStartDate] = useState(null);
  const [eventEndDate, setEventEndDate] = useState(null);
  const [eventDescription, setEventDescription] = useState("");
  const [eventHandledBy, setEventHandledBy] = useState("");
  const [eventOrganisation, setEventOrganisation] = useState("");
  const [totalSubEvents, setTotalSubEvents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      type: eventType,
      startDate: eventStartDate,
      endDate: eventEndDate,
      description: eventDescription,
      handledBy: eventHandledBy,
      organisation: eventOrganisation,
      subEvents: totalSubEvents,
    };
    dispatch(addEvent(newEvent));
    setEventName("");
    setEventType("");
    setEventStartDate(null);
    setEventEndDate(null);
    setEventDescription("");
    setEventHandledBy("");
    setEventOrganisation("");
    setTotalSubEvents("");
  };

  return (
    <div className="container">
      <h2>Add/Edit Event</h2>
      <form onSubmit={handleSubmit}>
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
          Save Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
