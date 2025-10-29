<script>
    import * as Field from '$lib/components/ui/field/index';
    import * as RadioGroup from '$lib/components/ui/radio-group/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button from '../ui/button/button.svelte';
    import Label from '../ui/label/label.svelte';
    import Separator from '../ui/separator/separator.svelte';

    let { data } = $props();
    console.log('filters data', data);

    // import citiesList from '$lib/data/cities';
    // let cities = citiesList.map(c => {
    //     return {
    //         ...c,
    //         value: c.name.toLowerCase()
    //     };
    // });
    console.log(`cities = ${data.allCities?.length}`, data.allCities || []);

    let selectedCity = $state('');
    $effect(() => console.log('selectedCity', selectedCity))
    const cityTrigger = $derived(data.allCities.find((c) => c.id === selectedCity)?.name ?? '--');

    let selectedSort = $state('');
</script>

<div class="grid gap-8 w-[250px]">
    <Field.Set>
        <Field.Legend class="text-md text-green-800 font-bold">Filters</Field.Legend>

        <Field.Group>
            <Field.Field>
                <Field.Label for="city">Select your city</Field.Label>
                <Select.Root type="single" name="city" bind:value={selectedCity}>
                    <Select.Trigger class="w-full">{cityTrigger}</Select.Trigger>

                    <Select.Content>
                        {#each data.allCities as city (city.name)}
                            <Select.Item value={city.id} label={city.name}>{city.name}</Select.Item>
                        {/each}
                    </Select.Content>
                </Select.Root>
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

            <Separator />

            <Button class="bg-green-700">Apply filters</Button>
        </Field.Group>
    </Field.Set>
</div>