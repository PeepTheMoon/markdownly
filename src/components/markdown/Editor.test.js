import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';

jest.mock('../../hooks/Context');

describe('Editor component', () => {
  it('renders editor', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper).toMatchSnapshot();
  });
});
