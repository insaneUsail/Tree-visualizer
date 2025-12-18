# 🌳 Tree Visualizer

A lightweight, interactive Organization Chart / Tree visualization built with **React** and **pure CSS**.

This project renders hierarchical data structures into a clean, collapsible tree view. It uses recursive rendering and standard CSS pseudo-elements (`::before` and `::after`) to draw connecting lines automatically, ensuring a responsive UI without heavy charting libraries.

## ✨ Features

* **Recursive Rendering:** Can handle deep nesting (Root → Child → Grandchild).
* **Interactive:** Click nodes to Expand (+) or Collapse (-) branches.
* **Pure CSS Connectors:** Uses CSS for all linking lines (no SVG/Canvas required).
* **Responsive:** Handles wide trees with automatic horizontal scrolling.
* **Vite-Powered:** Fast development and optimized build process.

## 🛠️ Tech Stack

* **React** (Functional Components + Hooks)
* **Vite** (Build Tool)
* **CSS3** (Flexbox, Pseudo-elements)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js installed (v14 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/tree-visualizer.git](https://github.com/your-username/tree-visualizer.git)
    cd Tree-visualizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser to the local URL provided (usually `http://localhost:5173`).

## 📂 Project Structure

This project follows a standard Vite + React directory structure:

```text
Tree-visualizer/
├── node_modules/      # Project dependencies
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and icons
│   ├── App.css        # Component level styles
│   ├── App.jsx        # Main application component (Contains Tree Logic)
│   ├── index.css      # Global styles (Contains Tree Connector CSS)
│   └── main.jsx       # React Entry point
├── .gitignore         # Git ignore rules
├── eslint.config.js   # Linting configuration
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration