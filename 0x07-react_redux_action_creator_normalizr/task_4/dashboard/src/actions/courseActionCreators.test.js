import { unSelectCourseFunc, selectCourseFunc } from "./courseActionCreators";


describe('select and unselect action creator', () => {
    it('should create an acton to select a course with given index', () => {
        const index = 1;
        const expectedAction ={
            type: "SELECT_COURSE",
            index: 1,
        };
        const action = selectCourseFunc(index)
        expect(action).toEqual(expectedAction);

    });

    it('should create an acton to unselect a course with given index', () => {
        const index = 1;
        const expectedAction ={
            type: "UNSELECT_COURSE",
            index: 1,
        };
        const action = unSelectCourseFunc(index)
        expect(action).toEqual(expectedAction);

    });

});
