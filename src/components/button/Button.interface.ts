export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: 'primary' | 'danger';
	shape?: 'rounded';
}
