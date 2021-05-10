import { Button, Channel } from "./components";
import { signOut, signInWithGoogle } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";


function App() {

  const { initializing, user } = useAuthState(firebase.auth());


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
          <p>
            <Button onClick={signOut} estilos="salir" > Salir</Button>
            <h2> Bienvenidos al Chat!</h2>
            <br />

            <Channel user={user} />
          </p>
        )
          : <p><Button onClick={signInWithGoogle} estilos="iniciar" > Sign in with Google </Button></p>
      }
    </>
  );
}
export default App;

