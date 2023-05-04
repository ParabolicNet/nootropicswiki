import md_bromantane from "./compounds/md/bromantane.md";
import md_tak_653 from "./compounds/md/tak-653.md";

export const compounds = {
    "bromantane": {
        name: "Bromantane",
        iupac: "N-(4-bromophenyl)adamantan-2-amine",
        smiles: "C1C2CC3CC1CC(C2)C3NC4=CC=C(C=C4)Br",
        other_names: [
            "Bromantan",
            "Ladasten"
        ],
        moa: "TH Disinhibitor",
        class: [
            "Dopamine Upregulator",
            "Pro-Testerone"
        ],
        related: [
            "alcar"
        ],
        interactions: [],
        md: md_bromantane
    },
    "tak-653": {
        name: "TAK-653",
        iupac: "9-(4-cyclohexyloxyphenyl)-7-methyl-3,4-dihydropyrazino[2,1-c][1,2,4]thiadiazine 2,2-dioxide",
        smiles: "CC1=CN2CCS(=O)(=O)N=C2C(=N1)C3=CC=C(C=C3)OC4CCCCC4",
        other_names: [],
        moa: "AMPA PAM",
        class: [
            "Pro-Cognition"
        ],
        related: [
            "tak-137"
        ],
        interactions: [],
        md: md_tak_653
    }
}