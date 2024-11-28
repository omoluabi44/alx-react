import { selectCourse,unSelectCourse } from "./courseActionTypes";
import { bindActionCreators } from 'redux';

export const selectCourseFunc =(index)=>{
    return{
        ...selectCourse,
       index
    }

}
export const boundSelectCourse = (index) => dispatch(selectCourseFunc(index));

export const unSelectCourseFunc =(index)=>{
    return{
        ...unSelectCourse,
        index
    }

}
export const boundUnSelectCourse = (index) => dispatch(unSelectCourseFunc(index));