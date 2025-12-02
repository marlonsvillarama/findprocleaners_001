<script>
    import * as Command from '$lib/components/ui/command/index';
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as InputGroup from '$lib/components/ui/input-group/index';
    import * as Popover from '$lib/components/ui/popover/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button from '../ui/button/button.svelte';
    import Input from '../ui/input/input.svelte';
    import { tick } from 'svelte';

    import { Building2 } from '@lucide/svelte';
    import { Search } from '@lucide/svelte';
    
    let {
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
        bannerClasses = `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(/images/${image}); background-position: 0% 50%;`
    }

    let open = $state(false);
    let selectedCity = $state('');
    let triggerRef = $state(null);
    
    const selectedCityObject = $derived((data.cities || []).find(f => f.id === selectedCity) || {});
    const isSearchDisabled = $derived(!!selectedCity === false);

    const closeAndFocusTrigger = () => {
        open = false;
        tick().then(() => triggerRef.focus());
    };

    const searchCity = () => {
        // console.log(`selectedCityObject = ${JSON.stringify(selectedCityObject)}`);
        if (isSearchDisabled === true) { return; }

        let url = `/professional-cleaners-in-${selectedCityObject.region.slug}/${selectedCityObject.slug}`;
        // console.log('new url', url);
        // alert(`selectedCityObject = ${JSON.stringify(selectedCityObject)}`);
        window.location = url;
    };
</script>

<div class="banner relative pt-12 md:pt-24 md:pb-24" style="background-image: url('/images/{image}'); {bannerClasses}">
    <div class="pb-12 md:pb-24 mx-6 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
        <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
            <h1 class="text-2xl font-medium md:text-5xl text-white leading-[2rem] md:leading-[4rem]">{title}</h1>
            {#if subtitle}
                <p class="text-white text-sm md:text-xl font-light tracking-[0.25px]">Discover the best professional cleaning services in your city.</p>
            {/if}
            {#if search === true}
            <div class="flex items-center gap-2">
                <Popover.Root bind:open>
                    <Popover.Trigger bind:ref={triggerRef}
                        class="w-[70%] md:w-[300px] justify-between text-sm font-light bg-white px-2 md:px-4 py-1.5 md:py-3 border-0 rounded-xs md:rounded-sm text-foreground outline-none cursor-pointer"
                    >
                        {#snippet child({ props })}
                            <div
                                class="flex text-xs md:text-sm items-center justify-between"
                                {...props}
                                role="combobox"
                                area-expanded={open}
                            >
                                {selectedCityObject.name || "Select your city..."}
                                <!-- <Search size={16} class="absolute top-[14px] left-[12px] stroke-(text-foreground) stroke-2" /> -->
                            </div>
                        {/snippet}
                    </Popover.Trigger>
                    <Popover.Content align="start"
                        class="w-full md:w-[300px] justify-between text-sm font-light bg-white px-2 md:px-4 py-1.5 md:py-3 border-0 rounded-xs md:rounded-sm text-foreground outline-none cursor-pointer"
                    >
                        <Command.Root>
                            <Command.Input placeholder="Type your city here..." />
                            <Command.List>
                                {#each (data.cities || []) as city (city.id)}
                                    <Command.Item
                                        class="text-xs md:text-sm"
                                        selectedCity={city.id}
                                        onSelect={() => {
                                            selectedCity = city.id;
                                            closeAndFocusTrigger();
                                        }}
                                    >{city.name}</Command.Item>
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
                    onmouseup={searchCity}
                    class="bg-green-700 text-sm text-white px-2 md:px-4 py-1.5 md:py-3 rounded-xs md:rounded-sm cursor-pointer hover:bg-green-800 hover:shadow-md duration-[100ms]"
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
        font-family: "Noto Serif", serif;
    }
</style>