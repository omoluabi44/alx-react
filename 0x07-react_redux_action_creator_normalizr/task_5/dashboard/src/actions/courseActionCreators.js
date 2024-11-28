import { selectCourse,unSelectCourse } from "./courseActionTypes";
import { bindActionCreators } from 'redux';

export const selectCourseFunc =(index)=>{
    return{
        ...selectCourse,
       index
    }

}

export const unSelectCourseFunc =(index)=>{
    return{
        ...unSelectCourse,
        index
    }

}
