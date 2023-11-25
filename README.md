# Memory App

The Memory App is a simple and user-friendly solution for storing and retrieving photos using phone number pairs as keys. Built with Node.js, Express, Multer, and Mongoose, the app allows users to organize and access their photos seamlessly. The implementation leverages MongoDB for data storage and Pug templates for dynamic content rendering.

## Instructions to Run Locally

### Prerequisites

1. **Node.js Installation:**
   - Ensure Node.js is installed on your machine. If not, download and install it from [Node.js website](https://nodejs.org/).

2. **MongoDB Setup:**
   - Install MongoDB on your machine by following the instructions on the [MongoDB website](https://docs.mongodb.com/manual/installation/).
   - Start the MongoDB server (`mongod`) to enable database connectivity.

### Project Setup

1. **Clone the Repository:**
   - Clone this repository to your local machine using the following command:
     ```
     git clone https://github.com/your-username/memory-app.git
     ```
   - Change into the project directory:
     ```
     cd memory-app
     ```

2. **Install Node Modules:**
   - Run the following command to install the required Node.js modules:
     ```
     npm install
     ```

3. **Run the Application:**
   - Start the application using nodemon:
     ```
     nodemon index.js
     ```

4. **Access the App:**
   - Open your web browser and go to [http://localhost:80](http://localhost:80) to access the Memory App.

### Usage

- Visit the home page to enter phone number pairs and view associated images.
- Access the upload page to upload new images with corresponding phone number pairs.

### Future Enhancements

The current version of the Memory App provides a foundation for further improvements. Future enhancements could include user authentication, image editing capabilities, and improved search functionality.

Feel free to explore and contribute to the project. If you encounter any issues or have suggestions, please open an issue on GitHub.

**Happy memories with Memory App!**
