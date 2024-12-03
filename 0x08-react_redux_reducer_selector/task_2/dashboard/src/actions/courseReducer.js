import { SELECT_COURSE,UNSELECT_COURSE,FETCH_COURSE_SUCCESS } from "./courseActionTypes";

export const initialState = [];
export default function courseReducer(state=initialState, action ){
    switch(action.type){
        case FETCH_COURSE_SUCCESS:
            return action.data.map((courses)=>({
                ...courses,
                isSelected:false,
            }))
        case SELECT_COURSE:
            return state.map((courses)=>{
                if (courses.id ===action.index)
                {return{...courses,isSelected:true,}}
            return courses;
            })
        case UNSELECT_COURSE:
            return state.map((courses)=>{
                if (courses.id ===action.index)
                    {return{...courses,isSelected:false,}}
                return courses;
            })
        default:
            return state;
    }
}