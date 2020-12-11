import React from 'react';
import axios from 'axios';

const { Consumer, Provider } = React.createContext();

// AuthProvider that shares the functions and co
class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null
  }
  // Loading to check whether the user is logged
  componentDidMount () {
    // backend is running on 5000
    // withCredentials - is there a cookie available we sent it 
   this.me()
  }
  // providing the input and sending them with axios
  signup = (username, password, email) => {
    axios.post(
      'http://localhost:5000/auth/signup', 
      { username, password, email },  // sending the req.body
      { withCredentials: true }
    )
    .then((response) => {
      const user = response.data;
      this.setState({ isLoggedIn: true, user: user });
    })
    .catch((err) => {
      // add logic to display error messages
      this.setState({ isLoggedIn: false, user: null });
    })
  }

  login = (username, password) => {
    axios.post(
      'http://localhost:5000/auth/login', 
      { username, password }, 
      { withCredentials: true }
    )
    .then((response) => {
      const user = response.data;
      this.setState({ isLoggedIn: true, user: user });
    })
    .catch((err) => {
      // add logic to display errors
      this.setState({ isLoggedIn: false, user: null });
    })
  }

  logout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then( (data) => {
        this.setState({ isLoggedIn: false, user: null })
      })
      .catch( (err) => console.log(err));
  }

   me = () => {
    axios.get('http://localhost:5000/auth/me', { withCredentials: true } )
    .then( (response) => {
      const user = response.data;
      console.log('user', user)
      this.setState( { isLoggedIn: true, user: user, isLoading: false } )
    })
    .catch( (err) => {
      this.setState( { isLoggedIn: false, user: null, isLoading: false } )
    })
   }


  render() {
    const { isLoggedIn, isLoading, user } = this.state;
    const { signup, login, logout, me } = this;

    if (isLoading) return <p>Loading</p>;

    return(
	// Passing the value to all other components
      <Provider value={{ isLoggedIn, isLoading, user, signup, login, logout, me }}  >
        {this.props.children}
      </Provider>
    )
  }

}


// HOC that converts regular component into a Consumer
const withAuth = (WrappedComponent) => {
  
  return class extends React.Component {
    render() {
      return(
        <Consumer>
          { (value) => {
            const { isLoggedIn, isLoading, user, signup, login, logout, me } = value;

            return (<WrappedComponent 
                      {...this.props}
                      isLoggedIn={isLoggedIn} 
                      isLoading={isLoading} 
                      user={user} 
                      signup={signup} 
                      login={login} 
                      logout={logout}
                      me={me}
                    />)

          } }
        </Consumer>
        )
    }
}
}


export { AuthProvider, withAuth }