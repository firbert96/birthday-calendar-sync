# 🎂 Birthday Sync (Gregorian & Chinese Lunar)

![Apps Script](https://img.shields.io/badge/Google-Apps%20Script-yellow)
![Google Sheets](https://img.shields.io/badge/Google-Sheets-green)
![Google Calendar](https://img.shields.io/badge/Google-Calendar-blue)
![License](https://img.shields.io/badge/license-MIT-purple)

A Google Apps Script project to manage, convert, and sync birthdays using both **Gregorian (solar)** and **Chinese Lunar calendars** with Google Sheets and Google Calendar.

This project is designed for people who track birthdays traditionally (Chinese lunar dates) while still needing **modern Gregorian calendar reminders**.

---

## ✨ Features

- 📅 Store birthdays in **Gregorian or Chinese Lunar format**
- 🔁 Convert **Chinese Lunar → Gregorian** dates yearly
- 🗓 Sync birthdays to **Google Calendar**
- 🔄 Yearly re-sync support (Lunar dates shift every year)
- 🧹 Reset / clean duplicated or dirty calendar data
- 🧠 Data-driven lunar calendar (manual, transparent, reliable)

---

## 📁 Project Structure

```text
.
├── src/
│   ├── Code.gs
│   ├── utils.gs
│   ├── calendar.gs
│   └── utils.gs
│
├── sheets/
│   └── Example-Birthdays-File.xlsx
│
├── appsscript.json
├── .gitignore
└── README.md
