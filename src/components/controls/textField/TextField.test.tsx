import { render } from '@testing-library/react';

import { TextField } from './TextField';
import { Props } from './TextField.interface';

describe('Test TextField', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			className: 'textField',
			label: 'input',
			type: 'text',
			id: 'input-01',
		};
	});

	const renderComponent = () => render(<TextField {...props} />);

	it('should have button className', () => {
		const { container } = renderComponent();

		expect(container.getElementsByClassName('textField').length).toBe(1);
	});
});
