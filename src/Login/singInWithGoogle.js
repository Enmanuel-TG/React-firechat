import { singAuthProdive, firebase, googleAuthProvider } from '../config/firebase';

const singInWithGoogle = async () => {
    firebase.auth().useDeviceLanguage();

    try {
        await firebase.auth().signInWithPopup(googleAuthProvider);
    }
    catch (e) {
        console.error(e.message);
    }

};
export default singInWithGoogle;