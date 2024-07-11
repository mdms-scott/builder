const heroes = [
    {
        name: "Abhorrant Archregent",
        unit_size: 1,
        points: 190,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Abhorrant Cardinal",
        unit_size: 1,
        points: 110,
        regiment_options: "0-1 Flesh-eater Noble, 0-1 Knights, Any Serfs",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Abhorrant Ghoul King",
        unit_size: 1,
        points: 140,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Abhorrant Ghoul King on Royal Terrorgheist",
        unit_size: 1,
        points: 380,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Abhorrant Ghoul King on Royal Zombie Dragon",
        unit_size: 1,
        points: 380,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Abhorrant Gorewarden",
        unit_size: 1,
        points: 160,
        regiment_options: "0-1 Flesh-eater Noble, 0-1 Serfs, Any Knights",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Crypt Haunter Courtier",
        unit_size: 1,
        points: 140,
        regiment_options: "0-1 Serfs, Any Crypt Horrors",
        notes: "This Hero can join an eligible regiment as a Flesh-eater Noble",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Crypt Infernal Courtier",
        unit_size: 1,
        points: 170,
        regiment_options: "0-1 Serfs, Any Crypt Flayers",
        notes: "This Hero can join an eligible regiment as a Flesh-eater Noble",
        base_size: "50mm",
        type: "hero"
    },
    {
        name: "Grand Justice Gormayne",
        unit_size: 1,
        points: 120,
        regiment_options: "0-1 Knights, Any Serfs",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Marrowscroll Herald",
        unit_size: 1,
        points: 120,
        regiment_options: "Any Serfs",
        notes: "This Hero can join an eligible regiment as a Flesh-eater Noble",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Nagash, Supreme Lord of the Undead",
        unit_size: 1,
        points: 880,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Royal Decapitator",
        unit_size: 1,
        points: 110,
        regiment_options: "Any Serfs",
        notes: "This Hero can join an eligible regiment as a Flesh-eater Noble",
        base_size: "32mm",
        type: "hero"
    },
    {
        name: "Ushoran, Mortarch of Delusion",
        unit_size: 1,
        points: 470,
        regiment_options: "0-1 Flesh-eater Noble, Any Flesh-eater Courts",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Varghulf Courtier",
        unit_size: 1,
        points: 180,
        regiment_options: "Any Knights, Any Serfs",
        notes: "This Hero can join an eligible regiment as a Flesh-eater Noble",
        base_size: "90 × 52mm",
        type: "hero"
    }
];

const units = [
    {
        name: "Crypt Flayers",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Knights, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Crypt Flayers (2 models)",
        unit_size: 2,
        points: 110,
        relevant_keywords: "Knights, Infantry",
        notes: "You can include 1 unit of this type for each Crypt Infernal Courtier in your army. This unit cannot be reinforced.",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Crypt Ghouls",
        unit_size: 20,
        points: 170,
        relevant_keywords: "Serfs, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Crypt Horrors",
        unit_size: 3,
        points: 150,
        relevant_keywords: "Knights, Infantry",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Crypt Horrors (2 models)",
        unit_size: 2,
        points: 100,
        relevant_keywords: "Knights, Infantry",
        notes: "You can include 1 unit of this type for each Crypt Haunter Courtier in your army. This unit cannot be reinforced.",
        base_size: "50mm",
        type: "unit"
    },
    {
        name: "Cryptguard",
        unit_size: 10,
        points: 120,
        relevant_keywords: "Serfs, Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Morbheg Knights",
        unit_size: 3,
        points: 170,
        relevant_keywords: "Knights, Cavalry",
        base_size: "75 × 42mm",
        type: "unit"
    },
    {
        name: "Royal Beastflayers",
        unit_size: 10,
        points: 120,
        relevant_keywords: "Serfs, Infantry",
        notes: "This unit cannot be reinforced.",
        base_size: "40mm [2], 32mm [2], 28.5mm [3], 25mm [3]",
        type: "unit"
    },
    {
        name: "Royal Terrorgheist",
        unit_size: 1,
        points: 280,
        relevant_keywords: "Monster",
        base_size: "130mm",
        type: "unit"
    },
    {
        name: "Royal Zombie Dragon",
        unit_size: 1,
        points: 290,
        relevant_keywords: "Monster",
        base_size: "130mm",
        type: "unit"
    }
];

export { heroes, units };
