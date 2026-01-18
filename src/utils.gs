function log(msg) {
  Logger.log(msg);
}

function todayYMD() {
  return Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd");
}

function calculateAge(birthDate, eventDate) {
  if (!birthDate) return "";
  let age = eventDate.getFullYear() - birthDate.getFullYear();
  if (
    eventDate.getMonth() < birthDate.getMonth() ||
    (eventDate.getMonth() === birthDate.getMonth() &&
     eventDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}