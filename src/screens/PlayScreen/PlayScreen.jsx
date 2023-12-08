import { useStore } from "zustand";
import { useEffect, useState, useRef } from "react";
import { View, FlatList} from "react-native";
import { OrientationLocker, LANDSCAPE } from "react-native-orientation-locker";

import { styles } from "./styles";

import { PianoButton, PianoControls, StaffIcon, StaffLines } from "../../components";
import { playStore, PlayContext, usePianoKeyboardStore } from "../../config/store";
import { PlayHeader, StaffNotes } from "./components";
import { usePianoDimensions } from "../../hooks";

const PlayScreen = ({navigation}) => {
  const [store, setStore] = useState(playStore(0));

  const { tileWidth, staffIconSize, noteIconSize, lineSpace, gap, maxNotes, maxButtons } = usePianoDimensions();

  const addTone = useStore(store, (state) => state.addTone);

  const buttons = usePianoKeyboardStore((state) => state.buttons);

  const scrollRef = useRef(null);

  useEffect(() => {
    if(maxNotes > 5) {
      setStore(playStore(maxNotes));
    }
  }, [maxNotes]);

  return (
    <PlayContext.Provider  value={store}>
      <View style={styles.container}>
        {/* Title */}
        <View style={{flex: 0.15}}>
          <PlayHeader navigation={navigation} />
        </View>

        {/* Staff */}
        <View style={{flex: 0.35}} >
          <View style={styles.staffContainer}>
            <StaffLines />

            <StaffIcon size={staffIconSize} />

            <StaffNotes
              noteIconSize={noteIconSize}
              lineSpace={lineSpace}
              gap={gap}
            />
          </View>
        </View>
        
        {/* Keyboard */}
        <View style={{flex: 0.5}} >
          <FlatList
            key={({item}) => item.key}
            ref={scrollRef}
            scrollEnabled={false}
            horizontal
            data={buttons}
            renderItem={({item, index}) => {
              return <View
                key={item.key}
                style={{width: tileWidth}}
              >
                <PianoButton
                  item={item}
                  index={index}
                  onButtonTap={addTone}
                />
              </View>;
            }}
          />
        </View>

        <PianoControls scrollRef={scrollRef} maxButtons={maxButtons} />
      </View>

      <OrientationLocker orientation={LANDSCAPE} />
    </PlayContext.Provider>
  );
};

export default PlayScreen;