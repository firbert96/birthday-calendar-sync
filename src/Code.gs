function syncBirthdays() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("Birthdays");
  if (!sheet) throw new Error("Birthdays sheet not found");

  const data = sheet.getDataRange().getValues();
  const lunarMap = loadLunarMap();
  const calendar = getOrCreateCalendar();
  const currentYear = new Date().getFullYear();

  for (let i = 1; i < data.length; i++) {
    const [name, greg, lunar] = data[i];
    if (!name) continue;

    let eventDate = null;
    let birthDate = null;

    // Gregorian birthday
    if (greg) {
      birthDate = new Date(greg);
      eventDate = new Date(
        currentYear,
        birthDate.getMonth(),
        birthDate.getDate()
      );
    }

    // Lunar birthday
    if (lunar) {
      const key = `${currentYear}-${lunar}`;
      if (!lunarMap[key]) {
        log(`Missing lunar mapping: ${key}`);
        continue;
      }
      eventDate = lunarMap[key];
    }

    if (!eventDate) continue;

    let titleType = "";

    if (greg && !lunar) titleType = "[GREG]";
    if (lunar && !greg) titleType = "[LUNAR]";
    if (greg && lunar) titleType = "[GREG+LUNAR]"; // optional safety

    const title = `${CONFIG.EVENT_TAG}${titleType} ${name}`;
    const age = birthDate
      ? calculateAge(birthDate, eventDate)
      : "";

    sheet.getRange(i + 1, 4).setValue(age);

    if (eventExists(calendar, title, eventDate)) {
      log(`Skip duplicate: ${title} ${eventDate}`);
      continue;
    }

    if (CONFIG.DRY_RUN) {
      log(`[DRY-RUN] Create ${title} on ${eventDate}`);
    } else {
      calendar.createAllDayEvent(title, eventDate, {
        description: age ? `Turns ${age}` : "Lunar birthday"
      });
      log(`Created: ${title}`);
    }
  }
}

function dailyTriggerGuard() {
  const today = new Date();
  const month = today.getMonth(); // 0 = Jan, 11 = Dec
  const day = today.getDate();

  // Only run on December 31
  if (month === 11 && day === 31) {
    syncBirthdays();
  } else {
    Logger.log("Not Dec 31, skipping birthday sync.");
  }
}

