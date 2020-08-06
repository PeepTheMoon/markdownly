import React from 'react';
import { shallow } from 'enzyme';
import MarkdownList from './MarkdownList';

jest.mock('../../hooks/Context');

describe('MarkdownList component', () => {
  it('renders MarkdownList', () => {
    const wrapper = shallow(<MarkdownList />);
    expect(wrapper).toMatchSnapshot();
  });
});
