import { selectCourse,unSelectCourse } from "./courseActionTypes";

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
