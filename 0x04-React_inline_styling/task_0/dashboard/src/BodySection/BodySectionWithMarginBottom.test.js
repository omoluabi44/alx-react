import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders a BodySection component with correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Find the BodySection component within BodySectionWithMarginBottom
    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);

    // Check if the props are passed correctly
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.contains(<p>test children node</p>)).toBe(true);
  });
});
