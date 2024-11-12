import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders correctly with an h2 and children', () => {
    // Render the component with test props
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check for the h2 element and its text content
    const h2Element = wrapper.find('h2');
    expect(h2Element).toHaveLength(1);
    expect(h2Element.text()).toBe('test title');

    // Check for the p element and its text content
    const pElement = wrapper.find('p');
    expect(pElement).toHaveLength(1);
    expect(pElement.text()).toBe('test children node');
  });
});
