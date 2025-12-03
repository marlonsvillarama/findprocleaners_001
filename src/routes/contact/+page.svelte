<script>
    import * as Dialog from "$lib/components/ui/dialog/index";
    import Button from "$lib/components/ui/button/button.svelte";
    import Spinner from "$lib/components/ui/spinner/spinner.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Header from "$lib/components/root/header.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import RegionsSection from "$lib/components/root/regions-section.svelte";
    import Section from "$lib/components/root/section.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    import { ChevronRight } from "@lucide/svelte";

    const API_URL = 'https://hfy2qvtl1c.execute-api.ap-southeast-2.amazonaws.com/default/fpc_inquiries';

    let {
        data
    } = $props();
    let {
        mode,
        regions
    } = data;

    let selectedForm = $state(mode || 'feedback');
    $effect(() => {
        let contactForms = document.getElementsByClassName('contact-form');
        // console.log(`selectedForm = ${selectedForm}; contactForms`, contactForms);
        Array.from(contactForms).forEach(form => {
            // console.log(`form = ${form.dataset.id}; contains = ${form.dataset.id === selectedForm}`);
            form.style.display = form.dataset.form === selectedForm ? 'grid' : 'none'
        });
    });

    const MAX_CHARS = $state(500);
    let formValues = $state({});
    let formErrors = $state([]);
    let charactersLeft = $derived.by(() => MAX_CHARS - (formValues.message || '').length);
    let isSubmitting = $state(false);
    let isSubmitted = $state(false);

    const submitForm = async () => {
        // console.log(`selectedForm = ${selectedForm}`, formValues);
        formErrors = [];
        validateValues();
        if (formErrors.length > 0) {
            alert('Please fill out all required fields and resubmit the form.');
            return;
        }

        console.log('Submitting form content...');
        isSubmitting = true;
        let jsonResponse = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...formValues,
                type: selectedForm,
                ts: (new Date()).getTime().toString()
            })
        });
        jsonResponse = await jsonResponse.json();
        let success = jsonResponse.ok;

        // setTimeout(() => {
            isSubmitting = false;
            isSubmitted = true;
        // }, 3000);
    };

    const validateValues = () => {
        console.log(`selectedForm = ${selectedForm}`, formValues);
        let form = document.querySelector(`[data-form=${selectedForm}]`);
        let requiredFields = form.getElementsByClassName('required');
        console.log(`required fields = ${requiredFields.length}`, requiredFields);

        let isValidForm = true;
        for (let i = 0, count = requiredFields.length; i < count; i++) {
            let fld = requiredFields[i];
            console.log(`Found required field "${fld.dataset.field}"`, fld);

            if (!formValues[fld.dataset.field]) {
                formErrors.push(fld.dataset.field);
            }
        }
    };

    const resetForm = () => {
        formValues = {};
        formErrors = [];
        isSubmitting = false;
        isSubmitted = false;
        console.log('resetForm formValues', formValues);
        console.log('resetForm formErrors', formErrors);
        console.log(`resetForm isSubmitting = ${isSubmitting}; isSubmitted = ${isSubmitted}`);
    };
</script>

<Seo title="Contact Us" />

<Header data={data.regions} />

<div class="mb-12 md:mb-24">

<div class="grid gap-12 md:gap-24 bg-background-light">
    <!-- <div class="banner relative md:pt-24 md:pb-42">
        <div class="pb-26 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
            <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
                <h1 class="text-5xl text-white leading-[4rem]">Contact Us</h1>
            </div>
        </div>
    </div> -->
    <Hero title="Contact Us" image="sheep.jpg" />
    
    <a id="contact-form">
        <Section title="How Can We Help?">
            {#snippet content()}
                <div class="grid gap-6 md:gap-0 items-start md:grid-cols-[280px_auto]">
                    <div class="grid gap-2 md:pr-6 md:border-r-0 md:border-gray-200 text-md">
                        <div class="tile cursor-pointer hover:bg-green-700/10 rounded-sm">
                            <input type="radio" id="feedback" name="feedback" value="feedback" class="hidden" bind:group={selectedForm}>
                            <label for="feedback" class="rounded-sm flex items-center cursor-pointer w-full block gap-2 px-2 py-2">
                                <ChevronRight size={16} />
                                <span>Submit feedback</span>
                            </label>
                        </div>
                        <div class="tile cursor-pointer hover:bg-green-700/10 rounded-sm">
                            <input type="radio" id="request" name="request" value="request" class="hidden" bind:group={selectedForm}>
                            <label for="request" class="rounded-sm flex items-center cursor-pointer w-full block gap-2 px-2 py-2">
                                <ChevronRight size={16} />
                                <span>Request listings for your city</span>
                            </label>
                        </div>
                        <div class="tile cursor-pointer hover:bg-green-700/10 rounded-sm">
                            <input type="radio" id="refer" name="refer" value="refer" class="hidden" bind:group={selectedForm}>
                            <label for="refer" class="rounded-sm flex items-center cursor-pointer w-full block gap-2 px-2 py-2">
                                <ChevronRight size={16} />
                                <span>Refer a cleaner</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="px-4 pt-3 pb-5 md:pl-6 mb-6 text-md border-1 border-green-700/20 rounded-sm shadow-sm">
                        <!-- Submit Feedback -->
                        <div class="contact-form form-feedback grid gap-8 hidden" data-form="feedback">
                            <div class="field-set grid gap-1">
                                <label for="your_name" class="font-semibold ml-0.5">Your Name</label>
                                <span class="text-sm text-gray-400 font-normal ml-0.5">Tell us who you are!</span>
                                <input type="text" id="your_name" name="your_name" maxlength="80" placeholder="Enter your name here..."
                                    class="required sm:w-full lg:w-[60%] font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.name} data-field="name"
                                />
                                {#if formErrors.indexOf('name') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter your name.</span>
                                {/if}
                            </div>
                            <div class="field-set grid gap-1">
                                <label for="your_name" class="font-light ml-0.5">Your e-mail address &nbsp; (Optional)</label>
                                <span class="text-sm text-gray-400 font-normal ml-0.5">Let us know where we can reach you.</span>
                                <input type="email" id="your_email" name="your_email" maxlength="80" placeholder="Your e-mail address..."
                                    class="sm:w-full lg:w-[60%] font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.email} data-field="email"
                                />
                            </div>
                            <div class="field-set grid gap-1">
                                <label for="your_message" class="font-semibold ml-0.5">Message ({charactersLeft} characters left)</label>
                                <span class="text-sm text-gray-400 font-normal ml-0.5">Please share how we can improve!</span>
                                <textarea id="your_message" name="your_message" maxlength={MAX_CHARS} placeholder="Enter your feedback here..."
                                    class="required w-full font-light rounded-sm border px-4 py-3 resize-none h-[150px]"
                                    bind:value={formValues.message} data-field="message"
                                ></textarea>
                                {#if formErrors.indexOf('message') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter your message.</span>
                                {/if}
                            </div>
                        </div>

                        <!-- Request listings for your city -->
                        <div class="contact-form form-request grid gap-8 hidden" data-form="request">
                            <div class="field-set grid gap-1">
                                <label for="your_city" class="font-semibold ml-0.5">Your City</label>
                                <span class="text-sm text-gray-400 font-normal ml-0.5">Which city would you like us to catalog next?</span>
                                <input type="text" id="your_city" name="your_city" maxlength="80" placeholder="Enter your city here..."
                                    class="required sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.city} data-field="city"
                                />
                                {#if formErrors.indexOf('city') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter the name of a city.</span>
                                {/if}
                            </div>
                        </div>

                        <!-- Refer a cleaner -->
                        <div class="contact-form form-refer grid gap-8 hidden" data-form="refer">
                            <div class="field-set grid gap-1">
                                <label for="biz_name" class="font-semibold ml-0.5">Business Name</label>
                                <span class="text-sm text-gray-400 font-light ml-0.5">Share the cleaning business you would like us to add.</span>
                                <input type="text" id="biz_name" name="biz_name" maxlength="80" placeholder="Enter the business name here..."
                                    class="required sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.biz_name} data-field="biz_name"
                                />
                                {#if formErrors.indexOf('biz_name') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter the name of the cleaning business.</span>
                                {/if}
                            </div>
                            <div class="field-set grid gap-1">
                                <label for="biz_city" class="font-semibold ml-0.5">City</label>
                                <span class="text-sm text-gray-400 font-light ml-0.5">Enter the city where the business is located.</span>
                                <input type="text" id="biz_city" name="biz_city" maxlength="80" placeholder="Business city or location"
                                    class="required sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.biz_city} data-field="biz_city"
                                />
                                {#if formErrors.indexOf('biz_city') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter the city where the business is located.</span>
                                {/if}
                            </div>
                            <div class="field-set grid gap-1">
                                <label for="biz_phone" class="font-semibold ml-0.5">Phone</label>
                                <span class="text-sm text-gray-400 font-light ml-0.5">Enter the primary business phone number.</span>
                                <input type="phone" id="biz_phone" name="biz_phone" maxlength="11" placeholder=""
                                    class="required w-[160px] text-sm font-light rounded-sm border px-4 py-2"
                                    bind:value={formValues.biz_phone} data-field="biz_phone"
                                />
                                {#if formErrors.indexOf('biz_phone') >= 0}
                                    <span class="text-sm sm:text-xs text-red-500 ml-0.5">Please enter the primary business phone number.</span>
                                {/if}
                            </div>
                        </div>

                        <Button onclick={submitForm}
                            disabled={isSubmitting}
                            class="mt-8 text-white bg-green-700/80 cursor-pointer rounded-sm hover:bg-green-700 hover:shadow-sm"
                        >
                            {#if isSubmitting}
                                <Spinner size={16} />
                            {/if}
                            Submit Form
                        </Button>
                    </div>
                </div>
            {/snippet}
        </Section>
    </a>

    <Section title="Search Professional Cleaners by Region">
        {#snippet content()}
            <RegionsSection data={regions} />
        {/snippet}
    </Section>

    <Section title="Frequently Asked Questions">
        {#snippet content()}
            <FAQ />
        {/snippet}
    </Section>
</div>

</div>

<Footer />

<Dialog.Root bind:open={isSubmitted}>
    <Dialog.Content class="w-[80%] sm:w-[425px]"
        onEscapeKeydown={e => {
            e.preventDefault();
            resetForm();
        }}
    >
        <Dialog.Header class="text-left font-semibold">Thank you for reaching out!</Dialog.Header>
        <p class="text-sm mb-2 font-light tracking-[0.25px]">
            Please feel free to look around the website and let us know if you have any other concerns.
        </p>
    </Dialog.Content>
</Dialog.Root>

<style>
    input[type=radio] {
        appearance: none;
        background-color: white;
        margin: 0;
    }
    .tile > input[type=radio]:checked + label {
        background-color: rgba(0, 130, 54, 0.2);
    }
</style>