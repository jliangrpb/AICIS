
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");

const filePath = path.join(__dirname, "../data/submissions.json");

// Read all saved submissions
async function getSubmissions() {
  const fileContent = await fs.readFile(filePath, "utf8");

  const submissions = JSON.parse(fileContent);

  if (!Array.isArray(submissions)) {
    throw new Error("Submission storage must contain an array.");
  }

  return submissions;
}

// Save a new client submission
async function saveSubmission(formData) {
  const submissions = await getSubmissions();

  const newSubmission = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    ...formData,
  };

  submissions.push(newSubmission);

  await fs.writeFile(
    filePath,
    JSON.stringify(submissions, null, 2),
    "utf8"
  );

  return newSubmission;
}

module.exports = {
  getSubmissions,
  saveSubmission,
};