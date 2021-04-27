import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { AppRoute } from './route';
import { HomePage, AboutPage, Error404Page } from './pages';

describe('Route', () => {
  test('should render home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(Error404Page)).toHaveLength(0);
  });

  test('should render about page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(AboutPage)).toHaveLength(1);
    expect(wrapper.find(Error404Page)).toHaveLength(0);
  });

  test('should render 404 page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random-page']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(Error404Page)).toHaveLength(1);
  });
});
