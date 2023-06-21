import { useState } from 'react'
import Form from './form/Form';
import Result from './results/Result'

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    favoriteColor: '',
    favoriteFood: ''
  });

  const handleSubmit = (data) => {
    setSubmitted(true);
    setFormData(data);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      age: '',
      contactNumber: '',
      favoriteColor: '',
      favoriteFood: ''
    });
  };

  return (
    <div>
      {submitted ? (
        <Result formData={formData} onBack={handleReset} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App
