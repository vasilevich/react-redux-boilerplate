import {load, save} from 'redux-localstorage-simple';
import {versionStamp} from 'data/utils/constants';

const focusedStates = ['navigation'];
const storageStartsWith = 'store';
const generateNameSpace = () => {
  return `${storageStartsWith}-${versionStamp}`;
};

const oldKeysCleaner = () => {
  const currentKey = generateNameSpace();
  Object.keys(localStorage)
    .filter(key => key.startsWith(`${storageStartsWith}-`))
    .filter(key => key !== currentKey)
    .forEach(key => {
      localStorage.removeItem(key);
    });
};

export const saveState = () => {
  return save({
    states: focusedStates,
    namespace: generateNameSpace(),
    debounce: 500
  });
};

export const loadState = (preloadedState: any = {}) => {
  oldKeysCleaner();
  return load({
    states: focusedStates,
    namespace: generateNameSpace(),
    disableWarnings: true,
    preloadedState
  });
};
