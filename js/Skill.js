var Skills = {};
Skills.skills = 
[
 {
	 skillId: "CHARGE",
	 name: "Charge",
	 text1: 
		 "Run into enemies for double damage",
	text2:
		"You can charge into the three positions ahead.",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#.@..j..#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#.......#",
"#..@.j..#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#.......#",
"#...@j..#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#...!...#",
"#...@*..#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#.......#",
"#...@%..#",
"#.......#",
"#########"
],
		]
 },
 {
	 skillId: "ASSAULT",
	 name: "Assault",
	 text1: 
		 "Jump into enemies while running.",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#.@...j.#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#.......#",
"#..@..j.#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#...!...#",
"#...@.j.#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#....!..#",
"#....@*.#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#.......#",
"#....@%.#",
"#.......#",
"#########"
]]
		
 },
 {
	 skillId: "CORNER",
	 name: "Corner",
	 text1: 
		 "Attack an enemy against a wall for 2x damage",
	animation: 
		[
[
"#########",  
"#.......#",
"#....j#.#",
"#.@.....#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#....j#.#",
"#..@....#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#...@j#.#",
"#.......#",
"#.......#",
"#########"
],
[
"#########",  
"#...!...#",
"#...@*#.#",
"#.......#",
"#.......#",
"#########"
],
[
"#########",  
"#.......#",
"#...@%#.#",
"#.......#",
"#.......#",
"#########"
]
		]
 },
 {
	 skillId: "SPIN",
	 name: "Spin Slash",
	 text1: "Attack enemies in opposite directions",
	 text2: "Increased damage.",
	 hasActions: true,
	animation: 
		[
[
"#########",  
"#.......#",
"#...@j..#",
"#.j.....#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#.......#",
"#..j@*..#",
"#.......#",
"#.......#",
"#########",
"  LEFT   "
],
[
"#########",  
"#...!...#",
"#..*@j..#",
"#.......#",
"#.......#",
"#########",
"  RIGHT  "
],
[
"#########",  
"#...!...#",
"#..j@*..#",
"#.......#",
"#.......#",
"#########",
"  LEFT   "
],
[
"#########",  
"#...!...#",
"#..*@%..#",
"#.......#",
"#.......#",
"#########",
"   RIGHT "
],
[
"#########",  
"#.......#",
"#..%@%..#",
"#.......#",
"#.......#",
"#########",
"         "
]
		]
 },
 {
	 skillId: "SLASH",
	 name: "Slash",
	 text1: 
		 "Pass by an enemy while attacking",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#..@..j.#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#...@j..#",
"#.......#",
"#########",
],
[
"#########",  
"#....!..#",
"#....@..#",
"#....*..#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.....!.#",
"#....*@.#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#....%@.#",
"#.......#",
"#########",
]
		]
 },
 
 {
	 skillId: "BACKSLASH",
	 requirements: ["SLASH"],
	 name: "Backslash",
	 text1: 
		 "Pass by two enemies while attacking",
	animation: 
		[
[
"#########",  
"#...j...#",
"#.......#",
"#..@..j.#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#...j...#",
"#...@j..#",
"#.......#",
"#########",
],
[
"#########",  
"#....!..#",
"#...*@..#",
"#....*..#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#...%.!.#",
"#....*@.#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#...%...#",
"#....%@.#",
"#.......#",
"#########",
]
		]
 },
 
 {
	 skillId: "FINESSE",
	 name: "Finesse",
	 text1: "Prevent weapons from damaging on combat",
	 text2: "Double lifetime for all weapons",
	 animation: 
			[
[
"#########",  
"#...)...#",
"#.@.....#",
"#....)..#",
"#.......#",
"#########",
]
	]
 },
 {
	 skillId: "COUNTER",
	 name: "Counterattack",
	 text1: "20% chance to gain a free attack after being hit",
	 hasActions: true,
	 animation: 
			[
[
"#########",  
"#.......#",
"#.@...j.#",
"#.......#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#.......#",
"#..@.j..#",
"#.......#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#.......#",
"#...**..#",
"#.......#",
"#.......#",
"#########",
" Counter "
],
[
"#########",  
"#.......#",
"#...@%..#",
"#.......#",
"#.......#",
"#########",
],
		]		 
 },
 {
	 skillId: "RAGE",
	 name: "Rage",
	 text1: "Increase damage for consecutive attacks",
	 hasActions: true,
	 animation: 
			[
[
"#########",  
"#.......#",
"#..j@...#",
"#..jjj..#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#.......#",
"#..*@...#",
"#..jjj..#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#.......#",
"#..%@...#",
"#..*jj..#",
"#.......#",
"#########",
"         "
],
[
"#########",  
"#...!...#",
"#..%@...#",
"#..%*j..#",
"#.......#",
"#########",
" Wargh!  "
],
[
"#########",  
"#...!...#",
"#..%@...#",
"#..%%*..#",
"#.......#",
"#########",
" WAARGH! "
],
[
"#########",  
"#.......#",
"#..%@...#",
"#..%%%..#",
"#.......#",
"#########",
"         "
]
			]	
 },
 {
	 skillId: "BUILDUP",
	 name: "Build Up",
	 text1: "Stand fast to power up and unleash a strong blow.",
	 text2: "Strongly damages your weapon for 2x damage.",
	 hasActions: true,
	 animation: 
				[
	[
	"#########",  
	"#.......#",
	"#..@..j.#",
	"#.......#",
	"#.......#",
	"#########",
	" wait... "
	],
	[
	"#########",  
	"#.......#",
	"#..@.j..#",
	"#.......#",
	"#.......#",
	"#########",
	" wait... "
	],
	[
	"#########",  
	"#.......#",
	"#..@j...#",
	"#.......#",
	"#.......#",
	"#########",
	" wait... "
	],
	[
	"#########",  
	"#..!....#",
	"#..@*...#",
	"#.......#",
	"#.......#",
	"#########",
	" DIE!!!  "
	],
	[
	"#########",  
	"#.......#",
	"#..@%...#",
	"#.......#",
	"#.......#",
	"#########",
	"         "
	]
				]	
 },
 {
	 skillId: "BASH",
	 name: "Bash",
	 text1: 
		 "Push enemies back.",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#..@.j..#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#..@j...#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#..@*...#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#..@..j.#",
"#.......#",
"#########",
]
		]
 },
 {
	 skillId: "BACKFLIP",
	 name: "Backflip",
	 text1: 
		 "Run into a wall to jump backwards.",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#.#..@j.#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#.#.@j..#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#.#@j...#",
"#.......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"#.#.j.@.#",
"#.......#",
"#########",
]
		]
 },
 {
	 skillId: "WALLJUMP",
	 name: "Wall jump",
	 text1: 
		 "Step into a wall to jump a tile.",
	animation: 
		[
[
"#########",  
"#.......#",
"#.......#",
"#j......#",
"#@......#",
"#########",
],
[
"#########",  
"#.......#",
"#.......#",
"+j......#",
"#@......#",
"#########",
],
[
"#########",  
"#.......#",
"#@......#",
"#j......#",
"#.......#",
"#########",
]
		]
 },
 {
	 skillId: "SWEEP",
	 name: "Sweep",
	 text1: 
		 "Hit the three positions in front of you.",
	animation: 
		[
[
"#########",  
"#..j....#",
"#.@j....#",
"#..j....#",
"#.......#",
"#########",
],
[
"#########",  
"#..*....#",
"#.@*....#",
"#..*....#",
"#.......#",
"#########",
],
[
"#########",  
"#..%....#",
"#.@j....#",
"#..j....#",
"#.......#",
"#########",
],
[
"#########",  
"#..%....#",
"#.@*....#",
"#..*....#",
"#.......#",
"#########",
],
[
"#########",  
"#..%....#",
"#.@%....#",
"#..%....#",
"#.......#",
"#########",
]
		]
 },
 {
	 skillId: "ENDURANCE",
	 name: "Endurance",
	 text1:  "Increase Max HP by 50",
	 animation: 
			[
[
"#########",  
"#.......#",
"#.@.....#",
"#.......#",
"#.HP+...#",
"#########",
]
	]
 },
 {
	 skillId: "DESTRUCTION",
	 name: "Butcher",
	 text1:  "Increase Strength by 3",
	 animation: 
			[
[
"#########",  
"#.......#",
"#.@.....#",
"#.......#",
"#.Str+..#",
"#########",
]
	]
 },
 {
	 skillId: "DESTRUCTION2",
	 requirements: ["DESTRUCTION"],
	 name: "Crush",
	 text1:  "Increase Strength by 3",
	 animation: 
			[
[
"#########",  
"#.......#",
"#.@.....#",
"#.......#",
"#.Str++.#",
"#########",
]
	]	 
 },
 {
	 skillId: "DESTRUCTION3",
	 requirements: ["DESTRUCTION2"],
	 name: "Raze",
	 text1:  "Increase Strength by 3",
	 animation: 
			[
[
"#########",  
"#.......#",
"#.@.....#",
"#.......#",
"#.Str+++#",
"#########",
]
	]	 
 },
 {
	 skillId: "DARK_SIGHT",
	 name: "Dark Sight",
	 text1:  "Allows you to see in the dark",
	 animation: 
			[
	[
	"DDDDDDDDD",  
	"D@--    D",
	"D---    D",
	"D--     D",
	"D       D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@---   D",
	"D----   D",
	"D---    D",
	"D--     D",
	"DDDDDDDDD",
	]
			]
 },
 {
	 skillId: "DARK_SIGHT2",
	 requirements: ["DARK_SIGHT"],
	 name: "Black Light",
	 text1:  "See even more into the dark",
	 animation: 
			[
	[
	"DDDDDDDDD",  
	"D@--    D",
	"D---    D",
	"D--     D",
	"D       D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@---   D",
	"D----   D",
	"D---    D",
	"D--     D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@----  D",
	"D-----  D",
	"D----   D",
	"D---    D",
	"DDDDDDDDD",
	]
			]
 }, 
 {
	 skillId: "INFRAVISION",
	 requirements: ["DARK_SIGHT2"],
	 name: "Infravision",
	 text1:  "See light in darkness",
	 animation: 
			[
	[
	"DDDDDDDDD",  
	"D@--    D",
	"D---    D",
	"D--     D",
	"D       D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@---   D",
	"D----   D",
	"D---    D",
	"D--     D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@----  D",
	"D-----  D",
	"D----   D",
	"D---    D",
	"DDDDDDDDD",
	],
	[
	"DDDDDDDDD",  
	"D@----- D",
	"D------ D",
	"D------ D",
	"D----   D",
	"DDDDDDDDD",
	]
			]
 }, 
 {
	 skillId: "PACKER",
	 name: "Packer",
	 text1:  "Carry capacity + 5",
	 animation: 
			[
[
"#########",  
"#.....).#",
"#.@./...#",
"#....]..#",
"#.]....!#",
"#########",
]
	]
 },
 {
	 skillId: "COURAGE",
	 name: "Courage",
	 text1:  "Recover 1 HP for defeating an enemy",
	 animation: [
		[
			"#########",  
			"#.......#",
			"#..@j...#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#..@*...#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#..@....#",
			"#.......#",
			"#..HP++.#",
			"#########",
		]
	]
 },
 {
	 skillId: "HEROISM",
	 name: "Heroism",
	 text1:  "Recover 1 to 5 HP for defeating enemies.",
	 requirements: ["COURAGE"],
	 animation: [
		[
			"#########",  
			"#.......#",
			"#.......#",
			"#...j@..#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#.......#",
			"#...*@..#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#.......#",
			"#....@..#",
			"#..HP+3.#",
			"#########",
		]
	]
 },
 {
	 skillId: "WANDERER",
	 name: "Wanderer",
	 text1:  "Recover 10 HP for entering a new floor.",
	 animation: [
		[
			"#########",  
			"#.......#",
			"#.@<....#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#..@....#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#.......#",
			"#....@..#",
			"#.HP+10.#",
			"#########",
		]
	]
 },
 {
	 skillId: "EXPLORER",
	 name: "Explorer",
	 text1:  "Recover 25 HP for entering a new floor.",
	 requirements: ["WANDERER"],
	 animation: [
		[
			"#########",  
			"#.......#",
			"#.@<....#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#..@....#",
			"#.......#",
			"#.......#",
			"#########",
		],
		[
			"#########",  
			"#.......#",
			"#.......#",
			"#....@..#",
			"#.HP+25.#",
			"#########",
		]
	]
 }
];