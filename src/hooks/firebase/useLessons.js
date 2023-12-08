import { useState } from "react";
import firestore from "@react-native-firebase/firestore";

const categories = firestore().collection("categories");


export const useLessons = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = async (callback) => {
    setData(null);
    setIsLoading(true);
    setError(null);

    try {
      await callback();
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = () => {
    execute(async () => {
      const { docs } = await categories.get();

      const snapshot = docs
        .map((doc) => ({id: doc.id, ...doc.data()}))
        .sort((a, b) => a.order - b.order);
      
      setData(snapshot);
    });
  };

  const getLessons = (categoryId) => {
    execute(async () => {
      const { docs } = await categories.doc(categoryId).collection("lessons").get();

      const lessons = docs.map((doc) => ({id: doc.id, ...doc.data()}));
      
      setData(lessons);
    });
  };

  const getSlides = (categoryId, lessonId) => {
    execute(async () => {
      const { docs } = await categories.doc(categoryId).collection("lessons").doc(lessonId).collection("slides").get();

      const slides = docs.map((doc) => ({id: doc.id, ...doc.data()}));
      
      setData(slides);
    });
  };

  return { isLoading, data, error, getCategories, getLessons, getSlides };
};