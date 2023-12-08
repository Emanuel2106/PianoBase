import { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import PagerView from "react-native-pager-view";

import { styles } from "./styles";
import { useLessons } from "../../hooks/firebase";
import { PageIndicator, SlideItem } from "./components";
import { Appbar, Scaffold } from "../../components";

const LessonScreen = ({route}) => {
  const { categoryId, lesson } = route.params;
  
  return (
    <Scaffold 
      appbar={<Appbar title={lesson.title} back />}
      body={LessonBody({categoryId, lessonId: lesson.id})}
    />
  );
};

const LessonBody = ({categoryId, lessonId}) => {
  const [page, setPage] = useState(0);

  const { isLoading, data: slides, getSlides } = useLessons();

  useEffect(() => {
    getSlides(categoryId, lessonId);
  },[]);

  if(isLoading) {
    return <View style={styles.center}>
      <ActivityIndicator />
    </View>;
  }

  return (
    <View style={{flex:1}}>
      <PagerView
        style={{flex:1}}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {
          slides.map((item, index) => {
            return <SlideItem key={index.toString()} item={item} />;
          })
        }
      </PagerView>

      <PageIndicator 
        pagesLength={slides.length}
        currentPage={page}
      />
    </View>
  );
};

export default LessonScreen;