import React, { Component } from 'react';

// Yahi hai aapka main Class Component
export default class App extends Component {
  
  // 1. State ko constructor mein initialize karein
  constructor(props) {
    super(props);
    this.state = {
      // Shuruaat mein students dikhenge
      showStudents: true, 
    };

    // 'this' ko function se bind karein
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  // 2. State ko update karne ke liye function
  toggleVisibility() {
    // setState ka use karke state ko toggle karein (ulta karein)
    this.setState(prevState => ({
      showStudents: !prevState.showStudents
    }));
  }

  // 3. Render method jo UI dikhayega
  render() {
    // State se value nikalein
    const { showStudents } = this.state;

    return (
      // Main container
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        
        {/* Profile Card */}
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6 w-full">
          
          <div className="flex flex-col items-center">
            
            {/* Student Image */}
            <div className="w-40 h-40 p-2 border-4 border-green-500 rounded-full mb-4">
              <img 
                src="https://placehold.co/150x150/EBF8F1/34A853?text=Student" 
                alt="Student Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Hide/Show Button */}
            <button
              onClick={this.toggleVisibility} // Click par function call
              className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-200 mb-6"
            >
              {/* Button ka text state ke hisab se badlega */}
              {showStudents ? 'Hide Students' : 'Show Students'}
            </button>

            {/* Student List - Yeh tabhi dikhega jab showStudents true hai */}
            {showStudents && (
              <div className="w-full text-left">
                <div className="p-3 bg-gray-50 border rounded-md mb-2 shadow-sm">
                  <p className="text-gray-700 text-lg">Alice - Roll No: 1</p>
                </div>
                <div className="p-3 bg-gray-50 border rounded-md mb-2 shadow-sm">
                  <p className="text-gray-700 text-lg">Bob - Roll No: 2</p>
                </div>
                <div className="p-3 bg-gray-50 border rounded-md shadow-sm">
                  <p className="text-gray-700 text-lg">Charlie - Roll No: 3</p>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    );
  }
}

