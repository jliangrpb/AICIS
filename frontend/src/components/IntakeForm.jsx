
import { useState } from "react";

function IntakeForm() {
  // Tracks the current step of the form
  const [step, setStep] = useState(1);

  // Stores all information entered by the user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    description: "",
  });

  // Updates the corresponding field when the user types or selects something
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Moves the user from Step 1 to Step 2
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
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setStep(3);
          }}
        >
          <h3>Service / Project Information</h3>

          <div>
            <label htmlFor="service">Service Interest *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="AI & Automation">AI & Automation</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="Other">Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="description">Project Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your business needs or project goals..."
              rows={5}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" onClick={() => setStep(1)}>
              Back
            </button>

            <button type="submit">Next</button>
          </div>
        </form>
      )}

      {/* Step 3: Review & Submit */}
      {step === 3 && (
        <div>
          <h3>Review Your Information</h3>

          <p>
            <strong>Name:</strong> {formData.name}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>

          <p>
            <strong>Company:</strong> {formData.company || "Not provided"}
          </p>

          <p>
            <strong>Service:</strong> {formData.service}
          </p>

          <p>
            <strong>Project Description:</strong> {formData.description}
          </p>

          <button type="button" onClick={() => setStep(2)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default IntakeForm;