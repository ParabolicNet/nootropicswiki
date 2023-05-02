<script>
    import {compounds} from "../data.js";

    export let compound_code;
    let compound = compounds[compound_code];
    console.log(compound)

</script>

<main>
    <div class="gentle-flex">
    <div style="content">
        <h2>{compound.name}</h2>
        <p>MOA: {compound.moa}</p>
    </div>
    </div>
</main>