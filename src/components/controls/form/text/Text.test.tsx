import { render } from '@testing-library/react';

import { Text } from './Text';
import { Props } from './Text.interface';

describe('Test Text', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'text',
			children: 'children here',
		};
	});

	const renderComponent = () => render(<Text {...props} />);

	it('should have text className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('text').length).toBe(1);
	});
});
