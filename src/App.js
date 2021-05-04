import { db, googleAuthProvider, firebase } from "./config/firebase";
import Button from "./components/Button";

function App() {
  const singInwithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

    try {
      await firebase.auth().singInwithPopup(googleAuthProvider);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <Button onClick={singInwithGoogle}>Inicia Sesion con Google</Button>
    </div>
  );
}

export default App;
