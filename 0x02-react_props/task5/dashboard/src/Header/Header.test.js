import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('<Header />', () => {
    it('it render without crashing', () => {
      const wrapper= shallow(<Header/>);
      expect(wrapper.exists().toBe(true));
      
    });
    it('check for Img and H1 ', () => {
        const wrapper= shallow(<Header/>);
        expect(wrapper.find('img').exists()).toBe(true);
        
      });
      it('check for Img and H1 ', () => {
        const wrapper= shallow(<Header/>);
        expect(wrapper.find('h1').exists()).toBe(true);
        
      });
})