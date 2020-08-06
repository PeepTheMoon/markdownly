import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

jest.mock('../../hooks/Context');

describe('Preview component', () => {
  it('renders preview', () => {
    const wrapper = shallow(<Preview />);
    expect(wrapper).toMatchSnapshot();
  });
});
