<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Field from '$lib/components/ui/field/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button from '$lib/components/ui/button/button.svelte';
    import Input from '$lib/components/ui/input/input.svelte';
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';

    let links = [
        {
            text: 'Home',
            url: '/'
        },
        // {
        //     text: 'Listings',
        //     url: '/listings'
        // },
        // {
        //     text: 'Advertise',
        //     url: '/'
        // },
        // {
        //     text: 'Contact Us',
        //     url: '/contact'
        // },
    ];

    let inquiryTypes = [
        { value: 'advertise', text: 'Advertise a cleaner' },
        { value: 'request', text: 'Request listing for your city' },
    ];
    let selectedType = $state('');
    const triggerContent = $derived(
        inquiryTypes.find(t => t.value === selectedType)?.text ?? 'Choose your inquiry type'
    );
</script>

<div class="flex items-end justify-between my-4 mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl bg-white">
    <div class="flex items-end gap-4">
        <img src="/images/icons/findprocleaners.svg" alt="Find Pro Cleaners" class="w-[32px] h-auto">
        <div class="flex items-end">
            <span class="font-semibold text-2xl text-green-600/70">Find</span>
            <span class="font-semibold text-2xl text-gray-700">Pro</span>
            <span class="font-semibold text-2xl text-green-600/70">Cleaners</span>
            <span class="font-semibold text-xl text-gray-400">.nz</span>
        </div>
    </div>
    <div class="flex items-center gap-8">
        {#each links as link}
            <a href={link.url} title={link.text} class="text-md font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                hover:text-green-900 hover:border-green-900">{link.text}</a>
        {/each}

        <Dialog.Root>
            <Dialog.Trigger class="cursor-pointer text-md font-normal text-green-700 pb-[2px] border-b-2 border-transparent
                hover:text-green-900 hover:border-green-900">Contact Us</Dialog.Trigger>
            <Dialog.Content class="bg-white pb-12">
                <Dialog.Header>
                    <Dialog.Title>
                        <h1 class="flex gap-4 items-center justify-center font-semibold text-xl">Contact Us</h1>
                    </Dialog.Title>
                </Dialog.Header>
                <div class="grid gap-4">
                    <Field.Group>
                        <Field.Field>
                            <Field.Label for="your_name">Your Name</Field.Label>
                            <Input id="your_name" name="your_name" />
                        </Field.Field>
                        <Field.Field>
                            <Field.Label for="your_email">Your Email</Field.Label>
                            <Input id="your_email" name="your_email" type="email" />
                        </Field.Field>
                        <Field.Field>
                            <Field.Label for="inquiry_type">Inquiry Type</Field.Label>
                            <Select.Root type="single" name="inquiry_type" id="inquiry_type" bind:value={selectedType}>
                                <Select.Trigger>
                                    {triggerContent}
                                </Select.Trigger>
                                <Select.Content>
                                    {#each inquiryTypes as t}
                                        <Select.Item
                                            value={t.value}
                                            label={t.text}
                                        >
                                            {t.text}
                                        </Select.Item>
                                    {/each}
                                </Select.Content>
                            </Select.Root>
                        </Field.Field>
                        {#if selectedType === 'request'}
                            <Field.Field>
                                <Field.Label for="your_city">Your City</Field.Label>
                                <Input id="your_city" name="your_city" />
                            </Field.Field>
                        {/if}
                        <Field.Field>
                            <Field.Label for="your_message">Your Message</Field.Label>
                            <Textarea id="your_message" name="your_message" class="resize-none h-[100px]"></Textarea>
                        </Field.Field>
                        <Button class="bg-green-700 text-white cursor-pointer hover:bg-green-800 shadow-sm">Submit</Button>
                    </Field.Group>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    </div>
</div>