import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NewHolidayForm = () => {
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHoliday = {
      name: e.target.name.value,
      celebrated: e.target.celebrated.value === "true" ? true : false,
      likes: parseInt(e.target.likes.value),
      description: e.target.description.value,
    };
    await axios.post("/api/holidays", newHoliday);
    navigate(-1, { replace: true });
  };
  return (
    <div>
      <h2>New Holiday</h2>
      <Link to="/">Back to all Holidays</Link>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <label htmlFor="name">Holiday Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label>Celebrated</label>
            <label htmlFor="celebratedTrue">True</label>
            <input type="radio" name="celebrated" id="celebratedTrue" />
            <label htmlFor="celebratedFalse">False</label>
            <input type="radio" name="celebrated" id="celebratedFalse" />
          </div>
          <div>
            <label htmlFor="likes">Likes</label>
            <input type="number" name="likes" id="likes" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              rows="6"
            />
          </div>
        </div>
        <input type="submit" value="submit your holiday" />
      </form>
    </div>
  );
};

export default NewHolidayForm;
