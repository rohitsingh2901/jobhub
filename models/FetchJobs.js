const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  id: Number,
  applicants: Number,
  name: String,
  company: String,
  location: String,
  startDate: String,
  minCtc: Number,
  maxCtc: Number,
  minExperience: Number,
  maxExperience: Number,
  postTime: String,
  status: String,
  image: String,
  openings: Number,
  aboutCompany: String,
  afterProbation: String,
  perks: [String],
  skillsRequired: [String],
  aboutJob: String
});

const jobsDataSchema = new mongoose.Schema({
  jobs: [jobSchema]
});

const JobsData = mongoose.model('Jobs', jobsDataSchema);
module.exports = JobsData