import React from 'react'; // React library, Class Component ke liye 'React.Component' zaroori hai

/**
 * Child Component (Simple Functional Component)
 * Yeh component 'props' receive karega.
 */
function ProfileCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-sm">
      <h2 className="text-xl font-bold text-center mb-2">Profile Card (Child)</h2>
      <p className="text-gray-700">
        <span className="font-semibold">Naam (Prop): </span> {props.name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Status (Prop): </span> 
        <span className={props.status === 'Online' ? 'text-green-500' : 'text-red-500'}>
          {props.status}
        </span>
      </p>
    </div>
  );
}


/**
 * Parent Component (Class Component)
 * Yeh component 'state' manage karega aur 'props' pass karega.
 */
class App extends React.Component {
  
  // 1. STATE: Component ka internal data
  constructor(props) {
    super(props);
    // State ko hamesha constructor mein initialize karein
    this.state = {
      isLoggedIn: false,
      username: "Vinay"
    };
    
    // 'this' ko event handler se bind karna zaroori hai
    this.handleToggleLogin = this.handleToggleLogin.bind(this);
  }

  // 2. STATE CHANGE: State ko update karne wala method
  handleToggleLogin() {
    // State ko hamesha 'this.setState' se hi update karein
    // Hum 'prevState' ka use kar rahe hain taaki value sahi se toggle ho
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  }

  // 3. RENDER: Component kaisa dikhega
  render() {
    
    // State ke hisaab se values derive karein
    const statusText = this.state.isLoggedIn ? "Online" : "Offline";
    const buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
    const profileName = this.state.isLoggedIn ? this.state.username : "Guest";

    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          
          
          
          {/* State change karne wala button */}
          <button
            onClick={this.handleToggleLogin}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition duration-200"
          >
            {buttonText}
          </button>

          {/* PROPS: Yahaan hum Parent ka data (jo state se aa raha hai)
            Child component ('ProfileCard') ko 'props' ke roop mein bhej rahe hain.
          */}
          <div className="flex justify-center">
            <ProfileCard name={profileName} status={statusText} />
          </div>

        </div>
      </div>
    );
  }
}

// 'App' component ko default export karein
export default App;

