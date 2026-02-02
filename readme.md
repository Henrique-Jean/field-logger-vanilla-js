# FieldLogger 🛠️

> An incident management dashboard for field technicians, built with Vanilla JavaScript to demonstrate core DOM manipulation and state management concepts.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Project Overview

**FieldLogger** is a Single Page Application (SPA) designed to help maintenance teams track operational issues. It solves the problem of paper-based logging by providing a digital interface to record, filter, and manage equipment failures in real-time.

This project was built **without frameworks** (No React, No jQuery) to simulate a deep understanding of how JavaScript interacts with the browser's rendering engine.

## 🚀 Key Features

* **Dynamic CRUD Operations:** Create and Delete logs with immediate UI updates.
* **State Management:** Uses a centralized array state synchronized with `localStorage` for data persistence.
* **Filtering Logic:** Real-time filtering for "High Priority" issues using array methods.
* **Semantic HTML5:** Accessible structure using modern tags (`<main>`, `<section>`, `<article>`).
* **CSS Variables:** Theming system for easy maintainability and consistency.
* **Event Delegation:** Optimized performance by attaching listeners to parent containers.

## 🛠️ Tech Stack

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Storage:** LocalStorage API
* **Style:** Flexbox & CSS Variables (No external libraries)
* **Versioning:** Git & GitHub

## 💡 Key Learnings

Building this project reinforced the following engineering concepts:
1.  **DOM Manipulation:** Creating and injecting elements dynamically using `document.createElement` and Template Literals.
2.  **Immutability:** Using `.filter()` instead of `.splice()` to handle deletions, preparing the mindset for React state updates.
3.  **Event Bubbling:** Implementing Event Delegation to handle clicks on dynamically created elements.
4.  **Clean Code:** Separating concerns (UI vs Logic vs Data).

## 🏁 How to Run

1. Clone the repository:
   ```bash
   git clone [https://github.com/Henrique-Jean/field-logger-vanilla-js]