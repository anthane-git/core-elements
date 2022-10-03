import { render } from '@testing-library/react';

import { Display } from './Display';
import { Props } from './Display.interface';

describe('Test Display', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'typography',
			size: 'Medium',
		};
	});

	const renderComponent = () => render(<Display {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('typography').length).toBe(1);
	});
});
