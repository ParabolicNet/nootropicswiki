<script>
	import { Router, Route } from "svelte-navigator";
	import {compounds} from "../data.js";
	import Home from "./Home.svelte";
	import Compound from "./Compound.svelte";
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

	<Route path="*">
		404
	</Route>
	</main>
</Router>