<script lang="ts">
	export let url: string;
	export let icon: string;
	export let alt: string;
</script>

<a target="_blank" href={url}>
	<img src={"https://img.shields.io/badge/" + icon} {alt} />
</a>
