import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('it render without crashing', () => {
    const wrapper= shallow(<App/>);
    expect(wrapper.exists().toBe(true));
    
  });
  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(".App-header").toBe(1));
    
  });
  it('renders a div with the class  App-body', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(". App-body").toBe(1));
    
  });
  it('renders a div with the class  App-footer', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(".App-footer").toBe(1));
    
  });
  
});
