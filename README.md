# Consult Your Community at UTD - Web Application

This repository contains the source code for the Consult Your Community (UTD Chapter) web application. The project is a full-stack application utilizing Next.js for the frontend and FastAPI for the backend services.

## Architecture

The application follows a modern web architecture, separating the client-side interface from the server-side API logic.

### Frontend
The frontend is built with **Next.js 15** (App Router), leveraging **React 19** for component-based UI development. Styling is handled via **Tailwind CSS**, with UI components provided by **Shadcn UI** (built on Radix Primitives). The application is configured for static export (`output: "export"`), making it suitable for deployment on static hosting platforms.

Key technologies:
-   Next.js 15
-   React 19
-   TypeScript
-   Tailwind CSS
-   Shadcn UI
-   Lucide React (Icons)

### Backend
The backend is a **FastAPI** application serving RESTful endpoints. It handles contact form submissions, team roster management, and other dynamic functionalities.

Key technologies:
-   FastAPI
-   Python 3.10+
-   Pydantic
-   Uvicorn
-   SendGrid (Email Service)
-   Notion Client (Database Integration)

## Prerequisites

Ensure the following tools are installed in your development environment:

-   **Node.js**: Version 20 or higher is recommended.
-   **pnpm**: Package manager for the frontend.
-   **Python**: Version 3.10 or higher.
-   **pip**: Python package installer.

## Installation

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install Frontend Dependencies**
    Navigate to the project root and install the necessary Node.js packages:
    ```bash
    pnpm install
    ```

3.  **Install Backend Dependencies**
    It is recommended to use a virtual environment for Python dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

## Configuration

The application requires environment variables for external services. Create a `.env` file in the root directory based on the configuration defined in `api/core/config.py`.

Required variables include:
-   `SENDGRID_API_KEY`: API key for SendGrid email services.
-   `NOTION_TOKEN`: Integration token for Notion.
-   `NOTION_DATABASE_ID`: ID of the Notion database used for data storage.
-   `CORS_ORIGINS`: Comma-separated list of allowed origins (default: `http://localhost:3000`).

## Development

To run the application locally, you will need to start both the frontend and backend servers.

### Frontend Development Server
Start the Next.js development server:
```bash
pnpm dev
```
The application will be accessible at `http://localhost:3000`.

### Backend Development Server
Start the FastAPI server:
```bash
pnpm run fastapi-dev
```
Alternatively, you can run it directly with Python:
```bash
uvicorn api.index:app --reload
```
The API documentation will be available at `http://localhost:8000/api/py/docs`.

## Building for Production

To create a production build of the frontend application:

```bash
pnpm build
```

This command generates a static export of the Next.js application in the `out` directory (or `.next` depending on configuration nuances, but `output: "export"` typically targets `out`).

## Project Structure

-   `api/`: Contains the FastAPI application code, including routers and core logic.
-   `app/`: Contains the Next.js application source code (pages, layouts, etc.).
-   `components/`: Reusable React components.
-   `lib/`: Utility functions and shared libraries.
-   `public/`: Static assets served directly.
-   `hooks/`: Custom React hooks.

## Contributing

Please follow standard coding conventions and ensure all new features are accompanied by appropriate tests. Run the linter and formatter before submitting changes:

```bash
pnpm lint
pnpm format
```
