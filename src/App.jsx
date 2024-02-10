import React from 'react'; // Import React
import Header from './components/Header.jsx'; // Corrected import statement
import './App.css'; // Import App.css
import Banner from './components/Banner.jsx'; 
import Experts from './components/Experts.jsx'; 
import Newsletter from './components/Newsletter.jsx'; 
// Define the App component
function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Experts/>
      <Newsletter/>
    </div>
  );
}

// Export the App component as default
export default App;
