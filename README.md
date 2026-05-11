Install dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root directory and add the following:

Code snippet

# Authentication

BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Database

DATABASE_URL=your_database_connection_string
Generate Secret Key:
If you don't have a BETTER_AUTH_SECRET, generate one using Node:

Bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
Start the development server:

Bash
npm run dev
🔒 Authentication Logic
The project uses BetterAuth for robust security.

Registration/Login: Destructured form data handling via react-hook-form for clean, professional logic.

Middleware: Path-based protection. The current configuration protects /profile and /tiles/:path+ (details) while keeping /tiles (gallery) public for discovery.

📁 Project Structure
Plaintext
├── public/
│ └── data.json # Mock data for tiles and collections
├── src/
│ ├── app/
│ │ ├── api/auth/ # BetterAuth route handlers
│ │ ├── login/ # Auth pages
│ │ └── tiles/ # Gallery and detail views
│ ├── components/ # Reusable UI (Bento cards, DaisyUI Loaders)
│ ├── lib/
│ │ ├── auth.ts # Server-side auth config
│ │ └── auth-client.ts # Client-side auth utilities
│ └── styles/ # Tailwind and DaisyUI configurations
Developed by a University Student & Skilled Front-End Developer.
"""

with open("README.md", "w") as f:
f.write(readme_content)

Your README.md file is ready
[file-tag: code-generated-file-0-1778540141403906653]

This README summarizes your work on **CivicEye** and **TileGallery**, covering the technical stack (React, Vite, BetterAuth, Tailwind), the priority systems you developed, and the environment setup including the Google OAuth credentials and the secret key generation we discussed.
