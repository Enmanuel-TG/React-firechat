import { db, googleAuthProvider, firebase } from "./config/firebase";
import Button from "./components/Button";

function App() {
  const signInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

    try {
      await firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {
        user ? (
          <>
            <Button onClick={signOut} > Sing in with Google</Button>
            <p> Bienvenidos al CHAT!</p>
          </>
        ) : <Button onClick={signInWithGoogle} > Sing in with Google </Button>
      }
    </div>
  );
}
export default App;
