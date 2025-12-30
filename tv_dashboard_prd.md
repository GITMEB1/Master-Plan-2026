# Product Requirements Document (PRD): Life Command Center (TV Edition)

**Project Name**: Life Command Center v3 "Big Screen"
**Target Device**: 60-inch Television (Living Room context)
**Primary User**: Co-management couple (Danny & Abbey)
**Interaction Model**: "10-Foot UI" (Viewable from sofa, controlled via wireless mouse/keyboard)

---

## 1. Executive Summary
The goal is to transform the desktop-based "Habit Tracker" into a **central household information radiator**. This display will live on the 60-inch TV, serving as the "Status Board" for the family's recovery and reboot plan. It must be instantly readable from 10 feet away and facilitate weekly planning sessions.

## 2. Design Principles (The "10-Foot Experience")
1.  **Readability First**: Minimum font size 24px/36px. High contrast (Dark Mode OLED optimized).
2.  **No Scrolling**: crucial information must fit "Above the Fold".
3.  **"Glanceability"**: Status needs to be binary and clear (Green/Red, Yes/No). No wall of text.
4.  **Touch Targets**: Buttons must be massive for inaccurate mouse/remote clicking.

---

## 3. Core Modules & Layout

### 3.1 The "Heads-Up Display" (Header)
*   **Time/Date**: Large digital clock (top right).
*   **Streak Counter**: "Reboot Streak: Day X" (Central, Glowing).
*   **Financial Health**: (Optional/Discreet) - Days until solvent / emergency fund status.

### 3.2 Mission Control (The "Big Three")
*   **Layout**: Three distinct vertical columns or large cards.
*   **Visuals**: Progress bars are now circular gauges or massive horizontal fills.
    *   **🛡️ Abbey's PIP**: Status Phase (Display: "EVIDENCE GATHERING" in 40pt text).
    *   **🏛️ HMRC 2026**: Compliance Status (Display: "ACCESS PENDING").
    *   **🎯 Lane 1 Jobs**: Daily Counter (0/5) -> Becomes huge Green Tick when done.

### 3.3 The Vital 4 (Daily Habits)
*   **Redesign**: Shift from small cards to a "Quartile Grid" at the bottom.
*   **Behavior**: When clicked, the card flips or glows intensely Green.
*   **Animation**: needs "Juice" (confetti or sound effect) when all 4 are green for the co-review celebration.

### 3.4 Review Mode (New Feature)
*   **Concept**: A "Friday Night" mode.
*   **Function**: Summarizes the week's wins.
*   **UI**: Hides daily controls, shows weekly graph of Apply/Habit stats.

---

## 4. Technical Requirements
4.1 **Data Persistence (CRITICAL)**
*   **The Problem**: `localStorage` is not enough (lost on refresh/device change).
*   **The Solution**: Simple backend JSON storage or Google Sheets integration via n8n.
*   **Requirement**: Job application counts and daily habit stats must persist across reloads and devices.

4.2 **Display Tech**
*   **Responsive**: Media queries using `@media (min-width: 1920px)` and viewport units (`vw`, `vh`) to scale text perfectly.
*   **Input**: Hover states must be obvious (border glow) for mouse usage on a couch.
*   **Theme**: "Cyberpunk / Mission Control". Dark Slate background, Neon Blue/Green accents.

## 5. Success Metrics
*   **Clarity**: Can Abbey read the "PIP Status" from the kitchen (20ft away)?
*   **Engagement**: Is the "Job Counter" updated daily because it's "fun" to see the bar fill up on the big screen?
