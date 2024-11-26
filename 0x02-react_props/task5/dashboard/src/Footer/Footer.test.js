import React from 'react';
import { shallow } from 'enzyme'; // Import shallow for shallow rendering
import Footer from './Footer'; // Adjust the path based on your project structure

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    // Shallow render the Footer component before each test
    wrapper = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    // Check that the component renders without throwing an error
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    // Check that the component contains the text "Copyright"
    expect(wrapper.text()).toContain('Copyright');
  });
});
