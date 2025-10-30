<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Field from '$lib/components/ui/field/index';
    import * as Popover from '$lib/components/ui/popover/index';
    import * as RadioGroup from '$lib/components/ui/radio-group/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button, { buttonVariants } from '../ui/button/button.svelte';
    import Label from '../ui/label/label.svelte';
    import Separator from '../ui/separator/separator.svelte';

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

<div class="grid gap-8 w-[250px]">
    <Field.Set>
        <Field.Legend class="text-md text-green-800 font-bold">Filters</Field.Legend>

        <Field.Group>
            <Field.Field>
                <!-- <Field.Label for="city">Select your city</Field.Label> -->

                <Dialog.Root>
                    <Dialog.Trigger>
                        <div class="px-3 py-2 border shadow-sm w-full bg-white rounded-sm text-green-700 cursor-pointer hover:bg-white">
                            -- Select a city --
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto" side="right">
                        <h1 class="text-xl text-left font-bold">Select a city</h1>
                        <div class="grid grid-cols-3 items-start px-4">
                            {#each groups as group}
                                <div class="grid gap-2">
                                    {#each group as city}
                                        <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self">
                                            <h2 class="text-green-700">{city.name}</h2>
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

            <Separator />

            <Field.Field>
                <Field.Label>Job Type</Field.Label>
                <RadioGroup.Root bind:value={selectedSort}>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="home" />
                        Home Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="office" />
                        Office Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="window" />
                        Window Cleaning
                    </Label>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="water+blasting" />
                        Water Blasting
                    </Label>
                </RadioGroup.Root>
            </Field.Field>

            <Separator />

            <Field.Field>
                <Field.Label>Sort by...</Field.Label>
                <RadioGroup.Root bind:value={selectedSort}>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="highest+rated" />
                        Highest Rated
                    </Label>
                    <Label class="w-full cursor-pointer px-3">
                        <RadioGroup.Item value="most+reviews" />
                        Most reviews
                    </Label>
                </RadioGroup.Root>
            </Field.Field>

            <!-- <Separator /> -->

            <!-- <Button class="bg-green-700 hover:bg-green-800 cursor-pointer">Apply filters</Button> -->
        </Field.Group>
    </Field.Set>
</div>