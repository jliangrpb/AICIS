
const express = require("express");
const { saveSubmission } = require("../services/submissionService");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, company, service, description } = req.body || {};

  // Validate required fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof service !== "string" ||
    typeof description !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !service.trim() ||
    !description.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Please complete all required fields.",
    });
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (company != null && typeof company !== "string") {
    return res.status(400).json({
      success: false,
      message: "Company must be text.",
    });
  }

  try {
    const submission = await saveSubmission({
      name: name.trim(),
      email: email.trim(),
      company: (company || "").trim(),
      service: service.trim(),
      description: description.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Your intake form was submitted successfully.",
      submissionId: submission.id,
    });
  } catch (error) {
    console.error("Failed to save intake submission:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save your submission. Please try again.",
    });
  }
});

module.exports = router;