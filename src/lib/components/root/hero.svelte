<script>
    import * as Command from '$lib/components/ui/command/index';
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as InputGroup from '$lib/components/ui/input-group/index';
    import * as Popover from '$lib/components/ui/popover/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button from '../ui/button/button.svelte';
    import Input from '../ui/input/input.svelte';
    import { cn } from '$lib/utils';
    import { tick } from 'svelte';

    import { Building2 } from '@lucide/svelte';
    import { Search } from '@lucide/svelte';
    
    let {
        class: className,
        data,
        image = 'find_pro_cleaners.png',
        title = 'Find Professional Cleaners Near You',
        search = false,
        subtitle = '',
        onsearch
    } = $props();
    console.log()

    let bannerClasses = $state('');
    if (image.indexOf('/') > 0) {
        // bannerClasses = `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(/images/${image}); background-position: 0% 50%;`
        bannerClasses = 'background-position: 0% 50%;'
    }
    else if (image.indexOf('sheep') >= 0) {
        bannerClasses = 'background-position: 0% 65%;'
    }

    let open = $state(false);
    let selectedValue = $state('');
    let triggerRef = $state(null);
    
    const selectedObject = $derived((data?.regions || []).find(f => f.id === selectedValue) || {});
    const isSearchDisabled = $derived(!!selectedValue === false);

    const closeAndFocusTrigger = () => {
        open = false;
        tick().then(() => triggerRef.focus());
    };

    const searchRegion = () => {
        // console.log(`selectedCityObject = ${JSON.stringify(selectedCityObject)}`);
        if (isSearchDisabled === true) { return; }

        let url = `/professional-cleaners-in-${selectedObject.slug}`;
        // let url = `/professional-cleaners-in-${selectedCityObject.region.slug}/${selectedCityObject.slug}`;
        // console.log('new url', url);
        // alert(`selectedCityObject = ${JSON.stringify(selectedCityObject)}`);
        window.location = url;
    };
</script>

<!-- <div class="banner relative pt-12 pb-18 sm:pt-24 sm:pb-30" style="background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/{image}'); {bannerClasses}"> -->
<div class={cn(
        "banner relative pt-12 pb-18 sm:pt-24 sm:pb-30",
        className
    )} style="background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('/images/{image}'); {bannerClasses}"
>
    <div class="mx-6 sm:mx-auto sm:w-[85%] sm:max-w-6xl border-0 border-red-500">
        <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
            <h1 class="text-3xl font-normal md:text-5xl text-white leading-[2.25rem] sm:leading-[3.5rem]">{title}</h1>
            {#if subtitle}
                <p class="text-white text-md md:text-xl font-light tracking-[0.25px]">{subtitle}</p>
            {/if}
            {#if search === true}
            <div class="flex items-center gap-2">
                <Popover.Root bind:open>
                    <Popover.Trigger bind:ref={triggerRef}
                        class="w-[70%] md:w-[300px] justify-between text-md sm:text-sm font-light bg-white px-3 md:px-4 py-2 md:py-3 border-0 rounded-xs md:rounded-sm text-foreground outline-none cursor-pointer"
                    >
                        {#snippet child({ props })}
                            <div
                                class="flex text-xs md:text-sm items-center justify-between"
                                {...props}
                                role="combobox"
                                area-expanded={open}
                            >
                                {selectedObject.name || "Select your region"}
                                <!-- <Search size={16} class="absolute top-[14px] left-[12px] stroke-(text-foreground) stroke-2" /> -->
                            </div>
                        {/snippet}
                    </Popover.Trigger>
                    <Popover.Content align="start"
                        class="w-full md:w-[300px] justify-between text-md sm:text-sm font-light bg-white px-3 md:px-4 py-2 md:py-3 border-0 rounded-xs md:rounded-sm text-foreground outline-none cursor-pointer"
                    >
                        <Command.Root>
                            <Command.Input placeholder="Type your city here..." />
                            <Command.List>
                                {#each (data.regions || []) as region (region.id)}
                                    <Command.Item
                                        class="text-sm"
                                        selectedValue={region.id}
                                        onSelect={() => {
                                            selectedValue = region.id;
                                            closeAndFocusTrigger();
                                        }}
                                    >{region.name}</Command.Item>
                                {/each}
                            </Command.List>
                        </Command.Root>
                    </Popover.Content>
                </Popover.Root>
                <!-- <Select.Root type="single"> -->
                    <!-- <Select.Trigger class="w-[300px] text-sm font-light bg-white pl-4 pr-4 py-2.5 border-0 rounded-sm text-foreground outline-none"> -->
                        <!-- <div class="relative "> -->
                            <!-- <Search size={16} class="absolute top-[14px] left-[12px] stroke-(text-foreground) stroke-2" /> -->
                            <!-- <input type="text" class="w-[300px] text-sm font-light bg-white pl-9 pr-4 py-3 border-0 rounded-sm text-foreground outline-none" placeholder="Enter your city here..."> -->
                            <!-- <span>Enter your city</span> -->
                        <!-- </div> -->
                    <!-- </Select.Trigger> -->
                <!-- </Select.Root> -->
                <button type="button"
                    disabled={isSearchDisabled}
                    onmouseup={searchRegion}
                    class="bg-green-700 text-md text-white px-3 md:px-4 py-2 md:py-3 rounded-xs md:rounded-sm cursor-pointer hover:bg-green-800 hover:shadow-md duration-[100ms]"
                >Go!</button>
            </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .banner {
        /* background-image: url('/images/cleaners_banner_4.png'); */
        background-position: 0% 0%;
        background-size: cover;
    }
    .banner h1 {
        font-family: "Gabarito", sans-serif;
    }
</style>