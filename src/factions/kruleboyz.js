const heroes = [
    {
        name: "Breaka-boss on Mirebrute Troggoth",
        unit_size: 1,
        points: 220,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "80mm",
        type: "hero"
    },
    {
        name: "Gobsprakk, the Mouth of Mork",
        unit_size: 1,
        points: 380,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Killaboss on Corpse-rippa Vulcha",
        unit_size: 1,
        points: 290,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Killaboss on Great Gnashtoof",
        unit_size: 1,
        points: 220,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "105 × 70mm",
        type: "hero"
    },
    {
        name: "Killaboss with Stab-grot",
        unit_size: 1,
        points: 130,
        regiment_options: "Any Kruleboyz",
        notes: "This Hero can join an eligible regiment as a Mob Wrangler",
        base_size: "40mm [1], 25mm [1]",
        type: "hero"
    },
    {
        name: "Kragnos, the End of Empires",
        unit_size: 1,
        points: 680,
        regiment_options: "Any Kruleboyz",
        base_size: "130mm",
        type: "hero"
    },
    {
        name: "Murknob with Belcha-banna",
        unit_size: 1,
        points: 120,
        regiment_options: "Any Kruleboyz",
        base_size: "40mm",
        type: "hero"
    },
    {
        name: "Snatchaboss on Sludgeraker Beast",
        unit_size: 1,
        points: 320,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Swampboss Skumdrekk",
        unit_size: 1,
        points: 260,
        regiment_options: "0-1 Mob Wrangler, Any Kruleboyz",
        base_size: "120 × 92mm",
        type: "hero"
    },
    {
        name: "Swampcalla Shaman with Pot-grot",
        unit_size: 1,
        points: 120,
        regiment_options: "Any Infantry",
        base_size: "40mm [1], 25mm [1]",
        type: "hero"
    }
];

const units = [
    {
        name: "Beast-skewer Killbow",
        unit_size: 1,
        points: 160,
        relevant_keywords: "War Machine",
        base_size: "90 × 52mm",
        type: "unit"
    },
    {
        name: "Gutrippaz",
        unit_size: 10,
        points: 170,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Hobgrot Slittaz",
        unit_size: 10,
        points: 100,
        relevant_keywords: "Infantry",
        base_size: "25mm",
        type: "unit"
    },
    {
        name: "Kruleboyz Monsta-killaz",
        unit_size: 7,
        points: 120,
        relevant_keywords: "Infantry",
        notes: "This unit cannot be reinforced.",
        base_size: "40mm [1], 32mm [6], 28.5mm [1]",
        type: "unit"
    },
    {
        name: "Man-skewer Boltboyz",
        unit_size: 3,
        points: 110,
        relevant_keywords: "Infantry",
        base_size: "32mm",
        type: "unit"
    },
    {
        name: "Marshcrawla Sloggoth",
        unit_size: 1,
        points: 190,
        relevant_keywords: "Monster",
        base_size: "105 × 70mm",
        type: "unit"
    }
];

export { heroes, units };
