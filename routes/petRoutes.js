const express = require("express");
const router = express.Router();
const {
  addPet,
  getAllPets,
  getPetById,
  updatePetProfile,
  adoptPet,
  deletePet,
  filterPetsByMood,
} = require("../controllers/petController");
const upload = require('../utils/upload')

// router.post("/addPets", addPet);
router.post('/addPets', upload.single('image'), addPet);
router.get("/getPets", getAllPets);
router.get("/getPets/:id", getPetById);
router.put("/updatePets/:id", updatePetProfile);
router.patch("/adoptPets/:id/adopt", adoptPet);
router.delete("/deletePets/:id", deletePet);
router.get("/filterPets", filterPetsByMood);

module.exports = router;