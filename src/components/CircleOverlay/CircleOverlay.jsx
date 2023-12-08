// import { Pressable, View, useWindowDimensions } from "react-native";
// import { IconButton, Portal } from "react-native-paper";
// import { Canvas, Rect, vec, Circle, Text as SText, useFont, Shadow } from "@shopify/react-native-skia";

// import { useMeasure } from "../../hooks/useMeasure";

// const anchors = {
//   "top-left":      {x: -1, y: -1},
//   "top-center":    {x:  0, y: -1},
//   "top-right":     {x:  1, y: -1},
//
//   "center-left":   {x: -1, y:  0},
//   "center":        {x:  0, y:  0},
//   "center-right":  {x:  1, y:  0},
//  
//   "bottom-left":   {x: -1, y:  1},
//   "bottom-center": {x:  0, y:  1},
//   "bottom-right":  {x:  1, y:  1},
// };

// const CircleOverlay = ({childRef, visible, text, textStyle, textAnchor, textOffset}) => {
const CircleOverlay = () => {
  return (<></>);

  // const { height: screenH, width: screenW } = useWindowDimensions();
  // const { box, setBox } = useMeasure(childRef);

  // const font = useFont(textStyle?.fontFamily ?? "serif", textStyle.fontSize);

  // const center = box ? vec(box.cx, box.cy) : vec(0,0);

  // if(!box || !visible || (text && !font)) {
  //   return <></>;
  // }

  // const anchor = anchors[textAnchor];
  // const offset = textOffset;

  // return (
  //   <Portal>
  //     <Pressable 
  //       onPress={() => setBox(null)} 
  //       style={{flex:1}}
  //     >
  //       <Canvas style={{flex:1}}>
  //         <Rect 
  //           color={"#000"} 
  //           opacity={0.3} x={0} 
  //           width={screenW}
  //           height={screenH}
  //         />
          
  //         <Circle
  //           r={box.height / 2}
  //           blendMode={"clear"}
  //           c={center}
  //           color={"white"}
  //         />

  //         {
  //           text &&
  //             <SText
  //               x={center.x + ((box.width / 2) * anchor.x) + offset.x}
  //               y={center.y + ((box.height / 2) * anchor.y) + offset.y}
  //               color={"white"}
  //               font={font}
  //               origin={{x: center.x, y: center.y}}
  //               transform={[{rotate: Math.PI / 2}]}
  //               text={text}
  //             > 
  //               <Shadow dx={0} dy={3} blur={0} color="#3a3838" />
  //             </SText>
  //         }
  //       </Canvas>
  //     </Pressable>

  //     <View style={{position:"absolute", bottom: 15, left: 15}}>
  //       <IconButton 
  //         mode="contained"
  //         icon={"close"}
  //         onPress={() => setBox(null)}
  //       />
  //     </View>
  //   </Portal>
  // );
};

export default CircleOverlay;