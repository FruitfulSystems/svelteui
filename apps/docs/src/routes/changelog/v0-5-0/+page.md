---
title: 'Version 0.5.0'
order: 1
release: https://github.com/svelteuidev/svelteui/releases/tag/0.5.0
date: 'April 1st, 2022'
---

<script lang='ts'>
    import { Button, Loader, Code, Group } from '@svelteuidev/core';
    import { clickoutside, clipboard, cssvariable, focus } from '@svelteuidev/composables';
    import { flipboard, typewriter } from '@svelteuidev/motion';
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';

    const code = `
        const a = 5
        const b = 3

        console.log(a + b)
    `
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## New features and components 🎉

### _Components:_

[Button]({base}/core/button) component:

<Group>
    <Button>Click Me</Button>
    <Button variant='gradient' gradient={{from: 'green', to: 'orange', deg: 45}}>Click Me</Button>
    <Button variant='gradient' compact uppercase>Click Me</Button>
</Group>

[Code]({base}/core/code) component:

<Code override={{code: {color: 'black !important'}}} block copy message={code}>
{code}
</Code>

[Loader]({base}/core/loader) component:

<Group>
    <Loader color='green' size='lg' variant='bars' />
    <Loader color='pink' size='lg' />
    <Loader size='lg' variant='dots' />
</Group>

### _Actions:_

[use-click-outside]({base}/actions/use-click-outside) Triggers a callback when a user clicks outside of a given element

[use-clipboard]({base}/actions/use-clipboard) Copies text to the clipboard when dom element is clicked

[use-css-variable]({base}/actions/use-css-variable) Whenever some of their values change, update css properties on the fly

[use-focus]({base}/actions/use-focus) Calls focus on a node once mounted into the dom

### _Utilities:_

[use-os]({base}/utilities/os) util that gets user os

### _Motion:_

[typewriter]({base}/motion/typewriter) Type writer transition effect for text

[flipboard]({base}/motion/flipboard) Flipboard transition effect for text

## API changes

- Custom components are now supported by the override prop
- Dropped the `use` naming convention on utility functions for less confusion
- Added `<SvelteuiWrapper>` for ssr and theme control

## Bug fixes and improvements

### _Packages:_

- Significant performance improvements with migration from emotion

> Do not download the Prism package yet. It is currently unstable.

### _Docs:_

- Github Icon replaced with [radix-icons-svelte](https://www.npmjs.com/package/radix-icons-svelte)
- All pages now show proper titles
- Removed loaders due to ssr rendering being enabled

