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

router.post("/pets", addPet);
router.get("/pets", getAllPets);
router.get("/pets/:id", getPetById);
router.put("/pets/:id", updatePetProfile);
router.patch("/pets/:id/adopt", adoptPet);
router.delete("/pets/:id", deletePet);
router.get("/pets/filter", filterPetsByMood);

module.exports = router;
