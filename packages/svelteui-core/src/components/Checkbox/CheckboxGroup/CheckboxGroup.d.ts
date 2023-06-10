import { CSS, DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import { GroupProps } from '../../Group';

export interface CheckboxGroupProps extends GroupProps {
	items?: { label: string; value: string }[];
	value?: string[];
	singleSelection?: boolean;
	label?: string;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	wrapperProps?: Record<string, any>;
}

export interface CheckboxGroupEvents {
	change: CustomEvent<string[]>;
	[evt: string]: CustomEvent<any>;
}
