import {combineReducers} from "redux";
import changeSlideReducer from "./slide/slideReducer";
import changePhotoReducer from "./photo/photoReducers";
import wayToMoveReducer from "./way/wayReducer";
import moveToReducer from "./move/moveReducer";
import move3dReducer from "./move3d/move3dReducer";

const rootReducer = combineReducers({
   slide: changeSlideReducer,
   photos: changePhotoReducer,
   ways: wayToMoveReducer,
   move: moveToReducer,
   move3d: move3dReducer
});

export default rootReducer