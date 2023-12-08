import { useState } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

import { styles } from "./styles";

import SoundPool from "../../config/modules/SoundPoolModule";

const PianoButton = ({item, index, onButtonTap}) => {
  const [isWhitePressed, setIsWhitePressed] = useState(false);
  const [isBlackPressed, setBlackPressed] = useState(false);

  //^ WhiteKey
  const playWhiteKey = () => {
    const whiteKey = {key: item.key, octave: item.octave, note: item.note};
    onButtonTap(whiteKey);
    setIsWhitePressed(true);
    SoundPool.playSound(item.white);
  };

  const onWhiteTouchUp = () => {
    setIsWhitePressed(false);
  };

  const onWhiteTapGesture = Gesture.Tap()
    .onTouchesDown(playWhiteKey)
    .onTouchesMove(onWhiteTouchUp)
    .onTouchesUp(onWhiteTouchUp);
  
  const onWhiteLongPressGesture = Gesture.LongPress()
    .onTouchesUp(onWhiteTouchUp);

  const whiteGesture = Gesture.Race(onWhiteTapGesture, onWhiteLongPressGesture);

  //^ BlackKey
  const playBlackKey = () => {
    const blackKey = {key: item.bemol, bemol: true, octave: item.octave, note: item.note};
    onButtonTap(blackKey);
    setBlackPressed(true);
    SoundPool.playSound(item.black);
  };

  const onBlackTouchUp = () => {
    setBlackPressed(false);
  };
  
  const onBlackTapGesture = Gesture.Tap()
    .onTouchesDown(playBlackKey)
    .onTouchesMove(onBlackTouchUp)
    .onTouchesUp(onBlackTouchUp);
  
  const onBlackLongPressGesture = Gesture.LongPress()
    .onTouchesUp(onBlackTouchUp);

  const blackGesture = Gesture.Race(onBlackTapGesture, onBlackLongPressGesture);
  
  return (
    <View style={styles.pianoButton}>
      {/* BLACK NOTE */}
      { item.bemol && 
        <View style={styles.absolute}>
          <GestureDetector gesture={blackGesture}>
            <View style={[
              styles.blackKey,
              {
                backgroundColor: isBlackPressed ? "#201f1fe6" : "#201f1f",
              },
            ]} />
          </GestureDetector>
        </View>
      }

      {/* WHITE NOTE */}
      <GestureDetector gesture={whiteGesture}>
        <View style={[
          styles.whiteKey,
          {
            backgroundColor: isWhitePressed ? "#0000002d" : "#f5f5f5",
            borderLeftWidth: index === 0 ? 2.0 : 1.0,
          },
        ]}>
          <Text variant="titleLarge">
            {item.key.toUpperCase()}
          </Text>
          <Text variant="titleLarge" style={{color: "#8b0000"}}>
              ({item.note.toUpperCase()})
          </Text>
        </View>
      </GestureDetector>
    </View>
  );
};

export default PianoButton;