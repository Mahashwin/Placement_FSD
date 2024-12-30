import React from 'react';
import '../components/footer.css';

const Footer = () => {
  const handleReset = () => {
    // Reset the form using its reference
    document.getElementById('form').reset();
  };

  return (
    <footer>
      <form id="form">
        <h1>Footer</h1>
        <div class="row">
        <div class ="col">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        </div>
        <div class ="col">
        <label htmlFor="rollno">Roll No</label>
        <input type="text" name="rollno" id="rollno" />
        </div>
        <div class ="col">
        <label htmlFor="phonenumber">Phone Number</label>
        <input type="number" name="phonenumber" id="phonenumber" />
        </div>
        <button type="button" onClick={handleReset}>
          Submit
        </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
