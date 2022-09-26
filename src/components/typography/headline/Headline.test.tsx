import { render } from '@testing-library/react';

import { Headline } from './Headline';
import { Props } from './Headline.interface';

describe('Test Headline', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			size: 'Medium',
		};
	});

	const renderComponent = () => render(<Headline {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('typography').length).toBe(1);
	});
});
