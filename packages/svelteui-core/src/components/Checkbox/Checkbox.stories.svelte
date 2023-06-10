<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme } from '$lib/styles';
	import { Checkbox, CheckboxGroup } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
	const items = [
        { label: 'Svelte', value: 'svelte' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Solid', value: 'solid' }
    ];
</script>

<Meta title="Components/Checkbox" component={Checkbox} />

<Template id="Checkbox" let:args>
	<Checkbox {...args} />
</Template>

<Template id="CheckboxGroup" let:args>
    <CheckboxGroup {...args} />
</Template>

<Story name="Checkbox" id="checkboxStory" template="Checkbox"/>

<Story name="Colors" id="checkboxColorsStory">
	<div style="display: flex; gap: 10px;">
		{#each colors as color}
			<Checkbox checked {color} />
		{/each}
	</div>
</Story>

<Story name="Single Selection" id="checkboxSingleSelectStory" template="CheckboxGroup" />

<Story name="Disabled" id="checkboxDisabledStory" args={{ disabled: true }} template="Checkbox"/>
