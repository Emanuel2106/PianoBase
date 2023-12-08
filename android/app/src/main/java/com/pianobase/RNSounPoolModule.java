package com.pianobase;
import android.content.Context;
import android.content.res.Resources;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.SoundPool;
import android.os.Build;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;

import java.io.IOException;
import java.util.Map;
import java.util.HashMap;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RNSounPoolModule extends ReactContextBaseJavaModule {
    private SoundPool soundPool;
    private ReactApplicationContext context;
    private int sound = 0;

    RNSounPoolModule(ReactApplicationContext context) {
        super(context);

        this.context = context;

        AudioAttributes audioAttributes = new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_ASSISTANCE_SONIFICATION)
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .build();

        soundPool = new SoundPool.Builder()
                .setMaxStreams(6)
                .setAudioAttributes(audioAttributes)
                .build();


    }


    @NonNull
    @Override
    public String getName() {
        return "RNSoundPoolModule";
    }

    @ReactMethod
    public void prepareSound() {
        AudioAttributes audioAttributes = new AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_ASSISTANCE_SONIFICATION)
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .build();

        soundPool = new SoundPool.Builder()
                .setMaxStreams(6)
                .setAudioAttributes(audioAttributes)
                .build();
    }

    @ReactMethod
    public void loadSounds(Promise promise) {
        try {
            if(soundPool == null) {
                prepareSound();
            }

            List<Integer> tonesList = new ArrayList<Integer>();

            // OCTAVA 1
            tonesList.add(soundPool.load(this.context, R.raw.c1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b1, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb1, 1));

            // OCTAVA 2
            tonesList.add(soundPool.load(this.context, R.raw.c2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b2, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb2, 1));

            // OCTAVA 3
            tonesList.add(soundPool.load(this.context, R.raw.c3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b3, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb3, 1));

            // OCTAVA 4
            tonesList.add(soundPool.load(this.context, R.raw.c4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b4, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb4, 1));

            // OCTAVA 5
            tonesList.add(soundPool.load(this.context, R.raw.c5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b5, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb5, 1));

            // OCTAVA 6
            tonesList.add(soundPool.load(this.context, R.raw.c6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b6, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb6, 1));

            // OCTAVA 7
            tonesList.add(soundPool.load(this.context, R.raw.c7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.d7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.db7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.e7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.eb7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.f7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.g7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.gb7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.a7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.ab7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.b7, 1));
            tonesList.add(soundPool.load(this.context, R.raw.bb7, 1));

            WritableArray tones = new WritableNativeArray();

            for(Integer tone : tonesList) {
                tones.pushString(tone.toString());
            }

            promise.resolve(tones);
        } catch (Exception e) {
            promise.reject("Failed to load the tones", e);
        }
    }

    @ReactMethod
    public void playSound(String soundId) {
        soundPool.play(Integer.parseInt(soundId), 1, 1, 0, 0, 1);
    }

    @ReactMethod
    public void releaseSound() {
        soundPool.release();
        soundPool = null;
    }
}
