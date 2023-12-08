import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, IconButton, Portal, Snackbar, useTheme } from "react-native-paper";

import { useImagePicker, useProfile, useSnackbar } from "../../../hooks";
import { ImageX } from "../../../components";
import { getInitials } from "../../../utils/utils";
import { useSessionStore } from "../../../config/store";

const buttonRadius = 40;

const AvatarPicker = ({userAvatar, text, size}) => {
  const { isLoading, error: avatarError, data: avatarUrl, updateAvatar } = useProfile();
  
  const { pickedImage, pickImage } = useImagePicker();
  
  const { visible, showSnackbar } = useSnackbar();
  
  const { colors } = useTheme();
  
  const updateSession = useSessionStore((state) => state.updateSession);
  
  const [image, setImage] = useState(userAvatar);
  const [error, setError] = useState(null);

  const onError = (e) => {
    if(!visible) {
      setError(e);
      showSnackbar();
    }
  };

  useEffect(() => {
    if(pickedImage) {
      setImage(pickedImage);
    }
  }, [pickedImage]);

  useEffect(() => {
    if(avatarError) {
      onError(avatarError);
    }
  }, avatarError);

  useEffect(() => {
    if(avatarUrl) {
      setError(null);
      setImage(avatarUrl);
      updateSession({avatar: avatarUrl});
      showSnackbar();
    }
  }, [avatarUrl]);

  const radius = size/2;

  return (
    <View>
      {/* Avatar */}
      <View
        style={{
          borderRadius: radius,
          overflow: "hidden",
          width: size,
          height: size,
        }}
      >
        <Pressable
          android_ripple={{color: colors.ripple, foreground: true}}
          style={{flex:1}}
          onPress={() => {}}
        >
          <View style={{flex:1}}>
            { image
              ? <ImageX
                source={{uri: image}}
                onError={(e) => {
                  setImage(null);
                  onError(e);
                }}
                style={[
                  styles.imageContainer, 
                  {flex: 1, borderRadius: radius, borderColor: colors.primary},
                ]}
                imageStyle={{flex:1}}
                resizeMode="cover"
              />
              : <View style={{flex:1, backgroundColor: colors.primary}}>
                <Text
                  style={[styles.text, {fontSize: size}]}
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                >
                  {getInitials(text)}
                </Text>
              </View>
            }
          </View>
        </Pressable>
      </View>

      {/* Icon */}
      <View style={styles.button}>
        { isLoading
          ? <View style={{
            width: buttonRadius,
            height: buttonRadius,
            borderRadius: buttonRadius/2,
            backgroundColor: colors.surfaceVariant,
            justifyContent: "center",
          }}>
            <ActivityIndicator />
          </View>
          : (pickedImage && !avatarUrl)
            ? <IconButton
              icon="check"
              mode="contained"
              rippleColor={colors.ripple}
              style={styles.buttonOffset}
              onPress={() => updateAvatar(pickedImage)}
            />
            : image
              ? <IconButton
                icon="delete"
                mode="contained"
                rippleColor={colors.ripple}
                style={styles.buttonOffset}
                onPress={() => setImage(null)}
              />
              : <IconButton
                icon="camera"
                mode="contained"
                rippleColor={colors.riple}
                style={styles.buttonOffset}
                onPress={pickImage}
              />
        }
      </View>

      <Portal>
        <Snackbar visible={visible}>
          { error
            ? `Error al actualizar la imagen: ${error.toString()}`
            : "Imagen actualizada exitosamente"
          }
        </Snackbar>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 3,
    overflow: "hidden",
  },

  text: {
    color: "white",
    padding: 10,
  },

  button: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  buttonOffset: {
    left: 6, 
    top: 6,
  },
});

export default AvatarPicker;