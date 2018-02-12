package com.yourbrandlive.RNNyt360Video;

import android.app.Activity;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.yourbrandlive.RNNyt360Video.RNNyt360VideoViewModule;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by root on 23/3/17.
 */

public class RNNyt360VideoViewPackage implements ReactPackage {

    public RNNyt360VideoViewPackage() {
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new RNNyt360VideoViewModule(reactContext)
        );
    }

    // NOTE: DEPRECATED
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
              new RNNyt360VideoViewManager(reactContext)
        );
    }

}
