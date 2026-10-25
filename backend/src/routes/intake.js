
const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, company, service, description } = req.body;

  // Validate required fields
  if (
    !name?.trim() ||
    !email?.trim() ||
    !service?.trim() ||
    !description?.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Please complete all required fields.",
    });
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  // For now, log the submission instead of saving it
  console.log("New intake submission received:", {
    name,
    email,
    company,
    service,
    description,
  });

  return res.status(200).json({
    success: true,
    message: "Your intake form was received successfully.",
  });
});

module.exports = router;