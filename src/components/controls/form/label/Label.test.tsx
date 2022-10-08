import { render } from '@testing-library/react';

import { Label } from './Label';
import { Props } from './Label.interface';

describe('Test Label', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'label',
			htmlFor: 'form',
		};
	});

	const renderComponent = () => render(<Label {...props} />);

	it('should have label className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('label').length).toBe(1);
	});
});
