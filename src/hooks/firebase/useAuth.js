import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const users = firestore().collection("users");

const errors = {
  "auth/email-already-in-use": "El correo ingresado ya esta en uso",
  "auth/invalid-email": "Por favor ingresa un correo valido",
  "auth/wrong-password": "La contraseña ingresada es incorrecta",
  "auth/user-not-found": "No se encontro un usuario registrado con ese correo",
};

export const useAuth = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (callback) => {
    setData(null);
    setError(null);
    setIsLoading(true);

    try {
      await callback();
    } catch (err) {
      setError(errors[err.code]);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithEmailAndPassword = async (email, password) => {
    execute(async () => {
      const credential = await auth().signInWithEmailAndPassword(email, password);

      const doc = await users.doc(credential.user.uid).get();

      const user = {uid: credential.user.uid, ...doc.data()};

      setData(user);
    });
  };

  const registerWithEmailAndPassword = async (email, password) => {
    execute(async () => {
      const credential = await auth().createUserWithEmailAndPassword(email, password);

      await users.doc(credential.user.uid).set({email});

      const user = {uid: credential.user.uid, email};

      setData(user);
    });
  };

  const sendPasswordResetEmail = async (email) => {
    execute(async () => {
      await auth().sendPasswordResetEmail(email);
    });
  };

  const updatePassword= async (email, password, newPassword) => {
    execute(async () => {
      const credential = auth.EmailAuthProvider.credential(email, password);
      await auth().currentUser.reauthenticateWithCredential(credential);
      await auth().currentUser.updatePassword(newPassword);
    });
  };

  return { 
    isLoading, error, data, 
    loginWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordResetEmail, updatePassword,
  };
};