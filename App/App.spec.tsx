import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

describe("App", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
  
    it("should render a <View />", () => {
      expect(wrapper).toContain(View)
    })
  })
})