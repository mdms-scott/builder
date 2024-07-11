const heroes = [
    {
        name: "Changecaster, Herald of Tzeentch",
        unit_size: 1,
        points: 140,
        regiment_options: "Any Daemon",
        notes: "This Hero can join an eligible regiment as a Tzeentchian Deceiver",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Curseling, Eye of Tzeentch",
        unit_size: 1,
        points: 170,
        regiment_options: "Any Arcanite",
        notes: "This Hero can join an eligible regiment as an Arcanite Cabalist",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Fateskimmer, Herald of Tzeentch on Burning Chariot",
        unit_size: 1,
        points: 170,
        regiment_options: "0-1 Tzeentchian Deceiver, Any Daemon",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Gaunt Summoner",
        unit_size: 1,
        points: 170,
        regiment_options: "0-1 Tzeentchian Deceiver, Any Disciples of Tzeentch",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Gaunt Summoner on Disc of Tzeentch",
        unit_size: 1,
        points: 250,
        regiment_options: "0-1 Tzeentchian Deceiver, Any Disciples of Tzeentch",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Kairos Fateweaver",
        unit_size: 1,
        points: 440,
        regiment_options: "0-1 Tzeentchian Deceiver, Any Disciples of Tzeentch",
        base_size: "100mm",
        type: "hero"
    },
    {
        name: "Lord of Change",
        unit_size: 1,
        points: 360,
        regiment_options: "0-1 Tzeentchian Deceiver, Any Disciples of Tzeentch",
        base_size: "100mm",
        type: "hero"
    },
    {
        name: "Magister",
        unit_size: 1,
        points: 120,
        regiment_options: "Any Arcanite",
        notes: "This Hero can join an eligible regiment as an Arcanite Cabalist",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Magister on Disc of Tzeentch",
        unit_size: 1,
        points: 160,
        regiment_options: "0-1 Arcanite Cabalist, Any Arcanite",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Ogroid Thaumaturge",
        unit_size: 1,
        points: 160,
        regiment_options: "Any Arcanite",
        notes: "This Hero can join an eligible regiment as an Arcanite Cabalist",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "The Changeling",
        unit_size: 1,
        points: 160,
        regiment_options: "Any Daemon",
        notes: "This Hero can join an eligible regiment as a Tzeentchian Deceiver",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Tzaangor Shaman",
        unit_size: 1,
        points: 160,
        regiment_options: "0-1 Arcanite Cabalist, Any Arcanite",
        base_size: "40mm",
        type: "hero"
    }
];

const units = [
    {
        name: "Blue Horrors and Brimstone Horrors",
        unit_size: 10,
        points: 120,
        relevant_keywords: "Daemon, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Burning Chariot of Tzeentch",
        unit_size: 1,
        points: 140,
        relevant_keywords: "Daemon, War Machine",
        base_size: "120 × 92mm",
        type: "unit"
    },
    {
        name: "Chaos Spawn of Tzeentch",
        unit_size: 1,
        points: 60,
        relevant_keywords: "Beast",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Exalted Flamer of Tzeentch",
        unit_size: 1,
        points: 130,
        relevant_keywords: "Daemon, Infantry",
        base_size: "75 × 42mm",
        type: "unit"
    },
    {
        name: "Flamers of Tzeentch",
        unit_size: 3,
        points: 120,
        relevant_keywords: "Daemon, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Jade Obelisk",
        unit_size: 10,
        points: 110,
        relevant_keywords: "Arcanite, Infantry",
        notes: "This unit cannot be reinforced.",
        base_size: "32mm [5], 28.5mm [5]",
        type: "unit"
    },
    {
        name: "Kairic Acolytes",
        unit_size: 10,
        points: 110,
        relevant_keywords: "Arcanite, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Pink Horrors",
        unit_size: 10,
        points: 140,
        relevant_keywords: "Daemon, Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Screamers of Tzeentch",
        unit_size: 3,
        points: 100,
        relevant_keywords: "Daemon, Beast",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Tzaangor Enlightened",
        unit_size: 3,
        points: 90,
        relevant_keywords: "Arcanite, Infantry",
        base_size: "40mm",
        type: "unit"
    },
    {
        name: "Tzaangor Enlightened on Discs of Tzeentch",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Arcanite, Cavalry",
        base_size: "40mm",
        type: "unit"
    },
    {
        name: "Tzaangor Skyfires",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Arcanite, Cavalry",
        base_size: "40mm",
        type: "unit"
    },
    {
        name: "Tzaangors",
        unit_size: 10,
        points: 150,
        relevant_keywords: "Arcanite, Infantry",
        base_size: "32mm",
        type: "unit"
    }
];

export { heroes, units };
