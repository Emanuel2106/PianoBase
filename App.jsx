import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

import { RootNavigator } from "./src/navigation";
import { ThemeProvider } from "./src/config/theme";

import SoundPool from "./src/config/modules/SoundPoolModule";
import { usePianoKeyboardStore } from "./src/config/store";


function App() {
  const setButtons = usePianoKeyboardStore((state) => state.setButtons);

  useEffect(() => {
    loadTones().then(() => {
      SplashScreen.hide();
    });

    return () => {
      SoundPool.releaseSound();
    };
  }, []);

  const loadTones = async () => {
    const sounds = await SoundPool.loadSounds();
    setButtons(sounds);
  };

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{flex:1}}>
        <RootNavigator />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;