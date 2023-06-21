import { useState } from 'react'

function App2() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    favoriteColor: '',
    favoriteFood: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      contactNumber: '',
      favoriteColor: '',
      favoriteFood: ''
    });
    setSubmitted(false);
  };

  const { name, age, contactNumber, favoriteColor, favoriteFood } = formData;

  return (
    <div>
      {submitted ? (
        <div>
          <h2>{name}</h2>
          <p>Age: {age} Years Old</p>
          <p>Contact Number: {contactNumber}</p>
          <h2>Favorites</h2>
          <p>Color: {favoriteColor}</p>
          <p>Food: {favoriteFood}</p>
          <button onClick={handleReset}>Back</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={contactNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="favoriteColor">Favorite color:</label>
            <input
              type="text"
              id="favoriteColor"
              name="favoriteColor"
              value={favoriteColor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="favoriteFood">Favorite food:</label>
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
      )}
    </div>
  );
}

export default App2
