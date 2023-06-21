import PropTypes from 'prop-types'

const Result = ({ formData, onBack }) => {
  const { name, age, contactNumber, favoriteColor, favoriteFood } = formData;

  return (
    <div>
      <h2>{name}</h2>
      <hr />
      <p>Age: {age} Years Old</p>
      <p>Contact Number: {contactNumber}</p>
      <h2>Favorites</h2>
      <hr />
      <p>Color: {favoriteColor}</p>
      <p>Food: {favoriteFood}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

Result.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    contactNumber: PropTypes.string.isRequired,
    favoriteColor: PropTypes.string.isRequired,
    favoriteFood: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Result;
