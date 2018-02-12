//
//  RNnyt360VideoPlayerViewController.h
//  RNnyt360Video
//
//  Adapted from RCTVideo by Stanisław Chmiela on 31.03.2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <AVKit/AVKit.h>
#import "RNnyt360Video.h"
#import "RNnyt360VideoPlayerViewControllerDelegate.h"

@interface RNnyt360VideoPlayerViewController : AVPlayerViewController
@property (nonatomic, weak) id<RNnyt360VideoPlayerViewControllerDelegate> rctDelegate;
@end
