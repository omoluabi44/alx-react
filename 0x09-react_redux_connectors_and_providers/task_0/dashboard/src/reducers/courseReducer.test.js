import { Map, List } from "immutable";
import courseReducer from "./courseReducer";

describe('courseReducer tests', () => {
    it('should return initial state when no action passed', () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual(List());  // Ensure the initial state is an empty Immutable List
    });

    it('should return the data passed in FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: 'FETCH_COURSE_SUCCESS',
            data: [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 },
            ],
        };

        const expectedState = List([
            Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
            Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
            Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
        ]);

        const state = courseReducer(List(), action);
        expect(state.equals(expectedState)).toBe(true);  // Use .equals() for Immutable comparisons
    });

    it('should update the correct course when SELECT_COURSE is dispatched', () => {
        const initialState = List([
            Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
            Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),
            Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
        ]);

        const action = {
            type: 'SELECT_COURSE',
            index: 2,
        };

        const expectedState = List([
            Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
            Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),  // Updated course
            Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
        ]);

        const state = courseReducer(initialState, action);
        expect(state.equals(expectedState)).toBe(true);  // Use .equals() for Immutable comparisons
    });

    it('should update the correct course when UNSELECT_COURSE is dispatched', () => {
        const initialState = List([
            Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
            Map({ id: 2, name: 'Webpack', credit: 20, isSelected: true }),
            Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
        ]);

        const action = {
            type: 'UNSELECT_COURSE',
            index: 2,
        };

        const expectedState = List([
            Map({ id: 1, name: 'ES6', credit: 60, isSelected: false }),
            Map({ id: 2, name: 'Webpack', credit: 20, isSelected: false }),  // Updated course
            Map({ id: 3, name: 'React', credit: 40, isSelected: false }),
        ]);

        const state = courseReducer(initialState, action);
        expect(state.equals(expectedState)).toBe(true);  // Use .equals() for Immutable comparisons
    });
});
