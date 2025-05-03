function getMood(createdAt) {
  const timeInSystem = Date.now() - new Date(createdAt).getTime();
  const daysInSystem = timeInSystem / (1000 * 3600 * 24);

  if (daysInSystem < 1) {
    return "Happy";
  } else if (daysInSystem <= 3) {
    return "Excited";
  } else {
    return "Sad";
  }
}

module.exports = { getMood };
