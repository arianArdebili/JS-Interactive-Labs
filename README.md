# Event Listeners & DOM Manipulation Lab

### 🚀 Project Overview
This is a lightweight front-end project designed to demonstrate interactive UI components using Vanilla JavaScript. It features a custom-styled toggle button that dynamically controls the visibility and state of content through the DOM.

### 🛠️ Tech Stack
*   **HTML5:** Semantic structure for content and trigger elements.
*   **CSS3:** Modern dark theme featuring smooth transitions, Flexbox layout, and state-based styling.
*   **JavaScript (ES6):** Logic implemented using `addEventListener` and `classList.toggle` for efficient state management.

### 🧠 Key Concepts
*   **DOM Event Handling:** Utilizing click events to trigger UI state changes.
*   **Conditional State Logic:** Dynamically updating text content (`Reveal More` vs. `Reveal Less`) based on CSS class presence.
*   **Smooth UI Transitions:** Implementing non-blocking visual feedback via `opacity` and `max-height` transitions.

### 🛡️ Cybersecurity Relevance (Pentesting Perspective)
Understanding client-side DOM manipulation is a foundational skill for **Web Penetration Testing**. Many modern web applications attempt to "hide" administrative features, sensitive buttons, or restricted data using client-side logic (e.g., `hidden` classes or `display: none`). 

Analyzing this logic is the first step in identifying vulnerabilities such as:
*   **Insecure Direct Object References (IDOR):** Discovering hidden elements that reveal restricted functionality.
*   **Client-Side Bypasses:** Modifying the DOM or JavaScript variables to reveal sensitive information intended to be restricted from certain user roles.

### 🖥️ How to Run
1. Clone the repository.
2. Open `index.html` in any modern web browser.
