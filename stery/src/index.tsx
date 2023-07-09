import Sound from 'react-native-sound';

export const music = new Sound('home.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else {
    music.play();
    music.setVolume(1);
    music.setPan(1);
    music.setNumberOfLoops(-1);
  }
});

export { default } from './navigation';
