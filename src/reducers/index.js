// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import ExpireTimeReducer from './expire-time-reducer';
import ArtistReducer from './artists';
import AlbumReducer from './albums';

const rootReducer = combineReducers({
  expireTime: ExpireTimeReducer,
  artist: ArtistReducer,
  album: AlbumReducer,
});

export default rootReducer;
