import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {


    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username')

    if (!token || !username) {
      setUser(null)
    }
    else {
      setUser({
        username
      })
    }
  }, []);

  // Pass the authentication state and functions down to the child components
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};



const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); const navigate = useNavigate()
  const { setUser } = useContext(AuthContext);

  const registerUser = async (registerInfo) => {

    const response = await axios.post("http://localhost:8080/users/signup", registerInfo)

    const { user_id, phone_number } = response.data

    localStorage.setItem('user_id', user_id);
    localStorage.setItem('phone_number', phone_number)
    navigate('/auth/phone-number-verify');
  }

  const authenticateUser = async (loginInfo) => {
    // setLoading(true);
    // setError(null);


    const response = await axios.post('http://localhost:8080/users/signin', loginInfo);

    const { user_id, phone_number } = response.data

    localStorage.setItem('user_id', user_id);
    localStorage.setItem('phone_number', phone_number)
    navigate('/auth/phone-number-verify');


  };


  const verifySMSCode = async (code) => {



    const user_id = localStorage.getItem('user_id')
    const phone_number = localStorage.getItem('phone_number')

    if (!phone_number || !user_id) {
      navigate('/auth/login')
      return
    }

    const response = await axios.post('http://localhost:8080/users/verify-sms-code-signin', {
      user_id, phone_number, code
    })

    const { username, token } = response.data

    localStorage.setItem('token', token);
    localStorage.setItem('username', username)

    setUser({
      username
    })

    localStorage.removeItem('phone_number')

    navigate('/')


  }


  const signOut = () => {
    // Remove the token from storage (e.g., local storage or session storage)
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    localStorage.removeItem('user_id')

    navigate('/auth/login')
  };


  return { loading, error, authenticateUser, verifySMSCode, signOut, registerUser };
};





function useSignOut() {
  const signOut = () => {
    // Remove the token from storage (e.g., local storage or session storage)
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    // Perform any other cleanup or logout actions
    // ...
  };

  useEffect(() => {
    // No cleanup is needed for this effect
  }, []);

  return { signOut };
}


export { useAuth, useSignOut, AuthContext, AuthProvider }