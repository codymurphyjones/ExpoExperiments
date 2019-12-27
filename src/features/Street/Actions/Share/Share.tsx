import { Share  } from 'react-native';

export async function onShare() {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }