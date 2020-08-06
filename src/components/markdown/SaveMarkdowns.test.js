import React from 'react';
import { mount } from 'enzyme';
import SaveMarkdowns from './SaveMarkdowns';
import AppProvider from '../../providers/AppProvider';

describe('SaveMarkdowns component', () => {
  it('renders SaveMarkdowns', () => {
    const wrapper = mount(
      <AppProvider>
        <SaveMarkdowns/>
      </AppProvider> 
    );
    expect(wrapper).toMatchSnapshot();
  });
});
