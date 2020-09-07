import {combineReducers} from "redux";
import changeSlideReducer from "./slide/slideReducer";
import changePhotoReducer from "./photo/photoReducers";
import wayToMoveReducer from "./way/wayReducer";
import moveToReducer from "./move/moveReducer";
import move3dReducer from "./move3d/move3dReducer";
import lightSetReducer from "./light/lightReducer";
import scaleSetReducer from "./scale/scaleReducer";
import loadReducer from "./loading/loadingReducer";
import loadPhotoReducer from "./loadPhoto/loadPhotosReducer";

const rootReducer = combineReducers({
   slide: changeSlideReducer,
   photos: changePhotoReducer,
   ways: wayToMoveReducer,
   move: moveToReducer,
   move3d: move3dReducer,
   light: lightSetReducer,
   scale: scaleSetReducer,
   load: loadReducer,
   loadingPhoto: loadPhotoReducer
});

export default rootReducer