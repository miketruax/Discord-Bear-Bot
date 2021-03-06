const BEAR_FACTS = [
  `The largest mammalian carnivore that ever lived on land was the giant short-faced bear. It was 6'5" tall at the shoulder when standing on all fours. They supposedly died out 12,000 years ago... yes... died out...`,
  "The sloth bear has the shaggiest fur.",
  "The sun bear has the shortest fur so it can keep cool in the hot forests of Southeast Asia.",
  "The most accurate way to determine the age of a bear is to count the rings in a cross section of its tooth root under a microscope.",
  "Bears have two layers of fur. A short layer for warmth, and a long layer keeps water away from the skin and short fur.",
  "Bears are very smart and have been known to roll rocks into bear traps to set off the trap and eat the bait in safety.",
  "Bears live as long as 30 years in the wild. One captive brown bear lived to the age of 47.",
  "Bears are bowlegged. This gives them better grip and balance.",
  "Bears can run up to 40 miles per hour, fast enough to catch a running horse.",
  "Only the polar bear is a true carnivore. All other bears are omnivores, or animals that eat both plants and meat.",
  `Sun bears have the longest claws of any bear. They also have the longest tongues, which can reach 9.8" long.`,
  "A bear’s normal heartbeat is 40 beats per minute. A hibernating bear’s heart rate drops to 8 bpm. TheUrsineAdventurer's is usually around 75bpm",
  "The bear that a person living in North America is most likely to run into is the black bear. They live in wooded areas in every Canadian province, many U.S. states, and parts of Mexico.",
  "Black bears are not always black. They come in a rainbow of colors from black to reddish brown (cinnamon bears) to light brown to white.",
  "Unlike many mammals, bears can see in color.",
  "The world’s most widely distributed bear is the brown bear. However, the American black bear is the world's most common bear species.",
  "When bears mate, the eggs within the female’s body are fertilized but do not implant in her uterus and begin developing for several months.",
  "A swimming polar bear can jump 8 ft. (2.4 m) out of the water to surprise a seal.",
  "A polar bear’s stomach can hold 150 lbs. (68 kg) of meat.",
  "Panda bears have an extra “thumb” (which is actually an extra-large wrist bone) just for holding onto bamboo stalks.",
  "A panda bear can eat over 45 lbs. (20.4 kg) of bamboo per day.",
  "Koala bears are not bears at all and are not related to the bear family. They are marsupials.",
  `"Koala Bears" should just be called "Koalas" They are not bears, and I refuse to treat them as such`,
  "The giant panda has a large head for its body. Scientists believe this is because it needs a strong jaw and neck muscles to eat bamboo, which makes up 99% of its diet. The remaining 1% consists of insects on the bamboo and dead meat that the panda may find.",
  "Sloth bears’ favorite food is termites. They have no front teeth, so they easily suck out insects from their nests like a vacuum cleaner. They can also seal their nostrils for better suction.",
  "Bears have been known to eat almost anything, including snowmobile seats, engine oil, and rubber boots.",
  "About 98% of the grizzly bear population in the U.S. lives in Alaska.",
  "A polar bear can swim up to 100 miles without resting.",
  "Bears can see almost as well as humans, and they can hear a little better. But they can smell much better. In fact, a bear’s sense of smell is around 100 times greater than a human’s.",
  "Polar bears can track down an odor from 20 miles (32 km) away. They can smell a dead seal under 3 feet of solid ice.",
  "Brown bears have long claws that can be the length of a human finger",
  "The shape of a bear’s claw differs according to the type of bear. Bears that climb, such as black bears, have claws that are curved and strong to allow them to claw at tree bark. Bears that dig, such as grizzly bears, have straight and long claws.",
  "In 2004, a black bear was found unconscious in a campground in Seattle, Washington. It had broken into a cooler and used its claws and teeth to open dozens of beer cans.",
  "A male bear is called a boar or a he-bear. A female bear is called a sow or a she-bear. A group of bears is called a sleuth or sloth.",
  "“Bear” is an LGBT slang term used by homosexual men to describe hyper masculine men who have hairy bodies and facial hair or who are heavy set.",
  "The word “bear” is an Old English word, derived from the Proto-Indo-European *bher-, meaning “bright brown.”",
  "The original word for bears is lost to history. Earlier people were concerned that by calling it by it's name it would be summoned",
  "The bear ancestor is an offshoot of the ancient Canidae family of dogs, wolves, foxes, and coyotes.",
  "Polar bears are the only bear species that is a marine mammal.",
  "A polar bear’s fur ranges in color from ivory to pale tan. Underneath its fur coat, the polar bear’s skin is black to help absorb heat from the sun.",
  "The name “grizzly bear” refers to the silver-tipped or “grizzled” hair of a brown bear.",
  "One variation of the black bear is a white bear called the Kermode, ghost, or spirit bear. These bears are very rare. Native Americans believed these white bears had supernatural power.",
  "The polar bear (Ursus maritimus) is the largest bear species. A male polar bear can measure up to 10 feet long and weigh 1,500 lbs., which is about the weight of eight human adults. Female polar bears are up to 50% smaller than the males.",
  "Polar bears are also the most carnivorous of the bear species",
  "In 2008, a Canadian man was attacked by a grizzly bear. He survived the attack by playing dead, even when the bear began to gnaw on his scalp. The bear eventually lost interest and went away.",
  "For many years, scientists thought that the Giant Panda was not a bear at all but a relative of the raccoon. Scientists have shown through DNA evidence that giant pandas are indeed true bears.",
  "The Sun bear (Helarctos malayanus) is the smallest of the bears and is about the size of a large dog. It gets its name from a blond chest patch of fur that looks like a setting sun. Sun bears are also known as honey bears.",
  "Of the eight bear species, four live in the Southern Hemisphere and four in the Northern Hemisphere.",
  "Spectacled bears are the only wild bears that live in South America.",
  "North America is home to three of the world’s eight bear species: brown, American black, and polar bears. Almost two thirds of the bears in the world live in North America.",
  "In many Native American cultures, bears were symbols of strength, hard work, and even great love",
  "Because bears can walk short distances on their hind legs, some Native Americans called them “the beast that walks like a man.”",
  "Polar bears live only north of the Equator, in the Arctic. Penguins live only south of the Equator, in Antarctica. Approximately 21,000 to 28,000 polar bears live in the Arctic.",
  "Bears are descended from small, insect-eating mammals called miacids, which lived during the time of the dinosaurs.",
  "The first true bears evolved from heavy bear-like dogs around 27 million years ago. The oldest known bear, the Dawn Bear, lived about 20 million years ago and was the size of a small dog.",
  "Bears have never lived in Australia or Antarctica. Although bears do not currently live in Africa, bear fossils have been found there. Scientists are unsure why bears do not live in Africa today.",
  "Sloth bears are the only bears that are more active at night.",
  "Polar bears have a thick coat with 9,677 hairs per square inch.",
  "Most bears are born without fur. Only polar bears and giant pandas are born with thin white fur.",
  "Bears have non-retractable claws like dogs and unlike cats.",
  "While most bears have bare feet, the paws of polar bears have fur on the bottoms and between the toes. Bears lose most of their heat from their paws.",
  "Like people, all bears except pandas walk by putting their feet flat on the ground. This kind of walking is called “plantigrade.” In contrast to bears, other large animals—including dogs, horses, and even elephants—walk on their toes.",
  `The claws on the front feet of bears are longer than the claws on the back feet. Some large bears have claws almost 5" long.`,
  "Bears are the only large predators that regularly eat both meat and plants. For this reason, they have different teeth specifically used for meat eating and plant eating.",
  "The Ursa Major or “Great Bear” constellation is the third-largest constellation and contains the Big Dipper.",
  "Ursa Major is well-known in most world cultures and is associated with many myths",
  "During hibernation, a bear does not defecate. Its body can somehow recycle body waste into protein—a process scientists still do not understand.",
  "Not all bears hibernate. Asiatic black bears, American black bears, some brown bear species, and pregnant polar bears hibernate. Sloth bears live in warm places with abundant food, so they don’t need to hibernate.",
  "A newly born Kodiak brown bear can weigh less than one pound. As it grows up, its weight may increase as much as 1,000 times. If human babies grew this much, as adults they would weigh over 6,000 lbs.",
  "Polar bears have the largest home ranges of any bear. One polar bear can hunt and live in an area as big as Maine.",
  "Stone-age hunters worshipped and hunted bears at the same time. To show their respect, they sang and danced and prayed that the bear would forgive them for killing it.",
  "All bears are good swimmers, but the polar bear is the most efficient swimmer. It can swim up to 4-6 mph (6-10 km/hr) for 100 miles (161 km). One polar bear swam 200 miles without stopping. Polar bears can also swim very well under water.",
  "The only species of bear that does not move its ears to pick up sound is the giant panda.",
  "The Asiatic black bear has the largest ears of any species of bears.",
  "Because a giant panda’s eye is a vertical slit, like many nocturnal animals it can see by day and by night.",
  "When U.S. President Theodore (Teddy) Roosevelt refused to shoot a black bear cub on a hunting trip, a cartoon featured the event, and soon stuffed toy manufacturers popularized “Teddy’s bear.”",
  "Only about 1,000 giant pandas live in the wild today.",
  "The lips of bears are not attached to their gums, which make their lips look rubbery.",
  `The name "Baloo" is Hindi for "bear"`,
  "Baloo, from The Jungle Book, is a sloth bear.",
  `Most bears have 42 teeth, which is about 10 more than people have. A bear’s canines can reach 1.5" long, while a human’s are less than a half inch long.`,
  "The giant panda has been described as a living fossil because it is such an ancient animal.",
  "Polar bears are the largest land carnivores on earth. They can stand more than 11' high and weigh more than 1,700 lbs.",
  "Black bears are typically smaller than grizzly bears, have a smaller shoulder hump, less shaggy fur, longer ears, and a less concave facial profile. Black bear claws are also smaller and more curved to better climb trees.",
];
module.exports = BEAR_FACTS;
