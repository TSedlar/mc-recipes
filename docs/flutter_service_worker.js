'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6143239b001484a62f106c09a1681a63",
"assets/assets/images/creation-arrow.png": "1d6b83e06103e3454b5e7f4609f24a82",
"assets/assets/images/creation-box.jpg": "779455d498b899a80382324aa0bf1309",
"assets/assets/images/creation-box.png": "0d9dd64f62ea896aa5d242b3342abea5",
"assets/assets/images/items/acacia-wood-stairs.png": "1532b879a2702b042b0f2f13cf16b625",
"assets/assets/images/items/activator-rail.png": "3fadd68674617c0e11128007678f5811",
"assets/assets/images/items/anvil.png": "d1c656c07fcb94a479d42850f382602e",
"assets/assets/images/items/arrow.png": "810f22e56e347f6ba623a7c4dc2181c8",
"assets/assets/images/items/beacon.png": "9ecd313da308a6842c2ac1ba038e3910",
"assets/assets/images/items/bed.png": "1f02639134544a4f4a35b629adc50fbf",
"assets/assets/images/items/birch-wood-stairs.png": "fd151d82ba2f304110eff6597cecd3c0",
"assets/assets/images/items/birch-wooden-plank.png": "30569a23f169c3189c70d42264f1e466",
"assets/assets/images/items/black-carpet.png": "8e5afecd5882b90276d1d251969c205c",
"assets/assets/images/items/black-stained-clay.png": "2074ac87c37bc0da2d406edd2c3e448c",
"assets/assets/images/items/black-stained-glass-pane.png": "ec51c0c3d1ff0cf107487b538139c8e2",
"assets/assets/images/items/black-stained-glass.png": "1ba7f9a1623c3b02d8c84eb16cd2bfb6",
"assets/assets/images/items/black-wool.png": "77573b088766d870cf228c2d04c6b3db",
"assets/assets/images/items/blaze-powder.png": "a9e709a2fbb829ff0d2d73ac490eccb9",
"assets/assets/images/items/block-of-coal.png": "1e17c4b6b38bf79a31f01b5f0ed9b060",
"assets/assets/images/items/blue-carpet.png": "9db62bf7ba4ae29aa43caca8c3f1b707",
"assets/assets/images/items/blue-stained-clay.png": "faff741ba692f3e5b7d9a95d12e88210",
"assets/assets/images/items/blue-stained-glass-pane.png": "5de86aabcb09f4564f5cbf26cea4ba35",
"assets/assets/images/items/blue-stained-glass.png": "6f2cf750b5f214d208ab1f20ba18e0ff",
"assets/assets/images/items/blue-wool.png": "57272fd04e855e7f41725028b74c2695",
"assets/assets/images/items/boat.png": "329c542ce1d65ad918d2717d7046fdb3",
"assets/assets/images/items/book-and-quill.png": "3f7fb6b98fb22c529836bf91cd9a17ba",
"assets/assets/images/items/book.png": "df4c79b64cf84f840d8401dd9a1683f3",
"assets/assets/images/items/bookshelf.png": "ac15d34c22b84754cb712d72bd83416a",
"assets/assets/images/items/bow.png": "f6c7c5792295e92f3ee060dd96e3d85a",
"assets/assets/images/items/bowl.png": "dc94a8c8590f65098605911e27e5383a",
"assets/assets/images/items/bread.png": "a9a1f10a56b68bb556369239d2b85c46",
"assets/assets/images/items/brewing-stand.png": "d6b6e813076b60b522210107347384b6",
"assets/assets/images/items/brick-slab.png": "b80903bc918aeba5ed1abdd5f4e5cf0a",
"assets/assets/images/items/brick-stairs.png": "48adef1f96d4257df83df763f395b5e9",
"assets/assets/images/items/brick.png": "825f96f2ecd3137b0de8dc0c9f23d6b3",
"assets/assets/images/items/brown-carpet.png": "f11b8c45f1f0827a3959ca8b974aa128",
"assets/assets/images/items/brown-stained-clay.png": "5f8bdc351bee2a46e5568e6cc22da79f",
"assets/assets/images/items/brown-stained-glass-pane.png": "fe2f7a6c47a6b06f4727ec69f96063cb",
"assets/assets/images/items/brown-stained-glass.png": "63f8d6c45cfaae4397c7ea2f6373ecff",
"assets/assets/images/items/brown-wool.png": "77c56a98f895116621360a48573ae5ca",
"assets/assets/images/items/bucket.png": "ec6a4b1f11d7645c5532d5b1930d7a29",
"assets/assets/images/items/burning-furnace.png": "6abde104eb00dc0640d0865736893bbe",
"assets/assets/images/items/cake.png": "0187c02203d9d74653845d3b286b1b12",
"assets/assets/images/items/carrot-on-a-stick.png": "ebddce0dab3a1e97b60f16ae65ed64a6",
"assets/assets/images/items/cauldron.png": "601250b0106e5252de5a84b1e192e6dd",
"assets/assets/images/items/chest.png": "732fd22a18a9bb825bb7abdab044a323",
"assets/assets/images/items/chiseled-quartz-block.png": "d4bf0323c5a7cf447f3a8fe75715dea1",
"assets/assets/images/items/chiseled-sandstone.png": "9c2f175faadf24a5757d54259075a8ac",
"assets/assets/images/items/clay-block.png": "1a21e8441a897cfcd987e55d119ec2c6",
"assets/assets/images/items/cobblestone-slab.png": "faa33fbfbafc6ae3c166d40f73f0c75f",
"assets/assets/images/items/cobblestone-stairs.png": "17db3a61873a84efef20a2241804414c",
"assets/assets/images/items/cobblestone-wall.png": "7fe36a1ce8f55fde18008962e713bf13",
"assets/assets/images/items/compass.png": "4995a82f2b5681be0713d16337d0d7f7",
"assets/assets/images/items/cookie.png": "4776eb01101d65d23df7f615a0fa6450",
"assets/assets/images/items/cyan-carpet.png": "870bef44882917d7052b85330b9a0367",
"assets/assets/images/items/cyan-dye.png": "234094da39e005ba529796c39c86b2a0",
"assets/assets/images/items/cyan-stained-clay.png": "e3f92f3150ab8bf534ab0f35361c1ffa",
"assets/assets/images/items/cyan-stained-glass-pane.png": "e7e194b83cac794d487ee2697b187132",
"assets/assets/images/items/cyan-stained-glass.png": "9da68042323c36b8fc5b00ca3b03cc8d",
"assets/assets/images/items/cyan-wool.png": "176a99b674f0656e4578a85612c579a1",
"assets/assets/images/items/dandelion-yellow-dye.png": "3b363455cf123f6ceb1da8f7169aafb8",
"assets/assets/images/items/dark-oak-wood-stairs.png": "ab911a9de6ba2c8f2048383d2799170e",
"assets/assets/images/items/daylight-sensor.png": "33c8cd80654651129a39231c7ca5c849",
"assets/assets/images/items/detector-rail.png": "4a105822b7fa4be8857f6da283166105",
"assets/assets/images/items/diamond-axe.png": "25092d1fb7329792664a94b3ea1eb552",
"assets/assets/images/items/diamond-block.png": "bcf4ebc3a44c8461ffd1a3f4b4e7e64a",
"assets/assets/images/items/diamond-boots.png": "ce41407b596da696f4cbe04bfd87beb0",
"assets/assets/images/items/diamond-chestplate.png": "3952762f35bfa07fe07c08c2897bc9a4",
"assets/assets/images/items/diamond-helmet.png": "bbb0169d53f33536e8bf637e4de30f9a",
"assets/assets/images/items/diamond-hoe.png": "62b07832f6ee95102bcc00ea9bac694d",
"assets/assets/images/items/diamond-leggings.png": "75d05144c3b8138731df66edcea3bc0e",
"assets/assets/images/items/diamond-pickaxe.png": "fd1109dd23f1f5f28cc8bc7a74f742c2",
"assets/assets/images/items/diamond-shovel.png": "fabf6c82ef647b79ce4a2bfb3342bdb8",
"assets/assets/images/items/diamond-sword.png": "09e093eff62d2108088516933b94ed3c",
"assets/assets/images/items/dispenser.png": "8e3e75aed90a724562885ce98eb5de9c",
"assets/assets/images/items/dropper.png": "9835758d5ced0915a1375e94d77a09df",
"assets/assets/images/items/empty-map.png": "4fa240da76b9415d1f5dace7f956af6f",
"assets/assets/images/items/enchantment-table.png": "02fdaa70e10813c6a3cbb4f430c490c1",
"assets/assets/images/items/ender-chest.png": "52367936e25fba11ce66bcaa8bacfd74",
"assets/assets/images/items/eye-of-ender.png": "fa45fd180babba7b22f6465fde45f44c",
"assets/assets/images/items/fence.png": "be3767565f93bea30bc4ce904b5bcde1",
"assets/assets/images/items/fermented-spider-eye.png": "117029cdb75c89375774f4fa07e11ff3",
"assets/assets/images/items/fire-charge.png": "cc0429ac1c46c9b3edd84d033c421917",
"assets/assets/images/items/firework-rocket.png": "298f020ad0058e99de95663c3b8e08a2",
"assets/assets/images/items/firework-star.png": "2ce130543e6282c54203a9f7ad887f79",
"assets/assets/images/items/fishing-rod.png": "f28f9670e0786c32fba1cf3fd0f15bb2",
"assets/assets/images/items/flint-and-steel.png": "831d49a09255b91e43817da6bcdaac79",
"assets/assets/images/items/furnace.png": "8bfd74fadbcacd2953db01076fb1b015",
"assets/assets/images/items/glass-bottle.png": "8ddfb8e424ae9caa438a716904f67a68",
"assets/assets/images/items/glass-pane.png": "9bfca65ee4a7d5eab1903e14cba254d6",
"assets/assets/images/items/glistering-melon.png": "9f07ba24e541536366af0ce13a48d819",
"assets/assets/images/items/glowstone-block.png": "dcc4462f017c0dae7e7921e702cfde27",
"assets/assets/images/items/gold-axe.png": "243323dfa47f7539a979d1e44e1322f6",
"assets/assets/images/items/gold-block.png": "ff258b26b501f57e7ecf3da7cd193b40",
"assets/assets/images/items/gold-boots.png": "6cb68663551275fa24f029b65dbbb9ec",
"assets/assets/images/items/gold-chestplate.png": "07cf94f826f2cfd30f502f87701e6b5e",
"assets/assets/images/items/gold-helmet.png": "da5ba074da7f2990142e1847401068b1",
"assets/assets/images/items/gold-hoe.png": "b122e9c797cb1b83c47b9ca0bab6e706",
"assets/assets/images/items/gold-legggings.png": "e180fdde5a455cb9d6ff2a4be1f6ddbe",
"assets/assets/images/items/gold-nugget.png": "c999c6c53c78d2dd96bb47074676b7cd",
"assets/assets/images/items/gold-pickaxe.png": "b0b6a56d1792e460694cad6a46e72d9f",
"assets/assets/images/items/gold-shovel.png": "8904e64cb66194fcb55e5d22aa1aa1ba",
"assets/assets/images/items/gold-sword.png": "5945e1efb33d00b077fedcb12c6dc64c",
"assets/assets/images/items/golden-apple.png": "ec5623fc876b31e6d3e5dd40b5a8f0f4",
"assets/assets/images/items/golden-carrot.png": "d90ddbdb8cfbf4c7adbd792d8f07a2c5",
"assets/assets/images/items/gray-carpet.png": "8d3a69126634b0b9427a667777dc2d0c",
"assets/assets/images/items/gray-dye.png": "9b1c2420959307d40774c7c6cfb5a930",
"assets/assets/images/items/gray-stained-clay.png": "465630dc235802728673e2b0901894ca",
"assets/assets/images/items/gray-stained-glass-pane.png": "2e4c41e795f691e7e5e4654dbeb884a4",
"assets/assets/images/items/gray-stained-glass.png": "429c3a8b6ca8d46550adef85b31e7361",
"assets/assets/images/items/gray-wool.png": "471c6256921b24ac9bfa666ab4a2a925",
"assets/assets/images/items/green-carpet.png": "8a0569ab4681078f4698f46392b28e34",
"assets/assets/images/items/green-stained-clay.png": "d41606d27ebd5a6eaa812f34c2da00d2",
"assets/assets/images/items/green-stained-glass-pane.png": "9c8902a942beb0c7875375732f5d7bc6",
"assets/assets/images/items/green-stained-glass.png": "15521af5e4e48059939ce4e1dc1b1be2",
"assets/assets/images/items/green-wool.png": "adbe721709448eee6e658ca00b3d59d6",
"assets/assets/images/items/hay-bale.png": "8c369e6985d2d55ac1a6adfb87b589f3",
"assets/assets/images/items/hopper.png": "40e637c51ee72952f266b0ef53939a45",
"assets/assets/images/items/iron-axe.png": "eb3c631e1a8c4562608c1ff440970508",
"assets/assets/images/items/iron-bars.png": "f16520a18eae6ea408f2d6aa70b63950",
"assets/assets/images/items/iron-block.png": "4b8233f75454b0b26c505a6471cb9c00",
"assets/assets/images/items/iron-boots.png": "952de5d1713a389291b30d54f62ae4c1",
"assets/assets/images/items/iron-chestplate.png": "9f3b8cb6943a2d745bfda7fec99f1bf6",
"assets/assets/images/items/iron-door.png": "1f5164647ec9d3b953233bd685454d2d",
"assets/assets/images/items/iron-helmet.png": "9376ab3aab6c807b8b26609c30ea8489",
"assets/assets/images/items/iron-hoe.png": "6027f932aad95f5fe25562458c0bc528",
"assets/assets/images/items/iron-leggings.png": "0f5b0202476cd18951c58fe61ca3d04d",
"assets/assets/images/items/iron-pickaxe.png": "a03470f1a177d11d41c652d3b5a0d977",
"assets/assets/images/items/iron-shovel.png": "38165b57d3b7eb7e3295bc5ffbe0c344",
"assets/assets/images/items/iron-sword.png": "52f6876cdb03e220f4fca96c53caa254",
"assets/assets/images/items/item-frame.png": "17c3d51ede71b99e3eda58b3315eee75",
"assets/assets/images/items/jack-o-lantern.png": "1f53843cefe3fd838bf6cdde1ca0b3f0",
"assets/assets/images/items/jukebox.png": "cb19b14fe740877aa53672cef27853b0",
"assets/assets/images/items/jungle-wood-stairs.png": "68c8bd5811923cd9b1c8827fedc0dabd",
"assets/assets/images/items/jungle-wooden-plank.png": "fe09444247d59aa5c74a35b9f160ce28",
"assets/assets/images/items/ladder.png": "7d47e28270d3fdbaf9bf1d1d47f21796",
"assets/assets/images/items/lapis-lazuli-block.png": "4d91f02218dc4bae221575e5d485493b",
"assets/assets/images/items/lead.png": "17b2486d6c10e8e68948aae6b6806fda",
"assets/assets/images/items/leather-boots.png": "924bb4f295c04013d9cb214456d428e9",
"assets/assets/images/items/leather-cap.png": "417bc91c9eb3598b6450b9f9b8feaa21",
"assets/assets/images/items/leather-pants.png": "5b0a0e2258c75530675f2a1e37af283f",
"assets/assets/images/items/leather-tunic.png": "d40fed79c13daa1a5d9da9f1dde55708",
"assets/assets/images/items/lever.png": "c496483562d457782626b566809ccc25",
"assets/assets/images/items/light-blue-carpet.png": "83ed6d340b308b94b0423f002e3dfe3f",
"assets/assets/images/items/light-blue-dye.png": "4874171a2e53a5f8a11b2d863effb6a4",
"assets/assets/images/items/light-blue-stained-clay.png": "b17171d8ae2398669a8d88fe3ee18f06",
"assets/assets/images/items/light-blue-stained-glass-pane.png": "c14884d9eec6bd88acedc7fdbe8be93b",
"assets/assets/images/items/light-blue-stained-glass.png": "9e62afff4180205c6bdc7f61c0531182",
"assets/assets/images/items/light-blue-wool.png": "1bbeb09d0cd5b816b1c5f83d0782b83d",
"assets/assets/images/items/light-gray-carpet.png": "838d2315b97075b6b53f9df93a2f58ce",
"assets/assets/images/items/light-gray-dye.png": "bb1de418a896dca1d157d9d1012b248c",
"assets/assets/images/items/light-gray-stained-clay.png": "6c4e9f9122a46722604410b7094a77af",
"assets/assets/images/items/light-gray-stained-glass-pane.png": "f91473689cfd14e1289f8a7f39282808",
"assets/assets/images/items/light-gray-stained-glass.png": "51724a5ed914777bf0927a6f66207a41",
"assets/assets/images/items/light-gray-wool.png": "8f30912534c6bba8772d349d63200a86",
"assets/assets/images/items/lime-carpet.png": "8574e3c4f5c76190bc2661956a944cd0",
"assets/assets/images/items/lime-dye.png": "eab99039e859b06abd4472c45fe01bab",
"assets/assets/images/items/lime-stained-clay.png": "099c708d10742f306021214b367f0ee0",
"assets/assets/images/items/lime-stained-glass-pane.png": "2033704a2f18c8517cec920dbeb7d987",
"assets/assets/images/items/lime-stained-glass.png": "31e591ec90df082f0a46bc23c06e1f38",
"assets/assets/images/items/lime-wool.png": "c8252691b5352e3fcf04ea143128c6e4",
"assets/assets/images/items/magenta-carpet.png": "8b7e05cb37f10e0cce34e18bfcf64270",
"assets/assets/images/items/magenta-dye.png": "d41a0508291c112673678e0cd557c751",
"assets/assets/images/items/magenta-stained-clay.png": "0c66efab4ddc315aadfbbcf06014cd83",
"assets/assets/images/items/magenta-stained-glass-pane.png": "a82e8d2e89e8c0dc4b359e8fdd317982",
"assets/assets/images/items/magenta-stained-glass.png": "9b6937092a4cb88b815f3d1c6b28af13",
"assets/assets/images/items/magenta-wool.png": "b9eacf465fef22dc091e5b4fa05fc38c",
"assets/assets/images/items/magma-cream.png": "429f1019562ea7ba7e34a3b540229b3d",
"assets/assets/images/items/melon-block.png": "5c46c8992bc201a67ada434469e48aca",
"assets/assets/images/items/melon-seeds.png": "53d6d68392f1abe41dae141eaa34c314",
"assets/assets/images/items/minecart-with-chest.png": "ed3bb96ff29558ae0bd6cb868c5beeea",
"assets/assets/images/items/minecart-with-furnace.png": "abefe4e1d3bf29034df4ebc902e21695",
"assets/assets/images/items/minecart-with-hopper.png": "315e6f74a34273722e6543458685b15a",
"assets/assets/images/items/minecart-with-tnt.png": "f6deadccd6c2112686b069dff84df13e",
"assets/assets/images/items/minecart.png": "344303265bf9e066c9a48081d5de77dc",
"assets/assets/images/items/mossy-cobblestone-wall.png": "c1e7fd10b9e885c8d37af4f5ac1d07ff",
"assets/assets/images/items/mushroom-stew.png": "b58a163266c1edebffa6d99118042bba",
"assets/assets/images/items/nether-brick-fence.png": "23616001dfb6b44f235a7c7bf62fbc03",
"assets/assets/images/items/nether-brick-slab.png": "af34aba97685bec5530ca2a3d6845359",
"assets/assets/images/items/nether-brick-stairs.png": "18d916c903edf763190d3d01892fedc7",
"assets/assets/images/items/nether-brick.png": "ac5109ca42c5a74f9f8c7e1aed59386c",
"assets/assets/images/items/note-block.png": "991597eb3360d2827719fce401a8df93",
"assets/assets/images/items/orange-carpet.png": "ef904dc3a38cce7e5729ffae4d9e4471",
"assets/assets/images/items/orange-dye.png": "90cd582fd283d2dcafba2e97752fa589",
"assets/assets/images/items/orange-stained-clay.png": "0b501e8f9b8714485642cedfd495bc81",
"assets/assets/images/items/orange-stained-glass-pane.png": "a1594fb0db8f989a0486616606eecd22",
"assets/assets/images/items/orange-stained-glass.png": "7f77cebb504e6d8e66986d6a1b2dbd54",
"assets/assets/images/items/orange-wool.png": "087611359b170568df9167724592dc02",
"assets/assets/images/items/painting.png": "3a089e70845fae5b123611a00137ea0a",
"assets/assets/images/items/paper.png": "f407a5045be6d463d4eb5ca609c29c62",
"assets/assets/images/items/pillar-quartz-block.png": "450e1f6da1d832662efbf217bdb9762b",
"assets/assets/images/items/pink-carpet.png": "484885a626d6097b4e210157b2b330d0",
"assets/assets/images/items/pink-dye.png": "41a143e77e97608d571ef258eca3de52",
"assets/assets/images/items/pink-stained-clay.png": "b86342258addc52f5e5d3172b6c0dbd5",
"assets/assets/images/items/pink-stained-glass-pane.png": "fa0c53e4afa568ef1a76c0f22a6cc6ce",
"assets/assets/images/items/pink-stained-glass.png": "a15ea7804e7fe7954d645215a3c2a3f3",
"assets/assets/images/items/pink-wool.png": "3e506a84cb354881aefed6d8e595ad80",
"assets/assets/images/items/piston.png": "52a29bc2de01f9b6c247db228817cbf3",
"assets/assets/images/items/powered-rail.png": "ae5a5ebf6182e5a6d22ab8858b31c8fe",
"assets/assets/images/items/pumpkin-pie.png": "8e40438dc91977908b22672c9925ac71",
"assets/assets/images/items/purple-carpet.png": "7284a6e307bd76579ccab8a300ba673b",
"assets/assets/images/items/purple-dye.png": "486f2921b112c5bbc68cdb89c708f70e",
"assets/assets/images/items/purple-stained-clay.png": "c8e1e8b8b1a3d3f62cb26873d7fb9cd5",
"assets/assets/images/items/purple-stained-glass-pane.png": "4024d3a684f4a5c84360009794605ccd",
"assets/assets/images/items/purple-stained-glass.png": "86d4b5203f2740edf30471889b281149",
"assets/assets/images/items/purple-wool.png": "c4779614c47abea069812ff8b1da8510",
"assets/assets/images/items/quartz-block.png": "aeb5060bd7a1031413e5582d82c1fb26",
"assets/assets/images/items/quartz-slab.png": "f8bf59d5d9cfe108089e0a6ddeaffdfa",
"assets/assets/images/items/quartz-stairs.png": "4f8821079e6bcc9902b1ba2bc0809ae7",
"assets/assets/images/items/rail.png": "e7ae1b97680fa37ac5b8db8b2a25b45e",
"assets/assets/images/items/red-carpet.png": "1cec790c719e1374656858d9f774c80c",
"assets/assets/images/items/red-stained-clay.png": "aaa5b26c3c220e3ed7bcabfe8bfb9bdf",
"assets/assets/images/items/red-stained-glass-pane.png": "d1e328b86d6ce8775bb11fcbad8105f9",
"assets/assets/images/items/red-stained-glass.png": "2f5bc2a97b3b1fa8a812a2e7558edb13",
"assets/assets/images/items/red-wool.png": "8dfde2cd263799bf485563b3568a64d4",
"assets/assets/images/items/redstone-block.png": "ebe2e295ab83f742a5a4733bebd35a98",
"assets/assets/images/items/redstone-comparator.png": "3be49dab6e8b39dbe8a82c44d1f36f97",
"assets/assets/images/items/redstone-repeater.png": "4b376b23f4d113f13b63ea82104f14f9",
"assets/assets/images/items/sandstone-slab.png": "2d737e8f6b8e2eb8ad3a3dc43e3ee1f1",
"assets/assets/images/items/sandstone-stairs.png": "8513ea771b06c0fb92cd442c9a458e9c",
"assets/assets/images/items/sandstone.png": "5486f57f0f412a96e26eaf09a3d256ca",
"assets/assets/images/items/shears.png": "967d493f73afa5e153976feb531581c6",
"assets/assets/images/items/sign.png": "f0a1f69722fe46e5b1066c8586cbbd0c",
"assets/assets/images/items/smooth-sandstone.png": "22e8203eb2193d4353b212f4092c1a4d",
"assets/assets/images/items/spruce-wood-stairs.png": "e78307da4d14ecf5237103d109a83268",
"assets/assets/images/items/spruce-wooden-plank.png": "9ee5647f7eec62ecf3e9a589d1f075f7",
"assets/assets/images/items/stick.png": "108c2d072158db0086f5a9cfac923af0",
"assets/assets/images/items/sticky-piston.png": "319d6dcf06b4035bfd2d1c4169bf9a6e",
"assets/assets/images/items/stone-axe.png": "82a225d2ae580f5cd54e396737e6009e",
"assets/assets/images/items/stone-brick-slab.png": "ad0e625a9e820718892dc55dd19e6ae1",
"assets/assets/images/items/stone-brick-stairs.png": "35b068513071f97051331a569a868c9e",
"assets/assets/images/items/stone-button.png": "091e0bb7dde809cedd2cd8b74c4847a7",
"assets/assets/images/items/stone-hoe.png": "e8d87ae8351712e9f3b4102f7147051f",
"assets/assets/images/items/stone-pickaxe.png": "5df2c7f66c31fe131c1955f3f50931ab",
"assets/assets/images/items/stone-pressure-plate.png": "4041e18868877973541c4d5223e58abb",
"assets/assets/images/items/stone-shovel.png": "c0160bff1fb04533eadcbd006ce444da",
"assets/assets/images/items/stone-slab.png": "798d0614dcc33d25bda7852f493d2779",
"assets/assets/images/items/stone-sword.png": "65de7badc1c651c67da963ecb827152e",
"assets/assets/images/items/tnt.png": "5b53da334c27108ef5f04b31eb2d0ca1",
"assets/assets/images/items/torch.png": "4c414f2db954b150ddbff5bc1fd6aa03",
"assets/assets/images/items/trapdoor.png": "dad5b5b3f09562cf38c9a766f6bf2652",
"assets/assets/images/items/trapped-chest.png": "d963517e632aed3e0cf4018dc4d1b383",
"assets/assets/images/items/tripwire-hook.png": "11b76d72ffd2c9a4a858271df92fe258",
"assets/assets/images/items/weighted-pressure-plate-heavy.png": "d38dd617d7e87c0a6eed8515bb14acff",
"assets/assets/images/items/weighted-pressure-plate-light.png": "a7583454372301f97d7d9360a266fdc2",
"assets/assets/images/items/white-carpet.png": "5c11780ba3b9be7bb77f326207461947",
"assets/assets/images/items/white-stained-clay.png": "5dd77f564c1a2fdbc8456f02b0103a90",
"assets/assets/images/items/white-stained-glass-pane.png": "b84e2e803ab3e723f2a59b8ae39864c8",
"assets/assets/images/items/white-stained-glass.png": "f00ece4295e8d5f0d19da28c726b3368",
"assets/assets/images/items/white-wool.png": "4fd67a0d857e29737f01f9e164eeba0c",
"assets/assets/images/items/wood-stairs.png": "1e82a227ee123d0cb61d6ef9f3da7cc3",
"assets/assets/images/items/wooden-axe.png": "aaefefd8951768d23249091de961cf69",
"assets/assets/images/items/wooden-button.png": "1d1ed974ff6aa5c968c3acd099ae7ae3",
"assets/assets/images/items/wooden-door.png": "0d8221b1cda66f107535973554a86470",
"assets/assets/images/items/wooden-hoe.png": "be608157348c0ffa6343cfc8c0dc6b0b",
"assets/assets/images/items/wooden-pickaxe.png": "7ec50a26007da1ce7041e025aa57155c",
"assets/assets/images/items/wooden-plank.png": "c075224e4878a6c6766efd46d492bd2a",
"assets/assets/images/items/wooden-pressure-plate.png": "e4db7381a430a58af98b91ba07f1f68d",
"assets/assets/images/items/wooden-shovel.png": "c2fa8295d063e83f91a5bb2a8b921f66",
"assets/assets/images/items/wooden-slab.png": "d06d7efca80c7853ee3f7e6cf494ca4f",
"assets/assets/images/items/wooden-sword.png": "8c33bfa7d73238d79b4a77f3d14e67a1",
"assets/assets/images/items/yellow-carpet.png": "b4a604b9a85de64f4ade8374a4fc57a7",
"assets/assets/images/items/yellow-stained-clay.png": "d4f36735404ff06ba864757e2c95cbfd",
"assets/assets/images/items/yellow-stained-glass-pane.png": "34c7746c4f51e142d411df2bd7807d58",
"assets/assets/images/items/yellow-stained-glass.png": "805c614e3ba4d21cd27b7b831acb2b52",
"assets/assets/images/items/yellow-wool.png": "e143671ef00700bf2ff0d7890073a018",
"assets/assets/images/recipes/acacia-wood-stairs.png": "af0defc98090fef1bd1ecc405e0e9ade",
"assets/assets/images/recipes/activator-rail.png": "805f97dbe6267dfb6661f5f7d01a71e2",
"assets/assets/images/recipes/anvil.png": "3e6e0c3b0fc058e3f4ab4292d4772401",
"assets/assets/images/recipes/arrow.png": "4bf00e03146f05147e95cda74253c0ef",
"assets/assets/images/recipes/beacon.png": "893a40d78981fbad20a7bf5885cd9b2b",
"assets/assets/images/recipes/bed.png": "4110460866a50d2587aed61a600be6d6",
"assets/assets/images/recipes/birch-wood-stairs.png": "14f9ece3c10c355af1a20256ecfed540",
"assets/assets/images/recipes/birch-wooden-plank.png": "cff4c454652c0b48d5d0e597ac3ee8e9",
"assets/assets/images/recipes/black-carpet.png": "de1350482ee3fe886eb07df4f2f41872",
"assets/assets/images/recipes/black-stained-clay.png": "62d3744ba136355c12c518a12baa17d1",
"assets/assets/images/recipes/black-stained-glass-pane.png": "fb97b42009e9cae4210bd2cca207a5e7",
"assets/assets/images/recipes/black-stained-glass.png": "c4cc58a642624b6cecfd2d93d23173c4",
"assets/assets/images/recipes/black-wool.png": "a17dbb34a79096a4773da05612425512",
"assets/assets/images/recipes/blaze-powder.png": "db2f57431e1a78ec2c2961a62dcc09a0",
"assets/assets/images/recipes/block-of-coal.png": "4afc87d04e5f10c6adf0078dd4855826",
"assets/assets/images/recipes/blue-carpet.png": "4f067569173b9f2c1116da5041e88f8e",
"assets/assets/images/recipes/blue-stained-clay.png": "f5c8b20bbda437fe4135b328a3ecd432",
"assets/assets/images/recipes/blue-stained-glass-pane.png": "33b7332a068fe4b4e93ded58ed55c568",
"assets/assets/images/recipes/blue-stained-glass.png": "36ea2db1cd620ac0f4f99a5374f292fe",
"assets/assets/images/recipes/blue-wool.png": "5a126ceab92c5a873f292f24112ddd3f",
"assets/assets/images/recipes/boat.png": "c32b71b69f5b916e2be367eee878d691",
"assets/assets/images/recipes/book-and-quill.png": "36a466d8f04265c8d50aab6b55460ccc",
"assets/assets/images/recipes/book.png": "29b393fab7630fb227099d11c082d904",
"assets/assets/images/recipes/bookshelf.png": "2f7bed4348b4c2cc60a904d47125e337",
"assets/assets/images/recipes/bow.png": "326869e6b4136d5052cb2ad0d8858f55",
"assets/assets/images/recipes/bowl.png": "826dd82f21fdfe32d9aa8372af5d5f01",
"assets/assets/images/recipes/bread.png": "ddeff24a154e7ff1ae8b88dcb0371d6c",
"assets/assets/images/recipes/brewing-stand.png": "84a240d63957dc3a16f513f461d83cb7",
"assets/assets/images/recipes/brick-slab.png": "6baea7799d2daaba2ee4b49dc8082a8e",
"assets/assets/images/recipes/brick-stairs.png": "82510fe1dfce5fb15b1441668b0c3737",
"assets/assets/images/recipes/brick.png": "93dd7e9083377cddc8a5af211a056415",
"assets/assets/images/recipes/brown-carpet.png": "016f66873881433274540bc197faea77",
"assets/assets/images/recipes/brown-stained-clay.png": "c6946a581bc1e9219cfb67d0df100710",
"assets/assets/images/recipes/brown-stained-glass-pane.png": "503ad9c1fab8b99c04c8a74ce5762a08",
"assets/assets/images/recipes/brown-stained-glass.png": "dcd267a130fe32fbe5c2b61235e427cc",
"assets/assets/images/recipes/brown-wool.png": "7eb3e314f1a856c5457fb3103ff2ed0a",
"assets/assets/images/recipes/bucket.png": "bb13b5dfcb3fbd8812233525ec316b60",
"assets/assets/images/recipes/burning-furnace.png": "8932636b82ac9038e751484ac5887de7",
"assets/assets/images/recipes/cake.png": "10117eeed6f961b46e4485b0a7687ab1",
"assets/assets/images/recipes/carrot-on-a-stick.png": "6b6ba5f2df2137119c666d77b22303e1",
"assets/assets/images/recipes/cauldron.png": "ffb9d45e1a45d56ce1f0c486f8ddd50d",
"assets/assets/images/recipes/chest.png": "d76a01d35eff2f80a7479614111a39b3",
"assets/assets/images/recipes/chiseled-quartz-block.png": "99e2395e741a5e5533ae61f493cb4de5",
"assets/assets/images/recipes/chiseled-sandstone.png": "928268215467faaa415ddf448dfbd705",
"assets/assets/images/recipes/clay-block.png": "c7f1b8610916a6d38ff0ae6ef83a266c",
"assets/assets/images/recipes/cobblestone-slab.png": "76fc2358c864ffcb65d87dc049b748d6",
"assets/assets/images/recipes/cobblestone-stairs.png": "ef819fa3d3fe32b4ed7aa1b951f571a1",
"assets/assets/images/recipes/cobblestone-wall.png": "a93e0e6508aea2b8c23001de91f96a16",
"assets/assets/images/recipes/compass.png": "6aa4ac71128caabb2041e56467be4624",
"assets/assets/images/recipes/cookie.png": "d8dbdba001fe9b1fb5d694b35c45a856",
"assets/assets/images/recipes/cyan-carpet.png": "8a6103d8ee879cfda2248edc62e55b38",
"assets/assets/images/recipes/cyan-dye.png": "581529ee61d64ed9e88da87b489f8922",
"assets/assets/images/recipes/cyan-stained-clay.png": "b60075ad6c9a09e95641391144569960",
"assets/assets/images/recipes/cyan-stained-glass-pane.png": "7fea74d59d5719e8979a9597b82b1e6b",
"assets/assets/images/recipes/cyan-stained-glass.png": "b03d002fb34bc7bd35ef5ffb1a709497",
"assets/assets/images/recipes/cyan-wool.png": "793996f5762a93e7dd95233f900e378c",
"assets/assets/images/recipes/dandelion-yellow-dye.png": "0f6ea0328d5b501dcec9d0584927e116",
"assets/assets/images/recipes/dark-oak-wood-stairs.png": "1833937cb7d4e23b90b2c38d3da5aeec",
"assets/assets/images/recipes/daylight-sensor.png": "40b7fef6f3976a0ec7e6405e073807fe",
"assets/assets/images/recipes/detector-rail.png": "fc83b84409b5a0ac3b832753b9b18c6f",
"assets/assets/images/recipes/diamond-axe.png": "c953023978ca87280219b747e8e05c95",
"assets/assets/images/recipes/diamond-block.png": "17900f8eed30286621d75bfc17f34cf6",
"assets/assets/images/recipes/diamond-boots.png": "2cc08f543e870c718ebeae33aef48717",
"assets/assets/images/recipes/diamond-chestplate.png": "be5ce2dd113428124aafcd4ab8c08cad",
"assets/assets/images/recipes/diamond-helmet.png": "81a550cc0f33144146aa37e463c377ad",
"assets/assets/images/recipes/diamond-hoe.png": "c180c36fb27b2f735a2e6c0bd4844f88",
"assets/assets/images/recipes/diamond-leggings.png": "acecd06ca3119194140214b932737aea",
"assets/assets/images/recipes/diamond-pickaxe.png": "2485b1b7d32eb87ffde7305f550b368b",
"assets/assets/images/recipes/diamond-shovel.png": "7c68215b3ca830993d099cec275505e2",
"assets/assets/images/recipes/diamond-sword.png": "7f6eabb4248d38dd65c929dcb5533948",
"assets/assets/images/recipes/dispenser.png": "959fb7e8807cf15ccdd3e9db040e848e",
"assets/assets/images/recipes/dropper.png": "fe3f4787c0831ed7c4ac7ccd4c5d6213",
"assets/assets/images/recipes/empty-map.png": "7225b13073dc4cb2d0d1f7c527277b72",
"assets/assets/images/recipes/enchantment-table.png": "ca6eef049a9c73450896af7fad6d3e06",
"assets/assets/images/recipes/ender-chest.png": "cb260d3c94fbc95e8def485b1401341c",
"assets/assets/images/recipes/eye-of-ender.png": "6e75965bba19ee54f5a713d548e020b6",
"assets/assets/images/recipes/fence.png": "c4560a5836ef15879467236e8a0a5d50",
"assets/assets/images/recipes/fermented-spider-eye.png": "63f550ed753c803344e858dca30c474d",
"assets/assets/images/recipes/fire-charge.png": "639a19c7f67a575ec615fcd3b0593e29",
"assets/assets/images/recipes/firework-rocket.png": "b315e03138fe31c30beedbeda251fc5f",
"assets/assets/images/recipes/firework-star.png": "0e1298892164bcd437cbf816c4944e12",
"assets/assets/images/recipes/fishing-rod.png": "f2c28090a03bd85d8f31560f5053e9d5",
"assets/assets/images/recipes/flint-and-steel.png": "6892093d05b50cd5d3523c5b251f4ff8",
"assets/assets/images/recipes/furnace.png": "8932636b82ac9038e751484ac5887de7",
"assets/assets/images/recipes/glass-bottle.png": "6ef46b775712c5b316db2abebf1796b8",
"assets/assets/images/recipes/glass-pane.png": "046662d01313815527d9e6822fbf295e",
"assets/assets/images/recipes/glistering-melon.png": "a39f62a6eb23d0837f641660f89a00db",
"assets/assets/images/recipes/glowstone-block.png": "e7b503489838b813bd02447bbac31f89",
"assets/assets/images/recipes/gold-axe.png": "83b91c4137dc885305f72fa4c7516549",
"assets/assets/images/recipes/gold-block.png": "03bdfdf22f6ed02acdf45c4cf062211f",
"assets/assets/images/recipes/gold-boots.png": "cfd11af57f0273af80f8e1283d61fe51",
"assets/assets/images/recipes/gold-chestplate.png": "16fbbfc625fe039f41dcee0c76829496",
"assets/assets/images/recipes/gold-helmet.png": "83fd0b663b9072841fa967a54b37df13",
"assets/assets/images/recipes/gold-hoe.png": "cc9fd86e255b086ebc8c193202491891",
"assets/assets/images/recipes/gold-legggings.png": "48090276f234a0046af281d92f11a6c5",
"assets/assets/images/recipes/gold-nugget.png": "ea0f4a05c60b67d2e54f3b09e2e257f4",
"assets/assets/images/recipes/gold-pickaxe.png": "43d67be41540daa1373788ad226d43f2",
"assets/assets/images/recipes/gold-shovel.png": "58570198129abaf36171ed7ff48493ed",
"assets/assets/images/recipes/gold-sword.png": "e0a3d3a7cb488f81433a914634eb1a82",
"assets/assets/images/recipes/golden-apple.png": "6e3522a16d4bd5d399c72432d3804285",
"assets/assets/images/recipes/golden-carrot.png": "5bf2677bad757f0cdd757de589d4fcbf",
"assets/assets/images/recipes/gray-carpet.png": "971726dd4da4c4c95d3866d6c57d1f7c",
"assets/assets/images/recipes/gray-dye.png": "e5ecd7a5cb2a851d729aade1ff782c8d",
"assets/assets/images/recipes/gray-stained-clay.png": "f9e2c178c8d58348ab5f939e5733b750",
"assets/assets/images/recipes/gray-stained-glass-pane.png": "e3e5896acac1daebda783b66ae6d8a60",
"assets/assets/images/recipes/gray-stained-glass.png": "c3dc87f575a9440f8d5b90a63f4fcd02",
"assets/assets/images/recipes/gray-wool.png": "e72e7fd1248e37232fcf4c16a9235df3",
"assets/assets/images/recipes/green-carpet.png": "a7cd3b0279a7b9071155e178e49fc629",
"assets/assets/images/recipes/green-stained-clay.png": "82fd751670aa638494a5abb01ac8a15c",
"assets/assets/images/recipes/green-stained-glass-pane.png": "e1f5e646ced173804521f307dcef6fdb",
"assets/assets/images/recipes/green-stained-glass.png": "73d8ca12173835f6927752e7d608c005",
"assets/assets/images/recipes/green-wool.png": "c13211bf2e508b6634e61fb2cdecc068",
"assets/assets/images/recipes/hay-bale.png": "819babb88a7fd1f78892724943dd8ff0",
"assets/assets/images/recipes/hopper.png": "446873457d58356f1734f8c570473f9d",
"assets/assets/images/recipes/iron-axe.png": "8a953be3bcdc0486ad2eea0ba7856aa4",
"assets/assets/images/recipes/iron-bars.png": "669eeff1464bc55c5dfd3baf4f834bc1",
"assets/assets/images/recipes/iron-block.png": "f85ea6386cd84ed4a227758fe84040be",
"assets/assets/images/recipes/iron-boots.png": "879af1756309c177afe6112a24325e7d",
"assets/assets/images/recipes/iron-chestplate.png": "b9320ead8169978ec1f76f1079b00225",
"assets/assets/images/recipes/iron-door.png": "7b746bdf8c36cf7a75436baf0c0c672a",
"assets/assets/images/recipes/iron-helmet.png": "e1e44d7745bf4b8e15ca45b0f8895e83",
"assets/assets/images/recipes/iron-hoe.png": "769e23f0f79afc1f948feb4de36e1ee0",
"assets/assets/images/recipes/iron-leggings.png": "200f99997ea3498581b4a4d3e58c7464",
"assets/assets/images/recipes/iron-pickaxe.png": "9dfbd8c6cd322684325120086dbdf3ae",
"assets/assets/images/recipes/iron-shovel.png": "37fc1aa25a897d5bc0180ccc96313b20",
"assets/assets/images/recipes/iron-sword.png": "a2d5446d439aa53df611487648ff266a",
"assets/assets/images/recipes/item-frame.png": "33dbed1c118de9a158849127d426c09a",
"assets/assets/images/recipes/jack-o-lantern.png": "759d1231b90b51906e6357fd9f6e5258",
"assets/assets/images/recipes/jukebox.png": "e59929b2349a201db1457e5b891e848f",
"assets/assets/images/recipes/jungle-wood-stairs.png": "a8a278d14ad10d54a6e03b119afa59d8",
"assets/assets/images/recipes/jungle-wooden-plank.png": "43250ee8a57a5a7c9d09234d6154c996",
"assets/assets/images/recipes/ladder.png": "dea315da12f342a8c722c5d78562cf2e",
"assets/assets/images/recipes/lapis-lazuli-block.png": "1bf2e74f6db43b5bee84e5a839e05424",
"assets/assets/images/recipes/lead.png": "b56277ba0e1f8cf7ae95f47c97f1e5f2",
"assets/assets/images/recipes/leather-boots.png": "5923ad427daf37d4a8daf18a124d0497",
"assets/assets/images/recipes/leather-cap.png": "f34174ed254e49df0420af878d0597b5",
"assets/assets/images/recipes/leather-pants.png": "6d4a63e71a5e078f4fc9e7b488760b1d",
"assets/assets/images/recipes/leather-tunic.png": "90b0fdb72643649f0723e71cd464c124",
"assets/assets/images/recipes/lever.png": "e6edee10837d1df48f518f516704a3f2",
"assets/assets/images/recipes/light-blue-carpet.png": "3b361994eed8663f917ea5978c768147",
"assets/assets/images/recipes/light-blue-dye.png": "932078de3d4f5ee33507fb2a6d55ff81",
"assets/assets/images/recipes/light-blue-stained-clay.png": "ec43b1290a33c058b7de6a028d2a7712",
"assets/assets/images/recipes/light-blue-stained-glass-pane.png": "eedbdc4bd07a2fafe7949e7b28a7815d",
"assets/assets/images/recipes/light-blue-stained-glass.png": "53e622b21c5f6161bf9a06c37f6c643a",
"assets/assets/images/recipes/light-blue-wool.png": "39024794cac29ccb26ac702f1e17461d",
"assets/assets/images/recipes/light-gray-carpet.png": "d404a7a567d189c2d8ec02ec315f7bef",
"assets/assets/images/recipes/light-gray-dye.png": "55e2cbdeebc163f75a88422564240b56",
"assets/assets/images/recipes/light-gray-stained-clay.png": "6763af31ad1bebab0aa13bb8c2448e7d",
"assets/assets/images/recipes/light-gray-stained-glass-pane.png": "924e28e7f7d061a8c190208f8b273e56",
"assets/assets/images/recipes/light-gray-stained-glass.png": "00a2f44a07ac18bb5dd78d4d9be3bdf6",
"assets/assets/images/recipes/light-gray-wool.png": "2d89a85c364640f7ec2232c067059b0c",
"assets/assets/images/recipes/lime-carpet.png": "93fbe4f7c293a0d5b0007eb203aa6ec2",
"assets/assets/images/recipes/lime-dye.png": "b9a3b618c980bdab766e0d5a1e0888d1",
"assets/assets/images/recipes/lime-stained-clay.png": "21e6f51e563cc4c1340b33905c725235",
"assets/assets/images/recipes/lime-stained-glass-pane.png": "b97d5da535c6f10f9e91f636474a2a35",
"assets/assets/images/recipes/lime-stained-glass.png": "d8f6087856937f7271ff40d352138a04",
"assets/assets/images/recipes/lime-wool.png": "eff61e9e802db7e7dd4d55fa135254f2",
"assets/assets/images/recipes/magenta-carpet.png": "1d93aa725cff5c4349d57041077329e2",
"assets/assets/images/recipes/magenta-dye.png": "dcb1ff6ad2e01bde3e3e56819b03e5c6",
"assets/assets/images/recipes/magenta-stained-clay.png": "eb08ce37034d5732d8f6e2627e690c20",
"assets/assets/images/recipes/magenta-stained-glass-pane.png": "56fd6c1e4305deb7ecd718e228f78fdb",
"assets/assets/images/recipes/magenta-stained-glass.png": "472c1d9d63e9843958d8b51e49326be6",
"assets/assets/images/recipes/magenta-wool.png": "e7a7bc50e77126a14c3d7ab85d84d7d3",
"assets/assets/images/recipes/magma-cream.png": "b78e425f59571d736094128f95fd675e",
"assets/assets/images/recipes/melon-block.png": "b0e3de631a27aac10b7e94492f4f56c1",
"assets/assets/images/recipes/melon-seeds.png": "c5360b7bc4e1f34a838559f2594e0b27",
"assets/assets/images/recipes/minecart-with-chest.png": "5db0c4d2f15ec476c634584ad7103a3c",
"assets/assets/images/recipes/minecart-with-furnace.png": "7d746d3a924cd6683d119dba36661a1d",
"assets/assets/images/recipes/minecart-with-hopper.png": "a2184f27af9cf31bed1ba232678f0fa6",
"assets/assets/images/recipes/minecart-with-tnt.png": "fc356c54f8d68d023ad095808fc62845",
"assets/assets/images/recipes/minecart.png": "60a17b58f26a84ff879ad23435b8bc92",
"assets/assets/images/recipes/mossy-cobblestone-wall.png": "5e2599916d53deaf6dc39654541cd4b3",
"assets/assets/images/recipes/mushroom-stew.png": "e09e6c9b89534b6db7b60a8128e66956",
"assets/assets/images/recipes/nether-brick-fence.png": "203f61a08b6b450b1968772ce6ec7b01",
"assets/assets/images/recipes/nether-brick-slab.png": "26e314ab61c87adf02469087848a0e07",
"assets/assets/images/recipes/nether-brick-stairs.png": "d60bd3404b2c5339872b543b687564ae",
"assets/assets/images/recipes/nether-brick.png": "35377253b629ea4b9b841ca45ab2212c",
"assets/assets/images/recipes/note-block.png": "7bbba0ef76a496840919a09e278a09e3",
"assets/assets/images/recipes/orange-carpet.png": "9cbea6c9c09d7dfae7b506f4a3d55111",
"assets/assets/images/recipes/orange-dye.png": "2f4938ba98ef3cfe9dc182936cc703b5",
"assets/assets/images/recipes/orange-stained-clay.png": "4da1ca555f7bf404232f6d45b1447709",
"assets/assets/images/recipes/orange-stained-glass-pane.png": "7e3abf77c8776800099fab04d65ef10c",
"assets/assets/images/recipes/orange-stained-glass.png": "99d48ebc11809d91354178565dde147d",
"assets/assets/images/recipes/orange-wool.png": "b6ad4e60dfdd7f0eb1271e03abc08792",
"assets/assets/images/recipes/painting.png": "c0dfa25afe09a0a78fda4ac665e59954",
"assets/assets/images/recipes/paper.png": "67ad9c16dbf0e6ae5938c753ce16fb7a",
"assets/assets/images/recipes/pillar-quartz-block.png": "a9055896958c50b3bb56f856038818bc",
"assets/assets/images/recipes/pink-carpet.png": "40ee1c3eac5bbca4d594edc396ed3fc7",
"assets/assets/images/recipes/pink-dye.png": "66b5abaacfd96fb9d421e3b312ae8516",
"assets/assets/images/recipes/pink-stained-clay.png": "82bd096b20f3e1c08f999a07e42c2e41",
"assets/assets/images/recipes/pink-stained-glass-pane.png": "7e7c0b475ac0d958bca6f6283ffd55c9",
"assets/assets/images/recipes/pink-stained-glass.png": "bb2174f8fed454ef9b55fa914bd03c32",
"assets/assets/images/recipes/pink-wool.png": "ebc49bd10b8c039c3aaaae2656009b9f",
"assets/assets/images/recipes/piston.png": "6bdd4c9968b684aae73b003107ea636a",
"assets/assets/images/recipes/powered-rail.png": "de186132859984314e1fb0a39aac0c58",
"assets/assets/images/recipes/pumpkin-pie.png": "722eadca79bc8dc0a81e519b0b12b56f",
"assets/assets/images/recipes/purple-carpet.png": "0990b3c9e3a418944109a7fc57a23335",
"assets/assets/images/recipes/purple-dye.png": "bc3ea7777e161232f0f00f8be6a94e7c",
"assets/assets/images/recipes/purple-stained-clay.png": "2ef1af2f3f83de1aca9833f40b3ecb2e",
"assets/assets/images/recipes/purple-stained-glass-pane.png": "420b2196710aa4c9895b85cc36b91395",
"assets/assets/images/recipes/purple-stained-glass.png": "10cf5ffba126c8307f33bc739905bf28",
"assets/assets/images/recipes/purple-wool.png": "f5ee117bd01ea1827ebad6f15b95083b",
"assets/assets/images/recipes/quartz-block.png": "98005b104c885f4f0a9a604fafe8eefc",
"assets/assets/images/recipes/quartz-slab.png": "3fccb0464ef400c2229a2581c63ddb74",
"assets/assets/images/recipes/quartz-stairs.png": "344d278aa15866348880d35529c7c030",
"assets/assets/images/recipes/rail.png": "20844e048c4bb8b2f7dff5602d07178f",
"assets/assets/images/recipes/red-carpet.png": "043a0524b77189636c77238d1e01ddc0",
"assets/assets/images/recipes/red-stained-clay.png": "58fa723e244e4c16ce7ff3e8a184ecd4",
"assets/assets/images/recipes/red-stained-glass-pane.png": "9c2ce01c925e8ddea6effb1315e34fc7",
"assets/assets/images/recipes/red-stained-glass.png": "55b84402db945ab53ddecf9be90b7cf3",
"assets/assets/images/recipes/red-wool.png": "9e100a35300f091d2862413fb974877d",
"assets/assets/images/recipes/redstone-block.png": "4b8fd365ecc1e6533a9c4fe06d61a8b6",
"assets/assets/images/recipes/redstone-comparator.png": "b68c833d8c5bf138d86356c663375d72",
"assets/assets/images/recipes/redstone-repeater.png": "9fae1243bda50af80a3cd3554a4ce937",
"assets/assets/images/recipes/sandstone-slab.png": "a5fbb48f1afe031f0bd618f02c0c2bbf",
"assets/assets/images/recipes/sandstone-stairs.png": "f71fbb8fde110b83488876eb6523f8ff",
"assets/assets/images/recipes/sandstone.png": "159e2f966069e6f172088c6f6b88ba4e",
"assets/assets/images/recipes/shears.png": "6545f48f03014ca556bb08a3f4d0d277",
"assets/assets/images/recipes/sign.png": "d84e41a2923d9196f2fd6da403e46e64",
"assets/assets/images/recipes/smooth-sandstone.png": "812c673f4410b5778636da5f0df27350",
"assets/assets/images/recipes/spruce-wood-stairs.png": "8cc79578f2568a4e75244ab6b7b8fd5a",
"assets/assets/images/recipes/spruce-wooden-plank.png": "11720ac80246d4bea75606807fe6f936",
"assets/assets/images/recipes/stick.png": "4ea55d33aea1844aee1ccc1a379e8287",
"assets/assets/images/recipes/sticky-piston.png": "4af137e6d5cf4a0111d3c23d1cde5e95",
"assets/assets/images/recipes/stone-axe.png": "4afc0b1560797f5734ef3899e52a5018",
"assets/assets/images/recipes/stone-brick-slab.png": "f36ee77aa92688e47c7ac87ee32ec432",
"assets/assets/images/recipes/stone-brick-stairs.png": "e6a1670ab2404fb6d7a0cfaed709e6d1",
"assets/assets/images/recipes/stone-button.png": "54970d1595f1131e3fb6337786ef6901",
"assets/assets/images/recipes/stone-hoe.png": "fd6659d6ce0d39badfb7f1147670ddc9",
"assets/assets/images/recipes/stone-pickaxe.png": "e398115deb5a549b70969ceb2914b420",
"assets/assets/images/recipes/stone-pressure-plate.png": "319928271b43ee349dc2aac0b700775e",
"assets/assets/images/recipes/stone-shovel.png": "2d7f96e646ca410043ed81578d7946df",
"assets/assets/images/recipes/stone-slab.png": "361ea9690fef68853a5746a515af4025",
"assets/assets/images/recipes/stone-sword.png": "178a598505ec359f7133365f3937442e",
"assets/assets/images/recipes/tnt.png": "f275ad0547b005efad9689fee3a7dede",
"assets/assets/images/recipes/torch.png": "9431a4d1edad8212e4f21efa5ff618e3",
"assets/assets/images/recipes/trapdoor.png": "4966f7a4ea4c619668bfb86d987ac6da",
"assets/assets/images/recipes/trapped-chest.png": "673d09c1798f4198d8672b33a6eae017",
"assets/assets/images/recipes/tripwire-hook.png": "ca77fc3353beeb70c866c8274f0b6d37",
"assets/assets/images/recipes/weighted-pressure-plate-heavy.png": "0f4689cf4a340c592ccd8eab1cf33b07",
"assets/assets/images/recipes/weighted-pressure-plate-light.png": "03ad31644b3ec370abbfd91a019fa489",
"assets/assets/images/recipes/white-carpet.png": "1a5cfdad5fbc820667a2d52879d54255",
"assets/assets/images/recipes/white-stained-clay.png": "926c3c6f7b27e31960d4dc6eb4462f8a",
"assets/assets/images/recipes/white-stained-glass-pane.png": "9c4d6fe6b8a89171d3452eb46394dad2",
"assets/assets/images/recipes/white-stained-glass.png": "691e8f7ae92e16eea9e0f62d688ad967",
"assets/assets/images/recipes/white-wool.png": "49c9cabd394ae2a2325f68ae6d5f522d",
"assets/assets/images/recipes/wood-stairs.png": "9e04acbf97df520e25375ee875eafbf3",
"assets/assets/images/recipes/wooden-axe.png": "1976c7e104af989f675af416ba82ef62",
"assets/assets/images/recipes/wooden-button.png": "eeb78b1bd1e45813eee734edb731b0fb",
"assets/assets/images/recipes/wooden-door.png": "6526045220879f56c5623e10202d1ff1",
"assets/assets/images/recipes/wooden-hoe.png": "124abe5c8ee46dbad98ad35429f11d77",
"assets/assets/images/recipes/wooden-pickaxe.png": "0645433669ad55c05d263550a4f70590",
"assets/assets/images/recipes/wooden-plank.png": "4b1e2ecdf3fa05bd76911977267ea266",
"assets/assets/images/recipes/wooden-pressure-plate.png": "2a5096bcf7ba7a1c2f4f925e5ec30f93",
"assets/assets/images/recipes/wooden-shovel.png": "438dfc06206ae138ae506773b642bbb1",
"assets/assets/images/recipes/wooden-slab.png": "0fa499da203cfaed46617c48dda7e4b5",
"assets/assets/images/recipes/wooden-sword.png": "e5580c3cf39e53d87bdb0d967a89002b",
"assets/assets/images/recipes/yellow-carpet.png": "1f2df94cd4ff2a518d683b53d82f1076",
"assets/assets/images/recipes/yellow-stained-clay.png": "9a539498801be0dd44feb303036ff0d6",
"assets/assets/images/recipes/yellow-stained-glass-pane.png": "842ad0a38598e1ca58f514d4976a7be1",
"assets/assets/images/recipes/yellow-stained-glass.png": "c3ac4228f01bf8b7dd094a0f23db261d",
"assets/assets/images/recipes/yellow-wool.png": "a8e384d3d09850568e0c97b74d3fcf01",
"assets/assets/minecraft_recipes.json": "2da36fac711ee90a06e6b9d0d310f166",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "554fffeadffd8cf1b974d72432783c56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d7d965a3bccb2488e1cc84c4d4485fd",
"/": "2d7d965a3bccb2488e1cc84c4d4485fd",
"main.dart.js": "ff3014abffcfbed9c8d8dfeef672c716",
"manifest.json": "ab3de5ec44c60981cc0b8a434ccc6503",
"version.json": "0cc89aeb0ea55669a2f8a9a7898b6539"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
