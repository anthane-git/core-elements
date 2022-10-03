import { render } from '@testing-library/react';

import { Body } from './Body';
import { Props } from './Body.interface';

describe('Test Body', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'typography',
		};
	});

	const renderComponent = () => render(<Body {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('typography').length).toBe(1);
	});
});
