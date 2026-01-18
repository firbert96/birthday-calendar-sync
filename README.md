# 🎂 Birthday Calendar Sync

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![Google Apps Script](https://img.shields.io/badge/Platform-Google%20Apps%20Script-blue)](https://script.google.com/)

Sync **Gregorian** and **Chinese Lunar** birthdays from Google Sheets to Google Calendar automatically using Google Apps Script.

---

## 📁 Project Structure

```text
.
├── src/
|   ├── appsscript.json
│   ├── Code.gs
│   ├── utils.gs
│   ├── calendar.gs
│   └── utils.gs
│
├── sheets/
│   └── Example-Birthdays-File.xlsx
│
├── .gitignore
└── README.md

```

---

## 🌟 Features

- Supports both **Gregorian and Lunar birthdays**  
- Automatically **creates or updates events** in Google Calendar  
- Works directly with **Google Sheets** as the data source  
- Configurable **event reminders**  
- Open-source under the **MIT License**

---

## 🛠️ Requirements

- Google Account  
- Google Calendar  
- Google Sheets  
- Basic familiarity with **Google Apps Script**

---

## ⚙️ Setup Guide

### 1️⃣ Prepare Your Google Sheet

Create a Sheet with the following columns:

| Name  | Birthday    | Calendar Type | Notes   |
|-------|------------|---------------|---------|
| Alice | 1990-05-10 | Gregorian     | Friend  |
| Bob   | 1992-08-15 | Lunar         | Cousin  |

- **Birthday**: Use `YYYY-MM-DD` for Gregorian dates  
- **Calendar Type**: `Gregorian` or `Lunar`  
- **Notes**: Optional, used for event description  

> You can adjust column names in the script if needed.

---

### 2️⃣ Create a Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)  
2. Click **New Project**  
3. Copy all `.gs` and `.html` files from this repo into your project  
4. Set **script properties**:

```javascript
const SHEET_ID = 'YOUR_SHEET_ID';
const CALENDAR_ID = 'YOUR_CALENDAR_ID';
```

---

### 3️⃣ Enable APIs

- Go to **Services → Advanced Google Services**  
- Enable **Google Calendar API**  
- Make sure the script has **access to your Sheet and Calendar**

---

### 4️⃣ Run the Script

- Open the Apps Script editor  
- Select the `syncBirthdays` function  
- Click **Run**  
- Grant authorization when prompted  

---

### 5️⃣ Optional: Schedule Automatic Sync

1. Go to **Triggers → Add Trigger**  
2. Select `syncBirthdays` function  
3. Choose **Time-driven → Day timer** or your preferred schedule  

---

## 📝 Notes

- Lunar birthdays are **automatically converted** to Gregorian dates  
- Existing events are **updated**, new birthdays are **added**  
- Logs can be viewed in **Apps Script → Executions**

---

## 📂 Example Sheet Template

You can create your own template with the above structure, or download an example:  
[Download Example Sheet](#) *(replace `#` with your actual template link)*

---

## 💻 Contributing

1. Fork the repository  
2. Make your changes  
3. Submit a pull request  

---

## 📄 License

MIT License © 2026 Firbert Oktariko  

---

## 🙏 Credits

- Inspired by various Google Apps Script birthday sync projects  
- Lunar date conversion logic adapted for accuracy  
