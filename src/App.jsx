import './App.css';
import { useState } from "react";
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
  const [formData, setFormData] = useState({
    holderName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container'>
      <Cards formData={formData} />
      <Form
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
