import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    // Test when isHeader is true and textSecondCell does not exist
    it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course Name" />);
        const thElement = wrapper.find('th');
        expect(thElement).toHaveLength(1); // Should render one th element
        expect(thElement.prop('colSpan')).toBe('2'); // Should have colSpan of 2
        expect(thElement.text()).toBe('Course Name'); // Should contain the correct text
    });

    // Test when isHeader is true and textSecondCell is present
    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Duration" />);
        const thElements = wrapper.find('th');
        expect(thElements).toHaveLength(2); // Should render two th elements
        expect(thElements.at(0).text()).toBe('Course Name'); // First th element text
        expect(thElements.at(1).text()).toBe('Duration'); // Second th element text
    });

    // Test when isHeader is false
    it('renders correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Course Name" textSecondCell="Duration" />);
        const tdElements = wrapper.find('td');
        expect(tdElements).toHaveLength(2); // Should render two td elements
        expect(tdElements.at(0).text()).toBe('Course Name'); // First td element text
        expect(tdElements.at(1).text()).toBe('Duration'); // Second td element text
    });
});
