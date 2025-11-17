<script>
    // import { toast } from 'svelte-sonner';
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Field from '$lib/components/ui/field/index';
    import * as Select from '$lib/components/ui/select/index';
    import Button from '$lib/components/ui/button/button.svelte';
    import Input from '$lib/components/ui/input/input.svelte';
    import Label from '$lib/components/ui/label/label.svelte';
    import Spinner from '$lib/components/ui/spinner/spinner.svelte';
    import Textarea from '$lib/components/ui/textarea/textarea.svelte';

    const API_URL = 'https://0olq4i6esc.execute-api.ap-southeast-2.amazonaws.com/default/fpc_inquiries';

    let { isFooter = false } = $props();
    
    let triggerClass = isFooter === true ?
        'text-gray-200 hover:text-white hover:border-white' :
        'text-green-700 hover:text-green-900 hover:border-green-900';

    let contactData = $state({
        name: '',
        email: '',
        city: 'N/A',
        cleaner: 'N/A',
        type: 'feedback',
        message: ''
    });

    let contactErrors = $state({});
    let isOpen = $state(false);
    let isSubmitting = $state(false);
    let isSubmitted = $state(false);

    let inquiryTypes = [
        { value: 'advertise', text: 'Advertise a cleaner' },
        { value: 'request', text: 'Request listings for your city' },
        { value: 'feedback', text: 'Submit your feedback' },
    ];
    const triggerContent = $derived(
        inquiryTypes.find(t => t.value === contactData.type)?.text ?? 'Choose your inquiry type'
    );

    const hasError = (id) => {
        switch (id) {
            case 'email': {
                contactErrors.email = validateEmail() === false;
                break;
            }
            default: {
                contactErrors[id] = !!contactData[id] === false;
            }
        }

        return contactErrors[id];
    };

    const resetContactData = () => {
        contactData = {
            name: '',
            email: '',
            city: 'N/A',
            cleaner: 'N/A',
            type: 'feedback',
            message: ''
        };
        contactErrors = {};
    };

    const submitForm = async () => {
        let isValid = true;

        Object.keys(contactData).forEach(k => {
            if (hasError(k) === true) {
                isValid = false;
            }
        });

        if (isValid === false) {
            return;
        }

        isSubmitting = true;
        let jsonResponse = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...contactData,
                ts: (new Date()).getTime().toString()
            })
        });
        jsonResponse = await jsonResponse.json();
        console.log(`submitData jsonResponse`, jsonResponse);

        isSubmitting = false;
        isSubmitted = true;
        success = jsonResponse.ok;
        setTimeout(() => {
            resetContactData();
            isOpen = false;
            setTimeout(() => isSubmitted = false, 1000)
        }, 2000);
        if (success) {
            console.log('YES');
        }
        else {
            console.log('NO');
        }
        /* setTimeout(() => {
            isSubmitting = false;
            isSubmitted = true;

            setTimeout(() => {
                resetContactData();
                isOpen = false;
                setTimeout(() => isSubmitted = false, 1000)
            }, 2000);
            // toast.success("Inquiry form submitted!");
        }, 5000); */
    };

    const validateCity = () => {
        return contactData.type === 'request' ? !!contactData.city : true;
    };

    const validateEmail = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = contactData['email'] || '';

        return emailRegex.test(email) === true;
    };

    const setTypeDefaults = () => {
        contactData.city = [ 'advertise', 'request' ].indexOf(contactData.type) >= 0 ? '' : 'N/A';
        contactData.cleaner = [ 'advertise' ].indexOf(contactData.type) >= 0 ? '' : 'N/A';
    };
</script>

<Dialog.Root bind:open={isOpen}>
    <Dialog.Trigger class="cursor-pointer text-md font-normal pb-[2px] border-b-2 border-transparent {triggerClass}">Contact Us</Dialog.Trigger>
    <Dialog.Content class="bg-white pb-12">
        <Dialog.Header>
            <Dialog.Title>
                <h1 class="flex gap-4 items-center justify-center font-semibold text-xl">Contact Us</h1>
            </Dialog.Title>
        </Dialog.Header>
        {#if isSubmitted === true}
            <div class="py-1">
                <h1 class="text-3xl text-green-700 font-semibold">Thank you for your inquiry!</h1>
                <p class="pt-4 font-extralight text-md">We will do our best to get back to you as quickly as we can.</p>
            </div>
        {:else}
        <div class="grid gap-8 max-h-[500px] overflow-scroll p-2 pr-4">
            <div class="grid gap-1">
                <Label for="your_name" class="ml-[2px]">Your Name</Label>
                <Input id="your_name" name="your_name" bind:value={contactData.name} onblur={() => hasError('name')} />
                {#if !!contactErrors['name'] === true}
                    <Label class="ml-[2px] text-sm text-red-500 font-light">Please enter your name.</Label>
                {/if}
            </div>
            <div class="grid gap-1">
                <Label for="your_email" class="ml-[2px]">Your Email</Label>
                <Input id="your_email" name="your_email" type="email" bind:value={contactData.email} onblur={() => hasError('email')} />
                {#if !!contactErrors['email'] === true}
                    <Label class="ml-[2px] text-sm text-red-500 font-light">Please enter a valid email address.</Label>
                {/if}
            </div>
            <div class="grid gap-1">
                <Label for="inquiry_type" class="ml-[2px]">Inquiry Type</Label>
                <Select.Root type="single" name="inquiry_type" id="inquiry_type" bind:value={contactData.type} onValueChange={setTypeDefaults} onblur={() => hasError('type')}>
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
                {#if !!contactErrors['type'] === true}
                    <Label class="ml-[2px] text-sm text-red-500 font-light">Please select an inquiry type.</Label>
                {/if}
            </div>

            {#if contactData.type === 'advertise'}
                <div class="grid gap-1">
                    <Label for="cleaner_name" class="ml-[2px]">Business Name</Label>
                    <Input id="cleaner_name" name="cleaner_name" bind:value={contactData.cleaner} onblur={() => hasError('cleaner')} />
                    {#if contactErrors['cleaner'] === true}
                        <Label class="ml-[2px] text-sm text-red-500 font-light">Please enter the cleaner's business name.</Label>
                    {/if}
                </div>
            {/if}

            {#if [ 'advertise', 'request' ].indexOf(contactData.type) >= 0}
                <div class="grid gap-1">
                    <Label for="your_city" class="ml-[2px]">
                        {#if contactData.type === 'advertise'}
                            Location
                        {:else}
                            Your city
                        {/if}
                    </Label>
                    <Input id="your_city" name="your_city" bind:value={contactData.city} onblur={() => hasError('city')} />
                    {#if contactErrors['city'] === true}
                        <Label class="ml-[2px] text-sm text-red-500 font-light">
                            {#if contactData.type === 'advertise'}
                                Please enter the city where the business is located.
                            {:else}
                                Please enter your city.
                            {/if}
                        </Label>
                    {/if}
                </div>
            {/if}
            
            <div class="grid gap-1">
                <Label class="ml-[2px]">Your Message (max 500 words)</Label>
                <Textarea id="your_message" name="your_message" class="resize-none h-[100px]" maxlength="500" bind:value={contactData.message} onblur={() => hasError('message')}></Textarea>
                {#if contactErrors['message'] === true}
                    <Label class="ml-[2px] text-sm text-red-500 font-light">Please enter your message.</Label>
                {/if}
            </div>
        </div>

        <Button class="bg-green-700 text-white cursor-pointer hover:bg-green-800 shadow-sm"
            onclick={submitForm} disabled={isSubmitting}
        >
            {#if isSubmitting === true}
                <Spinner /> Submitting inquiry...
            {:else}
                Submit
            {/if}
        </Button>
        {/if}
    </Dialog.Content>
</Dialog.Root>
