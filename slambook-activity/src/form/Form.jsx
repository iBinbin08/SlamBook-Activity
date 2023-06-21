import { useState } from 'react';
import PropTypes from 'prop-types'

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    favoriteColor: '',
    favoriteFood: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const { name, age, contactNumber, favoriteColor, favoriteFood } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number: </label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={contactNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="favoriteColor">Favorite Color: </label>
        <input
          type="text"
          id="favoriteColor"
          name="favoriteColor"
          value={favoriteColor}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="favoriteFood">Favorite Food: </label>
        <input
          type="text"
          id="favoriteFood"
          name="favoriteFood"
          value={favoriteFood}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
