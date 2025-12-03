<script>
    // import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import FaqItem from "./faq-item.svelte";
    import Paragraph from "./paragraph.svelte";
    import UnorderedList from "./unordered-list.svelte";

    let {
        place = 'New Zealand'
    } = $props();
</script>

<div class="grid gap-3">
    <FaqItem title="How much do professional cleaning services cost in {place}?">
        {#snippet content()}
            <Paragraph class="px-4 md:px-8 mb-6 sm:mb-4">
                {#snippet text()}
                Professional cleaning rates vary depending on your location, the size of your property, and the type of service required.
                {/snippet}
            </Paragraph>
            <Paragraph class="px-4 md:px-8 mb-6 sm:mb-4">
                {#snippet text()}
                Generally, you can expect to pay between $30-$50 per hour for standard domestic cleaning, with rates typically higher in major cities like Auckland and Wellington.
                {/snippet}
            </Paragraph>
            <Paragraph class="px-4 md:px-8">
                {#snippet text()}
                Deep cleans or specialised services such as carpet cleaning, oven cleaning, or end-of-tenancy cleans are usually quoted as fixed prices based on the property size and condition.
                {/snippet}
            </Paragraph>
            <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]"> -->
            <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8 mb-3"> -->
                <!-- Professional cleaning rates vary depending on your location, the size of your property, and the type of service required. Generally, you can expect to pay between $30-$50 per hour for standard domestic cleaning, with rates typically higher in major cities like Auckland and Wellington.
            </p> -->
            <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]"> -->
            <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
                <!-- Deep cleans or specialised services such as carpet cleaning, oven cleaning, or end-of-tenancy cleans are usually quoted as fixed prices based on the property size and condition.
            </p> -->
        {/snippet}
    </FaqItem>

    <FaqItem title="What's the difference between regular cleaning and deep cleaning?">
        {#snippet content()}
            <div class="grid gap-1 mb-3">
                <Paragraph class="px-4 md:px-8">
                    {#snippet text()}
                    Regular cleaning (sometimes called maintenance cleaning) covers the routine tasks needed to keep your home tidy week-to-week, such as:
                    {/snippet}
                </Paragraph>
                <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]"> -->
                <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
                    <!-- Regular cleaning (sometimes called maintenance cleaning) covers the routine tasks needed to keep your home tidy week-to-week, such as:
                </p> -->
                <UnorderedList items={[ 'Vacuuming', 'Mopping', 'Dusting surfaces', 'Cleaning bathrooms and kitchens', 'Making beds' ]} />
                <!-- <ul class="list-disc font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-6 md:px-8 ml-6 md:ml-8">
                    <li>Vacuuming</li>
                    <li>Mopping</li>
                    <li>Dusting surfaces</li>
                    <li>Cleaning bathrooms and kitchens</li>
                    <li>Making beds</li>
                </ul> -->
            </div>
            <div class="grid gap-1">
                <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
                <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]">
                    Deep cleaning is a more intensive service that tackles areas often overlooked in regular cleaning:
                </p> -->
                <Paragraph class="px-4 md:px-8">
                    {#snippet text()}
                    Deep cleaning is a more intensive service that tackles areas often overlooked in regular cleaning:
                    {/snippet}
                </Paragraph>
                <UnorderedList items={[ 'Inside ovens and range hoods', 'Window track cleaning', 'Thorough grout scrubbing', 'Removing built-up grime' ]} />
                <!-- <ul class="list-disc tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-6 md:px-8 ml-6 md:ml-8"> -->
                <!-- <ul class="list-disc font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-6 md:px-8 ml-6 md:ml-8">
                    <li>Inside ovens and range hoods</li>
                    <li>Window track cleaning</li>
                    <li>Thorough grout scrubbing</li>
                    <li>Removing built-up grime</li>
                </ul> -->
            </div>
        {/snippet}
    </FaqItem>

    <FaqItem title="Do I need to provide cleaning products and equipment?">
        {#snippet content()}
            <Paragraph class="px-4 md:px-8">
                {#snippet text()}
                Most professional cleaning companies bring their own commercial-grade equipment and cleaning products as part of their service.
                {/snippet}
            </Paragraph>
            <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
            <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]">
                Most professional cleaning companies bring their own commercial-grade equipment and cleaning products as part of their service.
            </p> -->
        {/snippet}
    </FaqItem>

    <FaqItem title="What should I do to prepare for a cleaner's visit?">
        {#snippet content()}
            <Paragraph class="px-4 md:px-8">
                {#snippet text()}
                For the best results, do a quick tidy-up before your cleaner arrives—put away clothing, toys, and personal items so cleaners can access surfaces easily. This ensures they spend their time actually cleaning rather than organising.
                {/snippet}
            </Paragraph>
            <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
            <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]">
                For the best results, do a quick tidy-up before your cleaner arrives—put away clothing, toys, and personal items so cleaners can access surfaces easily. This ensures they spend their time actually cleaning rather than organising.
            </p> -->
        {/snippet}
    </FaqItem>

    <FaqItem title="What if I'm not satisfied with the cleaning service?">
        {#snippet content()}
            <Paragraph class="px-4 md:px-8">
                {#snippet text()}
                Reputable cleaning companies stand behind their work and want you to be happy with the results. When raising an issue, be specific about what didn't meet your expectations, ideally with photos. Good communication is key to a successful ongoing relationship with your cleaner.
                {/snippet}
            </Paragraph>
            <!-- <p class="tracking-[0.25px] leading-[1.5rem] md:leading-[1.75rem] px-4 md:px-8"> -->
            <!-- <p class="px-4 md:px-8 mb-3 font-normal sm:font-light tracking-[0.25px] leading-[1.5rem] sm:leading-[1.75rem]">
                Reputable cleaning companies stand behind their work and want you to be happy with the results. When raising an issue, be specific about what didn't meet your expectations, ideally with photos. Good communication is key to a successful ongoing relationship with your cleaner.
            </p> -->
        {/snippet}
    </FaqItem>
</div>

<style>
</style>