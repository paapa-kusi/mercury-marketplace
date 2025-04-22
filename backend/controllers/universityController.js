// University management controller for handling university-related operations
import University from "../schemas/universityModel.js";

// Retrieves a specific university by its ID
const getUniversity = async (req, res) => {
  const { universityId } = req.query;

  try {
    const university = await University.findById(universityId);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }

    res.status(200).json(university);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieves all universities in the system
const getAllUniversities = async (req, res) => {
  try {
    const universities = await University.find({});
    if (!universities) {
      return res.status(404).json({ message: "Universities not found" });
    }

    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Creates a new university with provided details
const createUniversity = async (req, res) => {
  const { _name, location, description, logo } = req.body;
  try {
    const university = await University.create({
      _name,
      location,
      description,
      logo,
    });
    res.status(200).json(university);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getUniversity, getAllUniversities, createUniversity };
