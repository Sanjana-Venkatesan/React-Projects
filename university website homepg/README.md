## React Course App

This project is a React application that displays information about different courses and their respective parts. It demonstrates how to structure data, pass props, and render dynamic content in React.

### Features
- Displays a list of courses and their parts.
- Each course contains parts with a name and the number of exercises.
- Demonstrates usage of React components, props, and array mapping.

### Project Structure
- `App.jsx`: Main component that defines the course data and renders the `Course` component.
- `Course`: Component responsible for displaying the list of courses and their parts.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sanjana-Venkatesan/React-Projects.git
   cd React-Projects
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```

### Data Structure
The `courses` array is passed as props to the `Course` component. Example data:
```javascript
const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      { name: 'Fundamentals of React', exercises: 10, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 14, id: 3 },
      { name: 'Redux', exercises: 11, id: 4 }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      { name: 'Routing', exercises: 3, id: 1 },
      { name: 'Middlewares', exercises: 7, id: 2 },
      { name: 'Redux', exercises: 11, id: 4 }
    ]
  }
];
```

### How to Use
- Update the `courses` array in `App.jsx` to add or modify courses.
- Customize the `Course` component as needed.

### Technologies Used
- **React.js**: For building the user interface.
- **JavaScript**: For logic and data manipulation.
- **Node Package Manager (npm)**: For managing dependencies.

### Running the App
After running `npm start`, the app will be available at:
```
http://localhost:3000
```
---

### Author
Created by **Sanjana**. Feel free to contribute or fork this repository!

