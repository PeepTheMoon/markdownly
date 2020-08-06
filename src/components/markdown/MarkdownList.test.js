import React from 'react';
import { mount } from 'enzyme';
import MarkdownList from './MarkdownList';
import AppProvider from '../../providers/AppProvider';

describe('MarkdownList component', () => {
  it('renders MarkdownList', () => {
    const wrapper = mount(
      <AppProvider>
        <MarkdownList />
      </AppProvider> 
    );
    expect(wrapper).toMatchSnapshot();
  });
});
