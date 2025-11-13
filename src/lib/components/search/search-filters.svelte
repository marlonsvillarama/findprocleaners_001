<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Field from '$lib/components/ui/field/index';
    import * as Popover from '$lib/components/ui/popover/index';
    import * as RadioGroup from '$lib/components/ui/radio-group/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button, { buttonVariants } from '../ui/button/button.svelte';
    import Label from '../ui/label/label.svelte';
    import Separator from '../ui/separator/separator.svelte';

    import { Building2 } from '@lucide/svelte';

    let { data } = $props();
    // console.log('filters data', data);

    // import citiesList from '$lib/data/cities';
    // let cities = citiesList.map(c => {
    //     return {
    //         ...c,
    //         value: c.name.toLowerCase()
    //     };
    // });
    // console.log(`cities = ${data.allCities?.length}`, data.allCities || []);

    const COLUMN_COUNT = 3;
    let groups = [];
    let perColumn = Math.ceil(data.cities.length / COLUMN_COUNT);

    let col = 0;
    let start = 0;
    do {
        groups.push(data.cities.slice((col * perColumn), (col * perColumn) + perColumn));
        col++;
    } while (col < COLUMN_COUNT);

    let selectedCity = $state('');
    // $effect(() => console.log('selectedCity', selectedCity))
    const cityTrigger = $derived(data.cities.find((c) => c.id === selectedCity)?.name ?? '--');

    let selectedSort = $state('');
</script>

<div class="grid gap-1 w-[250px]">
    <h1 class="text-green-800 text-2xl font-extrabold mb-1">Filters</h1>

    <Field.Set>
        <Field.Group>
            <Field.Field>
                <!-- <Field.Label for="city">Select your city</Field.Label> -->

                <Dialog.Root>
                    <Dialog.Trigger>
                        <div class="flex justify-center items-center gap-3 py-2 border-b-2 border-green-700 w-full bg-white rounded-sm text-green-700 cursor-pointer
                            hover:shadow-lg">
                            <Building2 size={20} />
                            <span>Select your city</span>
                        </div>
                    </Dialog.Trigger>
                    <!-- <Dialog.Trigger>
                        <div class="px-3 py-2 border shadow-sm w-full bg-white rounded-sm text-green-700 cursor-pointer hover:bg-white">
                            -- Select a city --
                        </div>
                    </Dialog.Trigger> -->

                    <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto" side="right">
                        <div class="flex gap-4 items-center justify-center">
                            <Building2 size={20} />
                            <h1 class="text-xl text-left text-green-700 font-bold">Select your city</h1>
                        </div>
                        <div class="grid grid-cols-3 items-start px-4">
                            {#each groups as group}
                                <div class="grid gap-2">
                                    {#each group as city}
                                        <!-- <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self">
                                            <h2 class="text-green-700">{city.name}</h2>
                                        </a> -->
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
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                <!-- <Select.Root type="single" name="city" bind:value={selectedCity}>
                    <Select.Trigger class="w-full">{cityTrigger}</Select.Trigger>

                    <Select.Content>
                        {#each data.allCities as city (city.name)}
                            <Select.Item value={city.id} label={city.name}>{city.name}</Select.Item>
                        {/each}
                    </Select.Content>
                </Select.Root> -->
            </Field.Field>

            <!-- <Separator /> -->

            <Field.Field class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                <Field.Label>Job Type</Field.Label>
                <RadioGroup.Root bind:value={selectedSort}>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="home" />
                        Home Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="office" />
                        Office Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="window" />
                        Window Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="water+blasting" />
                        Water Blasting
                    </Label>
                </RadioGroup.Root>
            </Field.Field>

            <!-- <Separator /> -->

            <Field.Field class="bg-white rounded-md shadow-sm px-5 pt-4 pb-6">
                <Field.Label>Sort by...</Field.Label>
                <RadioGroup.Root bind:value={selectedSort}>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="highest+rated" />
                        Highest Rated
                    </Label>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="most+reviews" />
                        Most reviews
                    </Label>
                    <Label class="w-full cursor-pointer px-3 font-light">
                        <RadioGroup.Item value="name" />
                        Name
                    </Label>
                </RadioGroup.Root>
            </Field.Field>

            <!-- <Separator /> -->

            <Button class="bg-green-700 hover:bg-green-800 cursor-pointer">Apply filters</Button>
        </Field.Group>
    </Field.Set>
</div>