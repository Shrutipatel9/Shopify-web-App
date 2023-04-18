import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';
  
import SignInForm from '../../component/sign-in/sign-in';
import SignUpForm from '../../component/sign-up-form/sign-up-form';
import './authentication.scss'

  const Authentication = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;