import courseReducer from "./courseReducer";

describe('courseReducer tests', () => {
    it('should return initial state when no action passed ', () => {
        const state = courseReducer(undefined,{})
        expect(state).toEqual([]);
        
    });
    it('should return the data passed in Fetched', () => {
        const action ={
            type: 'FETCH_COURSE_SUCCESS',
            data: [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 },
            ],
        }
    const expectState = [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        { id: 3, name: 'React', credit: 40, isSelected: false },
    ]
    const state = courseReducer([],action)
        expect(expectState).toEqual(state)
        });
    
    
    it('should update the correct course when SELECT_COURSE is dispatched', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            { id: 3, name: 'React', credit: 40, isSelected: false },
        ]
        const action = {
            type:'SELECT_COURSE',
            index:2
        }
        const expectedState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true }, // Updated course
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ]
        const state = courseReducer(initialState, action)

        expect(state).toEqual(expectedState)
    });
       
    it('should update the correct course when UNSELECT_COURSE is dispatched', () => {
        const initialState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            { id: 3, name: 'React', credit: 40, isSelected: false },
        ]
        const action = {
            type:'UNSELECT_COURSE',
            index:2
        }
        const expectedState = [
            { id: 1, name: 'ES6', credit: 60, isSelected: false },
            { id: 2, name: 'Webpack', credit: 20, isSelected: false }, // Updated course
            { id: 3, name: 'React', credit: 40, isSelected: false }
        ]
        const state = courseReducer(initialState, action)

        expect(state).toEqual(expectedState)
    });
});
