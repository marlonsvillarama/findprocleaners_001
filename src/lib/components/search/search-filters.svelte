<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Field from '$lib/components/ui/field/index';
    import { Popover } from 'bits-ui';
    // import * as Popover from '$lib/components/ui/popover/index';
    import * as RadioGroup from '$lib/components/ui/radio-group/index';
    import * as Select from '$lib/components/ui/select/index';
    import { IconShieldCheckered } from '@tabler/icons-svelte';
    import Button, { buttonVariants } from '../ui/button/button.svelte';
    import Checkbox from '../ui/checkbox/checkbox.svelte';
    import Label from '../ui/label/label.svelte';
    import Separator from '../ui/separator/separator.svelte';

    import {
        Building2,
        Search,
        X
    } from '@lucide/svelte';

    // import { createPaginatorData } from '$lib/data/paginator.svelte';
    let { data } = $props();
    // let paginator = createPaginatorData();
    console.log('filters data', data);

    // import citiesList from '$lib/data/cities';
    // let cities = citiesList.map(c => {
    //     return {
    //         ...c,
    //         value: c.name.toLowerCase()
    //     };
    // });
    // console.log(`cities = ${data.allCities?.length}`, data.allCities || []);

    const serviceTypes = [
        { id: 'boat', text: 'Boat Cleaning' },
        { id: 'car wash', text: 'Car Wash' },
        { id: 'carpet', text: 'Carpet' },
        { id: 'establishment', text: 'Commercial' },
        { id: 'house', text: 'House' },
        { id: 'pressure', text: 'Pressure Wash' },
        { id: 'upholstery', text: 'Upholstery' },
        { id: 'window', text: 'Windows' },
    ];

    const COLUMN_COUNT = 3;
    let groups = [];
    let perColumn = Math.ceil(data.cities.length / COLUMN_COUNT);

    let col = 0;
    let start = 0;
    do {
        groups.push(data.cities.slice((col * perColumn), (col * perColumn) + perColumn));
        col++;
    } while (col < COLUMN_COUNT);

    let isFiltersOpen = $state(false);

    let selectedCity = $state('');
    // $effect(() => console.log('selectedCity', selectedCity))
    const cityTrigger = $derived(data.cities.find((c) => c.id === selectedCity)?.name ?? '--');

    const searchCity = () => {
        if (!selectedCity) { return; }

        let city = data.cities.find((c) => c.id === selectedCity);
        // console.log(`selectedCity = ${selectedCity}`, city);
        window.location = `/search/${city.name.toLowerCase().replaceAll(' ', '+')}`;
    };

    let selectedSort = $state(`${data.sort || ''}|${data.order}`);
    let selectedTypes = $state(data?.types?.length > 0 ? data.types : []);

    const applyFilters = () => {
        // console.log('*** applyFilters');
        // paginator.printFilters();
        // console.log('*** gotoPage url ***', paginator.applyFiltersToUrl());
        // window.location = paginator.applyFiltersToUrl();

        let sortParts = selectedSort.split('|');
        let url = `/search/${data.slug}?page=${data.page}&sort=${sortParts[0]}`;

        if (sortParts.length > 1) {
            url = `${url}&order=${sortParts[1]}`
        }

        if (selectedTypes.length > 0) {
            url = `${url}&types=${selectedTypes.join(',')}`
        }

        // console.log('applyFilters url', url);
        window.location = url;
    };

    const isServiceTypeChecked = (type) => {
        return data.types.indexOf(type) >= 0;
    };

    /* const getSort = () => {
        console.log(`*** getSort BEFORE`, paginator.sort);
        return `${paginator.sort}|${paginator.order}`;
    }; */

    /* const updateSort = (id) => {
        // console.log(`*** updateSort BEFORE id = ${id}`, paginator.sort);
        let parts = id.split('|');
        paginator.sort = parts[0];
        paginator.order = parts[1];

        console.log(`*** updateSort AFTER id = ${id}`, paginator.sort);
        // console.log(`selectedTypes AFTER id = ${id}; toggle = ${toggle}`, paginator.types);
    }; */

    const updateServiceTypes = (id, toggle) => {
        // console.log(`selectedTypes BEFORE id = ${id}; toggle = ${toggle}`, selectedTypes);
        // console.log(`*** updateServiceTypes selectedTypes BEFORE id = ${id}; toggle = ${toggle}`, paginator.types);
        if (toggle) {
            if (selectedTypes.indexOf(id) < 0) {
                // console.log(`pushing into array (toggle = ${toggle}): ${id}...`)
                selectedTypes.push(id);
            }
            // if (paginator.types.indexOf(id) < 0) {
            //     console.log(`pushing into array (toggle = ${toggle}): ${id}...`)
            //     paginator.types.push(id);
            // }
        }
        else {
            if (selectedTypes.indexOf(id) >= 0) {
                // console.log(`removing from array (toggle = ${toggle}): ${id}...`)
                selectedTypes = selectedTypes.filter(d => d !== id);
            }
            // if (paginator.types.indexOf(id) >= 0) {
            //     console.log(`removing from array (toggle = ${toggle}): ${id}...`)
            //     paginator.types = paginator.types.filter(d => d !== id);
            // }
        }

        // console.log(`selectedTypes AFTER id = ${id}; toggle = ${toggle}`, selectedTypes);
        // console.log(`selectedTypes AFTER id = ${id}; toggle = ${toggle}`, paginator.types);
    };
</script>

<div class="gap-1 md:w-[250px]">
    <h1 class="hidden md:block text-green-800 text-lg font-light mb-1">Search Filters</h1>

    <Field.Set>
        <Field.Group class="gap-4">
            <Field.Field>
                <div class="hidden md:block">
                    <Dialog.Root>
                        <Dialog.Trigger class="w-full">
                            <div class="flex justify-center items-center gap-3 py-2 md:py-3 border-b-2 border-green-700 w-full bg-white rounded-sm text-sm text-green-700 cursor-pointer
                                hover:shadow-lg">
                                <Building2 size={20} />
                                <span class="text-xs">Select your city</span>
                            </div>
                        </Dialog.Trigger>

                        <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto" side="right">
                            <div class="flex gap-4 items-center justify-center">
                                <Building2 size={20} />
                                <!-- <h1 class="text-xl text-left text-green-700 font-bold">Select your city</h1> -->
                                <h1 class="text-md text-left text-green-700 font-medium">Select your city</h1>
                            </div>
                            <div class="city-grid items-start px-4 mx-4 mt-4 mb-8">
                                <!-- {#each groups as group}
                                    <div class="grid gap-2"> -->
                                        <!-- {#each group as city} -->
                                {#each data.cities as city}
                                    <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self"
                                        class="hover:bg-green-700/5 mb-2"
                                    >
                                        <div class="text-sm text-gray-600 font-light hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                                            hover:border-green-700
                                        ">{city.name}</div>
                                    </a>
                                {/each}
                                    <!-- </div>
                                {/each} -->
                            </div>
                            <!-- <div class="grid grid-cols-3 items-start px-4">
                                {#each groups as group}
                                    <div class="grid gap-2">
                                        {#each group as city}
                                            <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self"
                                                class="hover:bg-green-700/5"
                                            >
                                                <h2 class="text-gray-600 hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                                                    hover:border-green-700
                                                ">{city.name}</h2>
                                            </a>
                                        {/each}
                                    </div>
                                {/each}
                            </div> -->
                        </Dialog.Content>
                    </Dialog.Root>
                </div>

                <div class="md:hidden flex items-center justify-between gap-4">
                    <Select.Root type="single" bind:value={selectedCity} onValueChange={searchCity}>
                        <Select.Trigger class="w-full flex justify-center items-center gap-3 py-2 md:py-3 border-b-2 border-green-700 w-full bg-white rounded-sm text-xs md:text-sm text-green-700 cursor-pointer
                                hover:shadow-lg">
                            <Building2 size={20} />
                            <span>Select your city</span>
                        </Select.Trigger>
                        <Select.Content>
                            <div class="max-h-[400px] overflow-scroll">
                            {#each data.cities as city}
                                <Select.Item value={city.id}>
                                    <div class="text-xs text-gray-600 font-light hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                                        hover:border-green-700
                                    ">{city.name}</div>
                                </Select.Item>
                            {/each}
                            </div>
                        </Select.Content>
                    </Select.Root>

                    <Dialog.Root>
                        <Dialog.Trigger class="w-[200px]">
                            <div class="md:hidden border-1 border-input rounded-md bg-white px-4 py-[0.6rem] text-xs text-green-700 font-light">Open filters</div>
                        </Dialog.Trigger>
                        <Dialog.Content class="absolute bg-white rounded-sm max-h-[80%] overflow-auto" side="right">
                            <div class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-sm pb-2 font-medium">Job Types</h2>
                                </div>
                                <div class="grid gap-1">
                                    {#each serviceTypes as serviceType}
                                        <Field.Field orientation="horizontal" class="pl-3">
                                            <Checkbox id="type-{serviceType.id}" value={serviceType.id}
                                                checked={isServiceTypeChecked(serviceType.id)}
                                                onCheckedChange={v => updateServiceTypes(serviceType.id, v)}></Checkbox>
                                            <Field.Label for="type-{serviceType.id}" class="text-xs py-2 cursor-pointer font-light">{serviceType.text}</Field.Label>
                                        </Field.Field>
                                    {/each}
                                </div>
                            </div>
                            
                            <Field.Field class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                                <Field.Label>Sort Results</Field.Label>
                                <RadioGroup.Root bind:value={selectedSort}>
                                    <Label class="text-xs w-full cursor-pointer px-3 font-light">
                                        <RadioGroup.Item value="rating_ave|desc" />
                                        Highest Rated
                                    </Label>
                                    <Label class="text-xs w-full cursor-pointer px-3 font-light">
                                        <RadioGroup.Item value="review_count|desc" />
                                        Most reviews
                                    </Label>
                                    <Label class="text-xs w-full cursor-pointer px-3 font-light">
                                        <RadioGroup.Item value="name|asc" />
                                        Name
                                    </Label>
                                </RadioGroup.Root>
                            </Field.Field>

                            <Button class="text-xs bg-green-700 hover:bg-green-800 cursor-pointer" disabled={!selectedSort} onclick={applyFilters}>Apply filters</Button>
                        </Dialog.Content>
                    </Dialog.Root>
                </div>
            </Field.Field>

            <div class="hidden md:block md:grid md:gap-4">
                <div class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                    <div class="flex items-center justify-between">
                        <h2 class="text-sm pb-2 font-medium">Job Types</h2>
                        <!-- <Button variant="secondary">Clear types</Button> -->
                    </div>
                    <div class="grid gap-1">
                        {#each serviceTypes as serviceType}
                            <Field.Field orientation="horizontal" class="pl-3">
                                <Checkbox id="type-{serviceType.id}" value={serviceType.id}
                                    checked={isServiceTypeChecked(serviceType.id)}
                                    onCheckedChange={v => updateServiceTypes(serviceType.id, v)}></Checkbox>
                                <Field.Label for="type-{serviceType.id}" class="text-xs py-2 cursor-pointer font-light">{serviceType.text}</Field.Label>
                            </Field.Field>
                        {/each}
                    </div>
                </div>

                <Field.Field class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                    <Field.Label>Sort Results</Field.Label>
                    <RadioGroup.Root bind:value={selectedSort}>
                        <Label class="text-xs w-full cursor-pointer px-3 font-light">
                            <RadioGroup.Item value="rating_ave|desc" />
                            Highest Rated
                        </Label>
                        <Label class="text-xs w-full cursor-pointer px-3 font-light">
                            <RadioGroup.Item value="review_count|desc" />
                            Most reviews
                        </Label>
                        <Label class="text-xs w-full cursor-pointer px-3 font-light">
                            <RadioGroup.Item value="name|asc" />
                            Name
                        </Label>
                    </RadioGroup.Root>
                </Field.Field>

                <Button class="text-xs bg-green-700 hover:bg-green-800 cursor-pointer" disabled={!selectedSort} onclick={applyFilters}>Apply filters</Button>
            </div>
        </Field.Group>
    </Field.Set>
</div>

<style>
    .city-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
</style>