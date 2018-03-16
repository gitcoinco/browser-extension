import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import BountyItem from '../components/BountyItem';

const mockItem = {
  imgsrc: 'src="https://avatars1.githubusercontent.com/u/30044474?v=4',
  timeDiff: '1 month ago',
  tokenAmount: '0.06 ETH',
  title: 'Increase Code Coverage by 5%',
  state: 'open',
  linkUrl: 'href="https://github.com/gitcoinco/web/issues/408'
};

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<BountyItem item={mockItem}/> , tbody);
  ReactDOM.unmountComponentAtNode(tbody);
});

it('render correctly', () => {
  const component = renderer.create(
    <table>
      <tbody>
        <BountyItem item={mockItem} />
      </tbody>
    </table>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
