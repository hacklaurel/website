<script lang="ts">
	export let href: string = '#';
    export let textSize: string = '2xl';
    export let classes: string = '';
    export let hover: boolean = true;
</script>

<a
	{href}
	class={`inline-block group font-800 text-${textSize} p-5 rounded-full transition duration-500 bg-primary ${hover ? "hover:scale-110" : ""} text-white ${classes} decoration-none`}
	><slot />
	<span
		class="inline-block leading-tight font-normal group-hover:translate-x-1.5 transition duration-500 ease-out"
		>→</span
	></a
>
