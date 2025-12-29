# Duration Calculator

Project Overview : The Duration Calculator is a visually enhanced, web-based countdown application built using HTML, CSS, and JavaScript. It allows users to select a target date and time and dynamically calculates the remaining duration in days, hours, minutes, and seconds in real time. The project combines functional JavaScript logic with modern UI/UX elements such as glassmorphism styling, animated backgrounds, and responsive design.

Objective :
    - To calculate the time duration between the current time and a user-selected future date
    - To display a real-time countdown with smooth UI updates
    - To build an interactive frontend application using pure web technologies

Technologies & Tools Used :
    1. HTML5
    2. CSS3
    3. JavaScript (Vanilla JS)
    4. Datetime Local Input API
    5. CSS Animations and Keyframes

Features :
  - User-selectable date and time input
  - Real-time countdown calculation
  - Displays remaining time in:
      - Days
      - Hours
      - Minutes
      - Seconds
  - Dynamic UI updates every second
  - Animated bubble background
  - Glassmorphism-based modern UI
  - Completion status message when countdown ends

How It Works :
  1. User selects a target date and time
  2. JavaScript converts the selected input into a timestamp
  3. The current system time is continuously compared with the target time
  4. The remaining duration is calculated and updated every second
  5. When the countdown reaches zero, a completion message is displayed

How to Run the Project :
  1. Download or clone the repository
  2. Open the file duration_calculator.html in any modern web browser
  3. Select a future date and time
  4. Click INITIALIZE COUNTDOWN
  5. View the live duration countdown
  6. No additional dependencies or installations are required.

Core Logic Highlights :
  - setInterval() used for real-time updates
  - Timestamp difference calculation using Date.getTime()
  - Modular handling of countdown completion
  - Zero-padding for uniform time display

Outcome :
  1. Accurate real-time duration calculation
  2. Smooth visual transitions and animations
  3. Responsive and user-friendly interface
  4. Lightweight and fast execution

Future Enhancements :
  1. Pause and resume countdown functionality
  2. Multiple countdown presets
  3. Time zone support
  4. Alarm or notification on completion
  5. Conversion to a Progressive Web App (PWA)

Use Case Applications :
  1. Event countdowns
  2. Exam or deadline tracking
  3. Product launch timers
  4. Personal reminders
  5. Productivity tools

License :
- This project is intended for educational and learning purposes.
