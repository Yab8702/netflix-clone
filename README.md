# Netflix Clone

This is a Netflix clone built using React, Firebase Authentication, and Tailwind CSS.

## Features

- User authentication with Firebase Authentication
- Play movie trailers with the YouTube Data API
- Responsive design with Tailwind CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Yab8702/netflix-clone.git
   ```

2. Install the dependencies:

   ```bash
   cd netflix-clone
   npm install
   ```

3. Set up Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firebase Authentication and Firestore in your project
   - Copy your Firebase project configuration and replace the placeholders in `src/firebase.js` with your own configuration
   - Add your Firebase API key as an environment variable. You can do this by creating a `.env` file in the root directory of your project and adding the following line:

4. Set up the environment variables:

   - Create a `.env` file and add the following variables:

     ```

     FIREBASE_API_KEY=<your-firebase-api-key>
     FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     FIREBASE_PROJECT_ID=<your-firebase-project-id>
     FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
     FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
     FIREBASE_APP_ID=<your-firebase-app-id>
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

