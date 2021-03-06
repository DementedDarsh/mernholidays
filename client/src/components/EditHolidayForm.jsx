import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditHolidayForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentHoliday, setCurrentHoliday] = useState({});
  
  useEffect(() => {
    const fetchCurrentHoliday = async () => {
      const fetchedHoliday = await axios.get(`/api/holidays/${id}/`);
      setCurrentHoliday(fetchedHoliday.data.data);
    };
    fetchCurrentHoliday();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedHoliday = {
      name: e.target.name.value,
      celebrated: e.target.celebrated.value === "true" ? true : false,
      likes: parseInt(e.target.likes.value),
      description: e.target.description.value,
    };
    await axios.put(`/api/holidays/${id}/`, editedHoliday);
    navigate("/", { replace: true });
    // console.log(newHoliday);
  };

  return (
    <div>
      <h2>Edit Holiday</h2>
      <Link to="/">Back to all holidays</Link>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <label htmlFor="name">Holiday Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={currentHoliday.name}
            />
          </div>
          <div>
            <label>Celebrated:</label>
            <label htmlFor="radioTrue">True</label>
            <input
              type="radio"
              name="celebrated"
              id="radioTrue"
              value="true"
              defaultChecked={currentHoliday.celebrated ? true : false}
            />
            <label htmlFor="radioTrue">False</label>
            <input
              type="radio"
              name="celebrated"
              id="radioFalse"
              value="false"
              defaultChecked={currentHoliday.celebrated ? false : true}
            />
          </div>
          <div>
            <label htmlFor="likes">Likes</label>
            <input
              type="number"
              name="likes"
              id="likes"
              defaultValue={currentHoliday.likes}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              rows="4"
              id="description"
              defaultValue={currentHoliday.description}
            />
          </div>
        </div>
        <input type="submit" value="Save holiday changes" />
      </form>
    </div>
  );
};

export default EditHolidayForm;
