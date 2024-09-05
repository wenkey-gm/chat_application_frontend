# Chat Application Frontend

## Overview

This repository contains the frontend of a chat application built using modern web technologies to provide a user-friendly interface for real-time messaging. It communicates with the backend for user authentication and messaging features, providing a responsive and interactive experience.

## Features

- Real-time messaging
- User authentication (login)
- Responsive UI for various devices
- Integration with backend APIs for seamless data exchange
- WebSockets for echoing the user messages.

## Tech Stack

- **React.js**: UI framework
- **Redux**: State management
- **Axios**: API requests
- **Socket.IO**: Web Socket echo Server
- **CSS3**: Styling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x) and npm (>= 6.x) installed. You can download them from nodejs.org.
- An active backend server (refer to the Chat Application Backend).

## Getting Started

1. Clone the repository:
    To start, clone this repository to your local machine:

   ```bash
   git clone https://github.com/wenkey-gm/chat_application_frontend.git
   cd chat_application_frontend
   ```

2. Install dependencies:
    Install all required dependencies using npm:

    ```bash
    npm install
    ```

3. Start the development server:
    To start the application in development mode, run:

    ```bash
    npm start
    ```

4. Running Tests:
    To run unit tests and ensure the integrity of your components and logic, execute:

    ```bash
    npm test
    ```

5. Build for Production:
    To create an optimized production build of the app, run:

    ```bash
    npm run build
    ```

## Backend Integration

Ensure the [Chat Application Backend](https://github.com/wenkey-gm/chat_application_backend) is running to enable full functionality.
