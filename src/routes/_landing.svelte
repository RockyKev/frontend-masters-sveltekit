<script lang="ts">
	import { mdiGithub, mdiOpenInNew } from "@mdi/js"
	import Icon from "$components/Icon.svelte"
	import Logo from "$components/Logo.svelte"
</script>

<section class="landing">
	<h1>
		Frontend Masters <br> Notetaking Blog
		<Logo size="1.2em" />
	</h1>

	<p>
		Writing up notes as I get them from Frontend Masters!
	</p>
	<p>
		Hey Naas!
	</p>

	<p>
		~Rocky		
	</p>
	<!-- <p>
		I'm a full-stack engineer based in UT, USA. I care about CSS, typography,
		accessibility and cute things.
	</p>
	<p>
		In my free time I like to learn more about programming, study Japanese and
		explore new media.
	</p>
	<p>
		I'm currently doing engineering work at <a
			href="https://www.sourcestrike.com/"
			class="text-link"
			target="_blank"
			rel="noopener">SourceStrike</a
		>.
	</p> -->
	<hr class="bold" />
	<ul class="links">
		<!-- <li>
			<a
				href="https://github.com/c-bandy"
				title="GitHub profile"
				target="_blank"
				rel="noopener"
			>
				<Icon title="GitHub Icon" path={mdiGithub} size="1.5em" />
				<span>GitHub</span>
				<Icon path={mdiOpenInNew} />
			</a>
		</li> -->
		<a
		href="/blog"
		class="nav-link"
		>
		Jump straight to the Notes
	</a>
	</ul>
</section>

<style>
	.landing {
		grid-area: landing;
	}

	h1 :global(.svg-icon) {
		top: 0.15em; /* visual balance */
	}

	h1 {
		display: flex;
	    align-items: flex-end;
	}

	hr {
		width: 4em;
		margin: 0;
		margin-bottom: var(--line-space);
	}

	ul.links {
		display: flex;
		flex-direction: column;
		list-style-type: none;
		margin-bottom: var(--line-space);
	}

	ul.links li {
		float: left;
		margin-bottom: var(--line-space);
	}

	ul.links a {
		display: flex;
		align-items: center;
		float: left;
	}

	ul.links a:hover {
		text-decoration: underline;
	}

	ul.links span {
		padding-left: 0.75em;
		padding-right: 0.6em;
	}
</style>
