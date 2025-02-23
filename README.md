# Angular Pokémon App

A lightweight Angular 19 application that fetches and displays a list of Pokémon sorted alphabetically with detailed views for each entry. 
App demonstrates best practices in component design, lazy loading, reactive state management with signals, and performance optimizations.

## Table of Contents

- [Features](#features)
- [Architecture and Best Practices](#architecture-and-best-practices)
- [Installation](#installation)
- [Development Server](#development-server)
- [Building the App](#building-the-app)
- [Project Structure](#project-structure)

## Features

- **Pokémon List:** Displays a paginated list of Pokémon.
- **Detailed View:** Provides in-depth details for each Pokémon, including abilities, types, and parameters.
- **Lazy Loading:** Routes and components are lazy loaded for optimal performance.
- **Reactive UI:** Uses Angular signals and computed properties for responsive, reactive state management.
- **OnPush Change Detection:** Improves performance by limiting change detection to only when necessary.
- **Accessibility:** Interactive list items support keyboard navigation and focus management.

## Architecture

This project follows modern Angular best practices:

- **Lazy Loading:**  
  Routes load components dynamically via `loadComponent` to keep the initial bundle small. For example, the `/pokemons` route lazy loads its child components for the list and detail views.

- **Change Detection Strategy:**  
  Components are configured with `ChangeDetectionStrategy.OnPush` to enhance performance by reducing unnecessary change detection cycles.

- **Reactive State Management:**  
  The application leverages Angular signals and computed properties to manage state reactively. This approach simplifies component logic and makes the UI responsive to data changes.

- **Separation of Concerns:**  
  The code is organized into clear modules:
    - **Core:** Contains services (e.g., `PokemonService`) and directives (e.g., `DestroySubDirective`) shared across the application.
    - **Features:** Houses feature-specific code such as the Pokémon list and detail components.
    - **Shared:** Contains reusable components like paginators and loaders.

- **Error Handling:**  
  Components such as `PokemonDetailComponent` implement error signals to handle API or navigation errors gracefully, providing a better user experience.

- **Routing:**  
  The routing setup includes nested routes and fallback redirection to ensure smooth navigation even when an invalid path is entered.

## Installation

### Prerequisites

- **Node.js:** Version 16 or higher
- **npm or Yarn:** Latest version recommended
- **Angular CLI:** Version 19.1.8 or compatible

### Steps

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
2. **Navigate to the Project Directory:**
    ```bash
   cd <project-directory>
3. **Install Dependencies:**
    ```bash
   npm install
   ```
   or, if you use Yarn:
    ```bash
   yarn install
   ```

## Development Server

**To start the application locally:**
```bash
  ng serve
```

Open your browser and navigate to http://localhost:4200/. The app will automatically reload when you change any source files.

## Building the App
To create a production-ready build:

```bash
  ng build --configuration production
```

The compiled files will be output to the dist/ directory.

## Project Structure

The project is organized for clarity and scalability:

```aiignore
Here's the directory structure with all comments removed:

├── app
│   ├── app.component.*
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core
│   │   ├── directives
│   │   │   ├── destroy-sub.directive.ts & .spec.ts
│   │   │   └── ui
│   │   ├── interceptors
│   │   ├── models
│   │   └── services
│   ├── features
│   │   └── pokemon
│   │       ├── pokemon.component.*
│   │       ├── pokemon-list
│   │       │   └── pokemon-list.component.*
│   │       └── pokemon-detail
│   │           ├── pokemon-detail.component.*
│   │           └── sub-components
│   │               ├── pokemon-detail-abilities
│   │               ├── pokemon-detail-img
│   │               ├── pokemon-detail-parameters
│   │               └── pokemon-detail-types
│   └── shared
│       ├── loader
│       └── paginator
├── assets
│   ├── fonts
│   ├── img
│   └── styles
│       ├── abstracts
│       ├── base
│       ├── components
│       └── layout
├── environments
├── index.html
├── main.ts
└── styles.scss
```

- **Core:** Contains shared business logic (services) and utility directives.
- **Features:** Includes the Pokémon feature components that manage specific views and functionalities.
- **Shared:** Provides reusable components (e.g., loaders, paginators) that can be utilized across different features.
- **Assets:** Holds all static files including fonts, images, and global styles, ensuring that design assets are organized and easily accessible.


