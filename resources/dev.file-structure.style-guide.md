# File Structure

```bash

src/
├── components/              # Reusable components
│   ├── UI/                 
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.module.css
│   └── Layout/
│       ├── Header/
│       │   ├── Header.jsx
│       │   └── Header.module.css
│       └── Footer/
│           ├── Footer.jsx
│           └── Footer.module.css
├── styles/                  # App-level styles
│   ├── globals.css
│   ├── variables.css
│   └── pages/
│       ├── home.css
│       └── dashboard.css
└── pages/                   # Page components
    ├── HomePage.jsx
    └── DashboardPage.jsx

```