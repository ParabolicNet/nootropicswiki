<script>
	import { Router, Route } from "svelte-navigator";
	import Home from "./Home.svelte";
	import Compound from "./Compound.svelte";
	import Article from "./Article.svelte";
</script>

<Router primary={false}>
	<main>
	<Route path="/">
		<Home />
	</Route>

	<Route path="hi">
		<Home />
	</Route>

	<Route path="details/:compound" let:params>
		<Compound
			compound_code={params.compound}
		/>
	</Route>

	<Route path="article/:article" let:params>
		<Article
			article_code={params.article}
		/>
	</Route>

	<Route path="*">
		404
	</Route>
	</main>
</Router>