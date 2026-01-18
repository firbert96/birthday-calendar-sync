function getOrCreateCalendar() {
  const calendars = CalendarApp.getCalendarsByName(CONFIG.CALENDAR_NAME);
  return calendars.length
    ? calendars[0]
    : CalendarApp.createCalendar(CONFIG.CALENDAR_NAME);
}

function loadLunarMap() {
  const sheet = SpreadsheetApp.getActive()
    .getSheetByName("LUNAR_CALENDAR");
  if (!sheet) throw new Error("LUNAR_CALENDAR sheet missing");

  const rows = sheet.getDataRange().getValues().slice(1);
  const map = {};

  rows.forEach(([year, lunar, greg]) => {
    if (!year || !lunar || !greg) return;
    map[`${year}-${lunar}`] = new Date(greg);
  });

  return map;
}

function eventExists(calendar, title, date) {
  const events = calendar.getEventsForDay(date);
  return events.some(e => e.getTitle() === title);
}
