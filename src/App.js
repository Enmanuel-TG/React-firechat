import { Button, Channel } from "./components";
import { signOut, signInWithGoogle } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";
function App() {

  const { initializing, user } = useAuthState(firebase.auth());

  // const signInWithGoogle = async () => {
  //   firebase.auth().useDeviceLanguage();

  //   try {
  //     await firebase.auth().signInWithPopup(googleAuthProvider);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  const renderLoading = () => {
    if (initializing) {
      return <div>
        <h1>Cargando Espera ...</h1>
      </div>
    }
  }

  return (
    <>
      {renderLoading()}
      {
        user ? (
          <>
            <Button onClick={signOut} > Salir</Button>
            <p> Bienvenidos al Chat!</p>
            <Channel user={user} />
          </>
        ) : <Button onClick={signInWithGoogle} > Sign in with Google </Button>
      }
    </>
  );
}
export default App;

