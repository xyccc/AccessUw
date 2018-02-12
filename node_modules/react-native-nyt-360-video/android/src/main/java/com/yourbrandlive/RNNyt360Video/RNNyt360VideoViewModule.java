package com.yourbrandlive.RNNyt360Video;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by adam on 1/3/18.
 */

public class RNNyt360VideoViewModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "RNNyt360Video";

    public RNNyt360VideoViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }
}
