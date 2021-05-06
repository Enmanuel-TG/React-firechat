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
            <Button onClick={signOut} > Sing in with Google</Button>
            <p> Bienvenidos al CHAT!</p>
            <Channel user={user} />
          </>
        ) : <Button onClick={signInWithGoogle} > Sing in with Google </Button>
      }
    </>
  );
}
export default App;

