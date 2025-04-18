# My Notes App

A beautiful and functional notes application built with Ionic, Angular, and Firebase. This app allows users to create, edit, and manage their notes with a modern and intuitive interface.

## Features

- 📝 Create and edit notes with title and description
- 🗑️ Delete notes with swipe gestures
- ✏️ Edit existing notes
- 🔄 Real-time sync with Firebase
- 📱 Responsive design for all devices
- 🔙 Proper Android back button handling
- 🎨 Beautiful Material Design UI

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Angular CLI
- Ionic CLI
- Firebase account

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd myApp
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:

   - Create a new Firebase project
   - Enable Firestore database
   - Update the Firebase configuration in `src/environments/environment.ts` and `src/environments/environment.prod.ts`

4. Run the development server:

```bash
ionic serve
```

## Building for Production

### Android

```bash
# Build the app
ionic build

# Add Android platform
ionic capacitor add android

# Open in Android Studio
ionic capacitor open android
```

### iOS

```bash
# Build the app
ionic build

# Add iOS platform
ionic capacitor add ios

# Open in Xcode
ionic capacitor open ios
```

## Project Structure

```
src/
├── app/
│   ├── home/              # Home page component
│   ├── service/           # Services (NoteService)
│   ├── app.component.ts   # Root component
│   ├── app.module.ts      # Root module
│   └── app-routing.module.ts  # Routing configuration
├── assets/                # Static assets
└── environments/          # Environment configurations
```

## Technologies Used

- Ionic Framework
- Angular
- Firebase (Firestore)
- Capacitor
- TypeScript
- SCSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

## Acknowledgments

- Ionic Framework team
- Angular team
- Firebase team
