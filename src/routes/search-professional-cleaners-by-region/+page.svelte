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
        regions
    } = data;
</script>

<div class="grid gap-12 md:gap-24 bg-background-light">
    <div class="banner relative md:pt-24 md:pb-42">
        <div class="pb-26 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
            <div class="grid gap-6 lg:max-w-[60%] border-0 border-green-500">
                <h1 class="text-5xl text-white leading-[4rem]">Search Professional Cleaners by Region</h1>
                <p class="text-white text-xl font-light tracking-[0.25px]">Discover the best professional cleaning services withn your region.</p>
            </div>
        </div>
    </div>

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