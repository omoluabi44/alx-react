import { SELECT_COURSE,UNSELECT_COURSE,FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";



import {Map, List} from "immutable"
import { coursesNormalizer } from "../schema/courses";

export const initialState = List();
export default function courseReducer(state=initialState, action ){
    switch(action.type){
        case FETCH_COURSE_SUCCESS:{
            const normalizedData = coursesNormalizer(action.data);
            const newCourse =  List(
                Object.values(normalizedData.entities.courses).map(course =>
                    Map({
                        ...course, 
                        isSelected:false
                    })
                )
            )
            return state.concat(newCourse)
        }
        case SELECT_COURSE:{
           const index = state.findIndex(course=> course.get("id")===action.index)
           if (index === -1) return state
           return state.setIn([index, "isSelected"], true);
        }
        case UNSELECT_COURSE:
            {
            const index = state.findIndex(course=> course.get("id")===action.index)
            if (index === -1) return state
            return state.setIn([index, "isSelected"], false);
            }
        default:
            return state;
    }
}