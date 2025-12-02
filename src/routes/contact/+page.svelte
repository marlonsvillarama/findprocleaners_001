<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import RegionsSection from "$lib/components/root/regions-section.svelte";
    import Section from "$lib/components/root/section.svelte";

    import { ChevronRight } from "@lucide/svelte";

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
            form.style.display = form.dataset.id === selectedForm ? 'grid' : 'none'
        });
    });

    const MAX_CHARS = $state(500);
    let message = $state('');
    let charactersLeft = $derived.by(() => MAX_CHARS - message.length);
</script>

<div class="grid gap-12 md:gap-24 bg-background-light">
    <div class="banner relative md:pt-24 md:pb-42">
        <div class="pb-26 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
            <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
                <h1 class="text-5xl text-white leading-[4rem]">Contact Us</h1>
            </div>
        </div>
    </div>
    
    <a id="contact-form">
    <Section title="How Can We Help?">
        {#snippet content()}
            <div class="grid items-start md:grid-cols-[300px_auto]">
                <div class="grid gap-2 pr-6 border-r-1 border-gray-200 text-sm">
                    <div class="tile cursor-pointer hover:bg-green-700/10 rounded-sm">
                        <input type="radio" id="feedback" name="feedback" value="feedback" class="hidden" bind:group={selectedForm}>
                        <label for="feedback" class="rounded-sm flex items-center cursor-pointer w-full block gap-2 px-2 py-2">
                            <ChevronRight size={16} />
                            <span>Submit feedback</span>
                        </label>
                    </div>
                    <div class="tile cursor-pointer hover:bg-green-700/10 rounded-sm">
                        <input type="radio" id="request_city" name="request_city" value="request_city" class="hidden" bind:group={selectedForm}>
                        <label for="request_city" class="rounded-sm flex items-center cursor-pointer w-full block gap-2 px-2 py-2">
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
                
                <div class="pl-6 mb-6 text-sm">
                    <!-- Submit Feedback -->
                    <div class="contact-form form-feedback grid gap-8 hidden" data-id="feedback">
                        <div class="field-set grid gap-1">
                            <label for="your_name" class="font-medium">Your Name</label>
                            <input type="text" id="your_name" name="your_name" maxlength="80" placeholder="Enter your name here..." required
                                class="sm:w-full lg:w-[50%] font-light rounded-sm border px-4 py-2"
                            />
                        </div>
                        <div class="field-set grid gap-1">
                            <label for="your_name" class="font-light italic">Your e-mail address</label>
                            <input type="email" id="your_email" name="your_email" maxlength="80" placeholder="Your e-mail address..."
                                class="sm:w-full lg:w-[50%] font-light rounded-sm border px-4 py-2"
                            />
                        </div>
                        <div class="field-set grid gap-1">
                            <label for="your_message" class="font-medium">Message ({charactersLeft} characters left)</label>
                            <textarea id="your_message" name="your_message" maxlength={MAX_CHARS} placeholder="Enter your feedback here..."
                                bind:value={message}
                                class="w-full font-light rounded-sm border px-4 py-2 resize-none h-[150px]"
                            ></textarea>
                        </div>
                    </div>

                    <!-- Request listings for your city -->
                    <div class="contact-form form-request_city grid gap-8 hidden" data-id="request_city">
                        <div class="field-set grid gap-1">
                            <label for="your_city">Your City</label>
                            <input type="text" id="your_city" name="your_city" maxlength="80" placeholder="Enter your city here..."
                                class="sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                            />
                        </div>
                    </div>

                    <!-- Refer a cleaner -->
                    <div class="contact-form form-refer grid gap-8 hidden" data-id="refer">
                        <div class="field-set grid gap-1">
                            <label for="business_city">City</label>
                            <input type="text" id="business_city" name="business_city" maxlength="80" placeholder="Business city or location"
                                class="sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                            />
                        </div>
                        <div class="field-set grid gap-1">
                            <label for="business_name">Business Name</label>
                            <input type="text" id="business_name" name="business_name" maxlength="80" placeholder="Enter the business name here..."
                                class="sm:w-full lg:w-[50%] text-sm font-light rounded-sm border px-4 py-2"
                            />
                        </div>
                    </div>

                    <Button
                        class="mt-6 text-white bg-green-700/80 cursor-pointer rounded-sm hover:bg-green-700 hover:shadow-sm"
                    >Submit Form</Button>
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

<style>
    .banner {
        background-image: url('/images/sheep.jpg');
        background-position: 0% 65%;
        background-size: cover;
    }
    .banner h1 {
        font-family: "Noto Serif", serif;
    }
    input[type=radio] {
        appearance: none;
        background-color: white;
        margin: 0;
    }
    .tile > input[type=radio]:checked + label {
        background-color: rgba(0, 130, 54, 0.2);
    }
</style>