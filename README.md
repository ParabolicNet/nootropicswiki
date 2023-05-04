# beta.nootropicswiki.org V2

**A crude first version of the NootropicsWiki to get all relevant information into one place.**

Install dependencies: `npm i`

Run the project: `npm run dev`

## Adding a Compound

Each compound has an associated entry in `src/data.js` and an associated markdown file entry in `src/compounds/`.

The markdown file must be imported at the top of `src/data.js` when referenced in the object entry.

Blank entry (for copying):

```js
"": {
    name: "",
    iupac: "",
    pubchem_id: "",
    smiles: "",
    other_names: [
        ""
    ],
    moa: "",
    class: [
        ""
    ],
    related: [],
    interactions: [],
    md: replaceme
}
```

Example entry:

```js
"compound-42": {
    name: "COMPOUND-42", // Most commonly used name for this compound
    iupac: "9-(4-cyclo)-7-methyl-3,4", // Optional (only if not available)
    pubchem_id: "00000000", // Optional (only if not available)
    smiles: "CC1=CN21)C3=CC=CCNCC4", // Optional (only if not available)
    other_names: [
        "Brain Compound"
    ], // Optional
    moa: "method of action here", // Add ? if it is unknown
    class: [
        "Pro-Cognition",
        "Pro-Longevity"
    ], // Up to 4 entries here
    related: [
        "compound-78" // Make sure this references another entry's key, not the entry's name attribute.
    ],
    interactions: [], // Keep this empty (for now)
    md: md_tak_653 // The name of the markdown file reference
}
```

Example markdown entry (.md):

```md
## Mechanism of Action

(Detailed explanation of how the compound works and what receptors it modulates. Refer to sources often)
```

You can reference existing entries to see how entries work.