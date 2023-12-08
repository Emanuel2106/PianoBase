import { useStore } from "zustand";
import { useEffect, useRef, useState } from "react";
import { View, FlatList} from "react-native";
import { OrientationLocker, LANDSCAPE } from "react-native-orientation-locker";

import { styles } from "./styles";

import { PianoButton, PianoControls, StaffLines } from "../../components";
import { practiceStore, PracticeContext, usePianoKeyboardStore } from "../../config/store";
import { PracticeHeader, PracticeStaffIcon, StaffNotes } from "./components";
import { usePianoDimensions } from "../../hooks";

const PracticeScreen = ({route, navigation}) => {
  const { melody } = route.params;


  const [store, setStore] = useState(practiceStore([], 0));

  const { tileWidth, staffIconSize, noteIconSize, lineSpace, gap, maxNotes, maxButtons } = usePianoDimensions();
  
  const addTone = useStore(store, (state) => state?.addTone);
  
  const buttons = usePianoKeyboardStore((state) => state.buttons);

  const scrollRef = useRef(null);

  useEffect(() => {
    if(maxNotes > 5) {
      setStore(practiceStore(melody.sheet, Math.floor(maxNotes)));
    }
  }, [maxNotes]);


  return (
    <PracticeContext.Provider  value={store}>
      <View style={styles.container}>
        {/* Title */}
        <View style={{flex: 0.15}}>
          <PracticeHeader 
            navigation={navigation}
            name={melody.name}
          />
        </View>

        {/* Staff */}
        <View style={{flex: 0.35}} >
          <View style={styles.staffContainer}>
            <StaffLines />

            <PracticeStaffIcon iconSize={staffIconSize} />

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
            horizontal
            data={buttons}
            ref={scrollRef}
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

        <PianoControls 
          scrollRef={scrollRef} 
          maxButtons={maxButtons} 
          initialPosition={tileWidth * 21}
        />
      </View>

      <OrientationLocker orientation={LANDSCAPE} />
    </PracticeContext.Provider>
  );
};

export default PracticeScreen;