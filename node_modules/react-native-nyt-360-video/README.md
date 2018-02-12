# react-native-nyt-360-video

This package a port of the popular react-native-video package tweaked to work with 360° videos using the NYT360Video package for iOS. This was done to keep the props the same as react-native-video so that both packages can be used within the same component using the same state variables and props.

The Android component was added after to make the package cross platform, but does not use any NYT package, it uses Google VR. For consistency, the Android version uses NYT in the name, but does not actually depend on it. Because it uses a different native package, it has some different props. (If you'd like to help rectify props for both packages, feel free to contribute.) The Android package was derived from the VrVideoComponent by prem-codemymobile (many thanks.)

VR capabilities are only available on the Android side, with the iOS side being strictly for mono 360 spherical, not VR stereo videos. 

Installation
------------

    react-native install react-native-nyt-360-video


Usage (iOS)
-----

    import Nyt360Video from 'react-native-nyt-360-video';

	-------
	render(){
	    return (
	        <Nyt360Video source={{uri: 'https://video-site.com/my-360-video-url.mp4'}}
	        	ref={(ref) => {
	        		this.player = ref
	        	}}
	        	rate={1.0}
	        	volume={1.0}
	        	muted={muted}
	        	paused={!this.state.playing}
	        	repeat={false}
	        	playInBackground={false}
	        	playWhenInactive={false}
	        	progressUpdateInterval={250.0}
	        	onLoadStart={this.loadStart.bind(this)}            
	        	onLoad={this.setDuration.bind(this)}               
	        	onProgress={this.onProgress.bind(this)}               
	        	onEnd={this.onEnd.bind(this)}                      
	        	onError={this.videoError.bind(this)}               
	        	onBuffer={this.onBuffer.bind(this)}                
	        	onTimedMetadata={this.onTimedMetadata.bind(this)}  
	        	style={{}} />
	        )
        }

Usage (Android)
---------------

    <Nyt360Video
		ref={ref => this.player = ref}
		style={{flex: 1, backgroundColor:'#000000'}}
		source={{ uri:'https://video-site.com/my-360-video-url.mp4',
			type: 'mono'}}
		displayMode={'embedded'}
		volume={1.0}
		paused={!this.state.playing}
		onLoad={(e) => console.log(e)}
		onError={(e) => console.log(e)}
		onEnd={(e) => console.log(e)}
		onProgress={(e) => console.log(e)}
		onPress={(e) => console.log(e)}
		enableFullscreenButton={false}
		enableCardboardButton={false}
		enableTouchTracking={false}
		hidesTransitionView={false}
		enableInfoButton={false} />

Known limitations
-----------------

 - Older devices have trouble handling rotation when video width is
   greater than 1920 and occasionally crash
 - Using this in tandem with react-native-camera or other packages that use the gryoscope/accelerometer while the video is playing can occasionally cause a crash (if both packages are trying to read the position of the device at the same time it can cause failure)
 - 360 videos can appear to have a warped effect around the edges of the view, and this can be solved by increasing the transform scale of the video player itself when the video is in landscape mode (to say, `transform: [{scale: this.state.landscape ? 1.2 : 1}]`)
 - While on iOS handling rotation is simple, on Android rotating from a portrait view to a landscape view will cause the video to appear sideways to the user. A workaround for this is to call `this.player.rotate()` on orientation events, which blinks the player out for a frame and recreates it to force re-render.

