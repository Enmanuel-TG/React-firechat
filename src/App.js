import { db, googleAuthProvider, firebase, } from './config/firebase';
import Button from './compouents/Button';



function App() {
  const singInwithGoogle = async () => {

    firebase.auth().useDeviceLanguage();

    try {
      await firebase.auth().singInwithPopup(googleAuthProvider);

    }
    catch (e) {
      console.error(e.message);
    }
  };

  <br />


  return (
    <div>
      <Button onClick={singInwithGoogle}>Inicia Secion con Google
      </Button>
    </div>
  );
};

export default App;
