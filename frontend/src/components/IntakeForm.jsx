
import { useState } from "react";

function IntakeForm() {
  // Tracks which step of the form the user is on
  const [step, setStep] = useState(1);

  // Stores the information entered by the user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    description: "",
  });

  // Updates the form whenever the user types something
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Moves the user to Step 2
  function handleNext(event) {
    event.preventDefault();
    setStep(2);
  }

  return (
    <div>
      <h2>Client Intake Form</h2>
      <p>Step {step} of 3</p>

      {/* Step 1: Contact Information */}
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h3>Contact Information</h3>

          <div>
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="company">Company / Organization</label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Next</button>
        </form>
      )}

      {/* Step 2: Service / Project Information */}
      {step === 2 && (
        <div>
          <h3>Service / Project Information</h3>
          <p>We'll build this section next.</p>

          <button type="button" onClick={() => setStep(1)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default IntakeForm;