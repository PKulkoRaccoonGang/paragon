import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../../Button';
import CardFooter from '../CardFooter';
import CardContext from '../CardContext';

const footerText = 'Sample footer text';
const actions = (
  <>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </>
);

// eslint-disable-next-line react/prop-types
const CardFooterWrapper = ({ orientation = 'vertical', isLoading, ...props }) => (
  <CardContext.Provider value={{ orientation, isLoading }}>
    <CardFooter {...props}>
      {actions}
    </CardFooter>
  </CardContext.Provider>
);

describe('<CardFooter />', () => {
  it('renders vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper textElement={footerText} isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders footer text as element', () => {
    const textElement = <a href="https://example.com">Link text here</a>;
    const wrapper = mount(<CardFooterWrapper textElement={textElement} />);
    const link = wrapper.find('a');
    expect(wrapper.find('button').length).toEqual(2);
    expect(link.exists()).toEqual(true);
    expect(link.prop('children')).toEqual('Link text here');
    expect(link.prop('href')).toEqual('https://example.com');
  });
  it('render without loading state', () => {
    const wrapper = mount(<CardFooterWrapper />);
    expect(wrapper.exists('.pgn__card-footer-loader')).toBe(false);
    expect(wrapper.props().isLoading).toBeUndefined();
  });
  it('render with loading state', () => {
    const wrapper = mount(<CardFooterWrapper isLoading />);
    expect(wrapper.exists('.pgn__card-footer-loader')).toBe(true);
    expect(wrapper.props().isLoading).toBe(true);
  });
});
