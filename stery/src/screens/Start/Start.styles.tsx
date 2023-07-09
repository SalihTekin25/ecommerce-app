import { StartStyleProps } from '../../interfaces/screens/start.interface';

const styleS = (): StartStyleProps => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2F2F2F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: '90%',
    height: '95%',
    overflow: 'hidden',
    borderRadius: 8,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subFrame: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2F2F2F',
    overflow: 'hidden',
    borderRadius: 6,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  startLabel: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Dosis-SemiBold',
    fontWeight: '600',
  },
  linear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export default styleS;
