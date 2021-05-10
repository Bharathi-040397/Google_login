import React from "react";
import { useSelector } from "react-redux";
import { signIn, signOut } from "../../redux/Actions";



const key=116063242565-qc5eouj24pgv5s08o2dlt30gffcnno0r.apps.googleusercontent.com;

function Google() {

    const { isLogged, user } = useSelector(state => state.user);
    useEffect(() => {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
              .init({
                clientId:
                key,
                scope: "email",
              })
              .then(() => {
                auth = window.gapi.auth2.getAuthInstance();
      
                 onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
              });
          });
    }, [])
    
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      let resp = auth.currentUser.get().getBasicProfile();
      let profile = {
        id: resp.getId(),
        name: resp.getName(),
        givenName: resp.getGivenName(),
        familyName: resp.getFamilyName(),
        profileAvatar: resp.getImageUrl(),
        gmail: resp.getEmail(),
      };

      props.signIn({ profile });
    } else {
      props.signOut();
    }
  };

  onSignInClick = () => {
    auth.signIn();
  };

  onSignOutClick = () => {
    auth.signOut();
  };

  renderAuthButton=()=> {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{renderAuthButton()}</div>;
  }
}

// const mapStateToProps = (state) => {
//   return { isSignedIn: state.auth.isSignedIn };
 
// };

export default Google;
