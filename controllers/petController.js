const Pet = require("../models/petModel");
const { getMood } = require("../utils/moodLogic");

// Create a new pet
const addPet = async (req, res) => {
  const { name, species, age, personality } = req.body;

  try {
    const newPet = new Pet({
      name,
      species,
      age,
      personality,
      mood: getMood(Date.now()),
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: "Error creating pet", error });
  }
};

// Get all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    const petsWithUpdatedMood = pets.map((pet) => {
      const mood = getMood(pet.createdAt, pet.adopted);
      return { ...pet.toObject(), mood };
    });

    res.json(petsWithUpdatedMood);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching pets", error: error.message });
  }
};

// Get a single pet
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    const mood = getMood(pet.createdAt, pet.adopted);
    const petWithUpdatedMood = { ...pet.toObject(), mood };

    res.json(petWithUpdatedMood);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching pet", error: error.message });
  }
};

// Update a pet profile
const updatePetProfile = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: "Error updating pet", error });
  }
};

// Adopt a pet
const adoptPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    pet.adopted = true;
    pet.adoption_date = Date.now();
    await pet.save();
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: "Error adopting pet", error });
  }
};

// Delete a pet
const deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pet", error });
  }
};

// Filter pets by mood
const filterPetsByMood = async (req, res) => {
  const { mood } = req.query;
  if (!mood) {
    return res
      .status(400)
      .json({ message: "Mood query parameter is required" });
  }
  try {
    const pets = await Pet.find();
    const petsWithUpdatedMood = pets.map((pet) => {
      const calculatedMood = getMood(pet.createdAt, pet.adopted);
      return { ...pet.toObject(), mood: calculatedMood };
    });
    const filteredPets = petsWithUpdatedMood.filter((pet) => pet.mood === mood);
    if (filteredPets.length === 0) {
      return res
        .status(404)
        .json({ message: "No pets found with the given mood" });
    }
    res.json(filteredPets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error filtering pets by mood", error: error.message });
  }
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePetProfile,
  adoptPet,
  deletePet,
  filterPetsByMood,
};