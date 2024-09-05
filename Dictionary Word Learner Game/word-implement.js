
    const words = [
      { word: "Goodbye", meaning: "अलविदा (Alvida)", definition: "A farewell greeting in Hindi.", example: "अलविदा, फिर मिलेंगे। (Goodbye, see you again.)" },
      { word: "Hello", meaning: "नमस्ते (Namesta) ", definition: "A respectful greeting in Hindi.", example: "नमेस्ता, कैसे है आप ? ( Hello, how are you? )" },
      { word: "Thank You", meaning: "धन्यवाद (Dhanyavaad)", definition: "It used for expressing that you Happy with his help.", example: "मुझे मदद करने के लिए धन्यवाद! (Thank You! for helping me.)" },
      { word: "Guest", meaning: "मेहमान (Mehmaan)", definition: "Guest in Hindi.", example: "आज हमारे घर में मेहमान आए हैं।" },
      { word: "Market", meaning: "बाजार (Bazaar)", definition: "Market in Hindi.", example: "मैंने आज बाजार से सब्जियाँ खरीदी।" },
      { word: "Attention", meaning: "ध्यान (Dhyaan)", definition: "Attention or focus in Hindi.", example: "कृपया ध्यान से सुनिए।" },
      { word: "Condition ", meaning: "हाल (Haal)", definition: "Condition or state in Hindi.", example: "आपका हाल कैसा है?" },
      
       
       
        {
          word: "Please",
          meaning: "कृपया (Kripya)",
          definition: "A polite request in Hindi.",
          example: "कृपया यहाँ बैठें। (Please have a seat here.)"
        },
        {
          word: "Sorry",
          meaning: "माफ़ कीजिए (Maaf kijiye)",
          definition: "An apology or expression of regret in Hindi.",
          example: "माफ़ कीजिए, मैंने आपको चोट लगा दी। (Sorry, I hurt you.)"
        },
        {
          word: "Yes",
          meaning: "हाँ (Haan)",
          definition: "An affirmative response in Hindi.",
          example: "हाँ, मैं तैयार हूँ। (Yes, I am ready.)"
        },
        {
          word: "No",
          meaning: "नहीं (Nahi)",
          definition: "A negative response in Hindi.",
          example: "नहीं, मैं नहीं आ सकता। (No, I cannot come.)"
        },
        {
          word: "Friend",
          meaning: "दोस्त (Dost)",
          definition: "A person with whom one has a bond of mutual affection.",
          example: "वह मेरा अच्छा दोस्त है। (He is my good friend.)"
        },
        {
          word: "Family",
          meaning: "परिवार (Parivaar)",
          definition: "A group consisting of parents and children living together in a household.",
          example: "मेरा परिवार मेरी ज़िंदगी का सबसे महत्वपूर्ण हिस्सा है। (My family is the most important part of my life.)"
        },
        {
          word: "Love",
          meaning: "प्यार (Pyaar)",
          definition: "An intense feeling of deep affection.",
          example: "मैं तुमसे प्यार करता/करती हूँ। (I love you.)"
        },
        // Additional 40 words
        {
          word: "Book",
          meaning: "किताब (Kitaab)",
          definition: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
          example: "मैं रोज़ एक किताब पढ़ता/पढ़ती हूँ। (I read a book every day.)"
        },
        {
          word: "School",
          meaning: "स्कूल (School)",
          definition: "An institution for educating children.",
          example: "मेरा स्कूल मेरे घर से पाँच किलोमीटर की दूरी पर है। (My school is five kilometers away from my house.)"
        },
        {
          word: "Music",
          meaning: "संगीत (Sangeet)",
          definition: "Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion.",
          example: "मुझे भारतीय संगीत बहुत पसंद है। (I really like Indian music.)"
        },
        {
          word: "Happy",
          meaning: "खुश (Khush)",
          definition: "Feeling or showing pleasure or contentment.",
          example: "मुझे तुम्हारे साथ खुशी होती है। (I am happy with you.)"
        },
        {
          word: "Sad",
          meaning: "उदास (Udaas)",
          definition: "Feeling or showing sorrow; unhappy.",
          example: "वह उदास हो गया है क्योंकि उसका प्यारा कुत्ता मर गया है। (He is sad because his beloved dog has died.)"
        },
        {
          word: "Angry",
          meaning: "गुस्सा (Gussa)",
          definition: "Having a strong feeling of or showing annoyance, displeasure, or hostility.",
          example: "मुझे तुम्हारे बात करने का तरीका पसंद नहीं है, मैं गुस्सा हूँ। (I don't like the way you talk, I am angry.)"
        },
        {
          word: "Water",
          meaning: "पानी (Paani)",
          definition: "A colorless, transparent, odorless, and nearly tasteless chemical substance, which is the main constituent of Earth's streams, lakes, and oceans, and the fluids of most living organisms.",
          example: "हमें दिन में कम से कम 8 गिलास पानी पीने की सलाह दी जाती है। (We are advised to drink at least 8 glasses of water a day.)"
        },
        {
          word: "Food",
          meaning: "खाना (Khana)",
          definition: "Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.",
          example: "मैंने अपने दोस्तों के साथ अच्छे खाने का आनंद लिया। (I enjoyed good food with my friends.)"
        },
        {
          word: "Cat",
          meaning: "बिल्ली (Billi)",
          definition: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
          example: "मेरी बिल्ली बहुत प्यारी है। (My cat is very cute.)"
        },
        {
          word: "Dog",
          meaning: "कुत्ता (Kutta)",
          definition: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.",
          example: "हमारे पास एक कुत्ता है, उसका नाम ब्राउनी है। (We have a dog, his name is Brownie.)"
        },
        {
          word: "Tree",
          meaning: "पेड़ (Ped)",
          definition: "A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
          example: "आम एक बहुत ही उपयोगी पेड़ है। (Mango is a very useful tree.)"
        },

        {
          word: "River",
          meaning: "नदी (Nadi)",
          definition: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
          example: "गंगा नदी भारत की प्रमुख नदी है। (The Ganges River is a major river of India.)"
        },
        {
          word: "Mountain",
          meaning: "पहाड़ (Pahad)",
          definition: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
          example: "हिमालय पहाड़ दुनिया के सबसे ऊँचे पर्वतमाला में से एक है। (The Himalayan mountain range is one of the tallest in the world.)"
        },
        {
          word: "Sun",
          meaning: "सूरज (Surya)",
          definition: "The star around which the earth orbits, whose light and heat are necessary for life on earth.",
          example: "सूरज की किरणों से पर्यावरण में ऊर्जा आती है। (Energy comes from the rays of the sun into the environment.)"
        },
        {
          word: "Book",
          meaning: "किताब (Kitab)",
          definition: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
          example: "मेरी पसंदीदा किताब रहस्य नामक है। (My favorite book is named Mystery.)"
        },
        {
          word: "Ocean",
          meaning: "सागर (Sagar)",
          definition: "A very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically.",
          example: "विश्व का सबसे बड़ा सागर हिंद महासागर है। (The largest ocean in the world is the Pacific Ocean.)"
        },
        {
          word: "Cloud",
          meaning: "बादल (Baadal)",
          definition: "A visible mass of condensed water vapor floating in the atmosphere, typically high above the ground.",
          example: "बारिश के लिए बादलों की आवश्यकता होती है। (Clouds are necessary for rain.)"
        },
        {
          word: "Computer",
          meaning: "कंप्यूटर (Computer)",
          definition: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
          example: "कंप्यूटर का उपयोग ज्ञान और जानकारी को बढ़ावा देने के लिए किया जाता है। (Computers are used to enhance knowledge and information.)"
        },
        {
          word: "Star",
          meaning: "तारा (Tara)",
          definition: "A fixed luminous point in the night sky that is a large, remote incandescent body like the sun.",
          example: "रात को आकाश में हमें कई तारे दिखाई देते हैं। (At night, we can see many stars in the sky.)"
        },
        {
          word: "Fire",
          meaning: "आग (Aag)",
          definition: "Combustion or burning, in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke.",
          example: "आग बुझाने के लिए पानी का उपयोग किया जाता है। (Water is used to extinguish fire.)"
        },
        {
          word: "Moon",
          meaning: "चाँद (Chand)",
          definition: "The natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.",
          example: "चाँद रात के आसमान में एक खूबसूरत दृश्य है। (The moon is a beautiful sight in the night sky.)"
        },
        {
          word: "Bird",
          meaning: "पक्षी (Pakshi)",
          definition: "A warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, a beak, and typically by being able to fly.",
          example: "मैने एक हरिण आकाश में उड़ते हुए देखा। (I saw a deer flying in the sky.)"
        },
        {
          word: "Fish",
          meaning: "मछली (Machli)",
          definition: "A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.",
          example: "समुद्र में एक समूह मछलियाँ स्वयंसेवक जैसे जीवन जीती हैं। (A group of fish in the ocean live a self-serving life.)"
        },
        {
          word: "Rain",
          meaning: "बारिश (Barish)",
          definition: "Moisture condensed from the atmosphere that falls visibly in separate drops.",
          example: "बारिश के मौसम में भीगना बहुत आनंददायक होता है। (It's very enjoyable to get wet in the rainy season.)"
        },
        {
          word: "House",
          meaning: "घर (Ghar)",
          definition: "A building for human habitation, especially one that consists of a ground floor and one or more upper storeys.",
          example: "मेरा घर एक छोटा सा लाल रंग का है। (My house is a small red-colored one.)"
        
        
        },
        {
          word: "Food",
          meaning: "खाना (Khana)",
          definition: "Any nutritious substance that people or animals eat or drink or that plants absorb in order to maintain life and growth.",
          example: "फलों और सब्जियों में विटामिन्स और मिनरल्स होते हैं जो हमारे शरीर के लिए आवश्यक होते हैं। (Fruits and vegetables contain vitamins and minerals essential for our body.)"
        },
        {
          word: "Tree",
          meaning: "पेड़ (Ped)",
          definition: "A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.",
          example: "आम एक बहुत ही उपयोगी पेड़ है। (Mango is a very useful tree.)"
        },
        {
          word: "Cat",
          meaning: "बिल्ली (Billi)",
          definition: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
          example: "मेरी बिल्ली रोज़ रात को मेरे साथ सोती है। (My cat sleeps with me every night.)"
        },
        {
          word: "Dog",
          meaning: "कुत्ता (Kutta)",
          definition: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractile claws, and a barking, howling, or whining voice.",
          example: "कुत्ता आदमी का सच्चा दोस्त होता है। (A dog is a man's best friend.)"
        },
        {
          word: "Flower",
          meaning: "फूल (Phool)",
          definition: "The seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly colored corolla (petals) and a green calyx (sepals).",
          example: "सबसे खूबसूरत फूल गुलाब का होता है। (The most beautiful flower is the rose.)"
        },
        {
          word: "Fruit",
          meaning: "फल (Phal)",
          definition: "The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.",
          example: "आम और सेब मेरे पसंदीदा फल हैं। (Mangoes and apples are my favorite fruits.)"
        },
        {
          word: "Rainbow",
          meaning: "इंद्रधनुष (Indradhanush)",
          definition: "An arch of colors visible in the sky, caused by the refraction and dispersion of the sun's light by rain or other water droplets in the atmosphere.",
          example: "इंद्रधनुष बारिश के बाद दिखाई देता है। (A rainbow appears after rain.)"
        },
        {
          word: "Grass",
          meaning: "घास (Ghaas)",
          definition: "Vegetation consisting of typically short plants with long narrow leaves, growing wild or cultivated on lawns and pasture, and as a fodder crop.",
          example: "गाय और भैंस घास खाती हैं। (Cows and buffaloes eat grass.)"
        },
        {
          word: "Earth",
          meaning: "पृथ्वी (Prithvi)",
          definition: "The third planet from the sun in the solar system, the planet on which we live.",
          example: "हमारा आदर्श बंधु हमारी मातृभूमि है। (Our ideal friend is our motherland.)"
        },
        {
          word: "Sky",
          meaning: "आकाश (Aakash)",
          definition: "The region of the atmosphere and outer space seen from the earth.",
          example: "रात को आकाश में सितारे दिखाई देते हैं। (Stars are visible in the sky at night.)"
        },
        {
          word: "Wind",
          meaning: "हवा (Hawa)",
          definition: "The perceptible natural movement of the air, especially in the form of a current of air blowing from a particular direction.",
          example: "हवा चल रही है। (The wind is blowing.)"
        },
        {
          word: "Light",
          meaning: "प्रकाश (Prakash)",
          definition: "The natural agent that stimulates sight and makes things visible.",
          example: "सूरज से प्रकाश आता है। (Light comes from the sun.)"
        },
        {
          word: "Darkness",
          meaning: "अंधकार (Andhkar)",
          definition: "The partial or total absence of light.",
          example: "रात के अंधकार में कुछ भी दिखाई नहीं देता। (Nothing is visible in the darkness of the night.)"
        },
        {
          word: "Day",
          meaning: "दिन (Din)",
          definition: "The time between sunrise and sunset, or the light part of a 24-hour period.",
          example: "दिन में सूरज ऊपर होता है। (The sun is above during the day.)"
        },
        {
          word: "Night",
          meaning: "रात (Raat)",
          definition: "The period of darkness in each twenty-four hours; the time from sunset to sunrise.",
          example: "रात को तारों की चमक दिखाई देती है। (The shine of stars is visible at night.)"
        },
        {
          word: "Raincoat",
          meaning: "रेनकोट (Raincoat)",
          definition: "A coat made of water-resistant material, worn to keep dry in the rain.",
          example: "बारिश में रहते हुए मैंने रेनकोट पहना। (I wore a raincoat while it was raining.)"
        },
       
        {
          word: "Umbrella",
          meaning: "छाता (Chhata)",
          definition: "A device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain or sometimes sun.",
          example: "बारिश में चलते समय मुझे छाता लेना चाहिए। (I should take an umbrella while going out in the rain.)"
        },
        {
          word: "Sunrise",
          meaning: "सूर्योदय (Suryoday)",
          definition: "The time in the morning when the sun appears or full daylight arrives.",
          example: "सूर्योदय का दृश्य बहुत ही सुंदर होता है। (The sight of sunrise is very beautiful.)"
        },
        {
          word: "Sunset",
          meaning: "सूर्यास्त (Suryast)",
          definition: "The time in the evening when the sun disappears or daylight fades.",
          example: "सूर्यास्त का दृश्य भी बहुत ही सुंदर होता है। (The sight of sunset is also very beautiful.)"
        },
        {
          word: "Mountain",
          meaning: "पहाड़ (Pahad)",
          definition: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
          example: "हिमालय पहाड़ दुनिया के सबसे ऊँचे पर्वतमाला में से एक है। (The Himalayan mountain range is one of the tallest in the world.)"
        },
        {
          word: "Sea",
          meaning: "समुद्र (Samudra)",
          definition: "The expanse of saltwater that covers most of the earth's surface and surrounds its landmasses.",
          example: "समुद्र में तैरना मजेदार होता है। (Swimming in the sea is enjoyable.)"
        },
        {
          word: "Lake",
          meaning: "झील (Jheel)",
          definition: "A large body of water surrounded by land.",
          example: "नैनीताल एक खूबसूरत झील के आसपास स्थित है। (Nainital is situated around a beautiful lake.)"
        },
        {
          word: "Beach",
          meaning: "समुद्रतट (Samudrataat)",
          definition: "A pebbly or sandy shore, especially by the ocean between high- and low-water marks.",
          example: "समुद्रतट पर बैठकर समय बिताना अच्छा लगता है। (Sitting on the beach and spending time feels good.)"
        },
        {
          word: "Sky",
          meaning: "आकाश (Aakash)",
          definition: "The region of the atmosphere and outer space seen from the earth.",
          example: "रात को आकाश में सितारे दिखाई देते हैं। (Stars are visible in the sky at night.)"
        },
        {
          word: "Moon",
          meaning: "चाँद (Chand)",
          definition: "The natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.",
          example: "चाँद रात के आसमान में एक खूबसूरत दृश्य है। (The moon is a beautiful sight in the night sky.)"
        },
        {
          word: "Planet",
          meaning: "ग्रह (Grah)",
          definition: "A celestial body moving in an elliptical orbit around a star.",
          example: "धरती एक ग्रह है जो सूर्य के चारों ओर घूमता है। (Earth is a planet that orbits around the sun.)"
        },
        {
          word: "Star",
          meaning: "तारा (Tara)",
          definition: "A fixed luminous point in the night sky that is a large, remote incandescent body like the sun.",
          example: "रात को आकाश में हमें कई तारे दिखाई देते हैं। (At night, we can see many stars in the sky.)"
        },
        {
          word: "Galaxy",
          meaning: "ब्रह्मांड (Brahmand)",
          definition: "A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction.",
          example: "हमारा सौरमंडल ब्रह्मांड का एक छोटा सा हिस्सा है। (Our solar system is a small part of the galaxy.)"
        },
        {
          word: "Universe",
          meaning: "ब्रह्मांड (Brahmand)",
          definition: "All existing matter and space considered as a whole; the cosmos.",
          example: "ब्रह्मांड अत्यंत विशाल है और अनंत है। (The universe is extremely vast and infinite.)"
        },
        {
          word: "Meteor",
          meaning: "धूमकेतु (Dhumaketu)",
          definition: "A small body of matter from outer space that enters the earth's atmosphere, becoming incandescent as a result of friction and appearing as a streak of light.",
          example: "धूमकेतु की धारा आकाश में  िखाई दी। (A streak of light from a meteor was visible in the sky.)"
        },
       
        {
          word: "Comet",
        
          meaning: "धूमकेतु (Dhumaketu)",
          definition: "A celestial object consisting of a nucleus of ice and dust and, when near the sun, a 'tail' of gas and dust particles pointing away from the sun.",
          example: "धूमकेतु आकाश में चमकते हुए दिखाई दिए। (A comet was seen shining in the sky.)"
        },
        {
          word: "Rainbow",
          meaning: "इंद्रधनुष (Indradhanush)",
          definition: "An arch of colors visible in the sky, caused by the refraction and dispersion of the sun's light by rain or other water droplets in the atmosphere.",
          example: "इंद्रधनुष बारिश के बाद दिखाई देता है। (A rainbow appears after rain.)"
        },
        {
          word: "Tornado",
          meaning: "बवंडर (Bavandar)",
          definition: "A mobile, destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud and advancing beneath a large storm system.",
          example: "बवंडर के आगे सभी चीजें बर्बाद हो जाती हैं। (Everything is destroyed in front of a tornado.)"
        },
        {
          word: "Volcano",
          meaning: "ज्वालामुखी (Jwalamukhi)",
          definition: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are or have been erupted from the earth's crust.",
          example: "ज्वालामुखी से आग और धुंध निकलती है। (Fire and smoke come out from a volcano.)"
        },
        {
          word: "Earthquake",
          meaning: "भूकंप (Bhookamp)",
          definition: "A sudden and violent shaking of the ground, sometimes causing great destruction, as a result of movements within the earth's crust or volcanic action.",
          example: "भूकंप के बाद भूमि के फटे हुए हिस्सों में जल निकलता है। (After an earthquake, water comes out from cracked parts of the earth.)"
        },
        {
          word: "Forest",
          meaning: "जंगल (Jangal)",
          definition: "A large area covered chiefly with trees and undergrowth.",
          example: "जंगल में वन्यजीवन बहुत संपन्न होता है। (Wildlife is abundant in the forest.)"
        },
        {
          word: "Desert",
          meaning: "रेगिस्तान (Registan)",
          definition: "A barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.",
          example: "अफ्रीका में सहारा रेगिस्तान सबसे बड़ा रेगिस्तान है। (The Sahara Desert in Africa is the largest desert.)"
        },
        {
          word: "Island",
          meaning: "द्वीप (Dweep)",
          definition: "A piece of land surrounded by water.",
          example: "मलदीव द्वीप समूह समुद्र में स्थित हैं। (The Maldives Islands are located in the ocean.)"
        },
        {
          word: "Windmill",
          meaning: "पवनचक्की (Pawan Chakki)",
          definition: "A machine that is turned by the power of the wind and that is used to produce power, pump water, etc.",
          example: "पवनचक्की किसानों के लिए जल निकासी के लिए उपयोगी होती है। (Windmills are useful for water extraction for farmers.)"
        },
        {
          word: "Lighthouse",
          meaning: "प्रकाशस्तंभ (Prakashstambh)",
          definition: "A tower or other structure containing a beacon light to warn or guide ships at sea.",
          example: "प्रकाशस्तंभ समुद्र में जहाजों को मार्गदर्शन के लिए प्रयोग किया जाता है। (Lighthouses are used for guiding ships in the sea.)"
        },
        {
          word: "Ship",
          meaning: "नौका (Nauka)",
          definition: "A large boat for traveling on water, especially across the sea.",
          example: "नौका समुद्र में जलयात्रा के लिए प्रयोग की जाती है। (A ship is used for sea voyages.)"
        },
        {
          word: "Boat",
          meaning: "नाव (Naav)",
          definition: "A small vessel for traveling over water, propelled by oars, sails, or an engine.",
          example: "नाव झील के पार जाने के लिए उपयोग की जाती है। (A boat is used to cross a lake.)"
        },
        {
          word: "Aeroplane",
          meaning: "हवाई जहाज़ (Hawai Jahaz)",
          definition: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
          example: "हवाई जहाज़ सफर के लिए अच्छा विकल्प होता है। (An aeroplane is a good option for traveling.)"
        },
        {
          word
        
        : "Train",
          meaning: "रेलगाड़ी (Railgadi)",
          definition: "A series of railroad cars moved as a unit by a locomotive or by integral motors.",
          example: "रेलगाड़ी दूसरे शहरों के लिए सफर के लिए उपयोग की जाती है। (Trains are used for traveling to other cities.)"
        },
        {
          word: "Car",
          meaning: "गाड़ी (Gaadi)",
          definition: "A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.",
          example: "गाड़ी सड़कों पर यात्रा के लिए उपयोग की जाती है। (Cars are used for traveling on roads.)"
        },
        {
          word: "Bicycle",
          meaning: "साइकिल (Cycle)",
          definition: "A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel.",
          example: "साइकिल पेड़ल की शक्ति से चलती है। (A bicycle moves with the power of pedals.)"
        },
        {
          word: "Bus",
          meaning: "बस (Bus)",
          definition: "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.",
          example: "बस बड़े संख्या में लोगों को एक स्थान से दूसरे स्थान पर ले जाती है। (Buses transport a large number of people from one place to another.)"
        },
        {
          word: "Truck",
          meaning: "ट्रक (Truck)",
          definition: "A large, heavy motor vehicle used for transporting goods, materials, or troops.",
          example: "ट्रक बड़े मात्रा में सामग्री को एक स्थान से दूसरे स्थान पर पहुंचाने के लिए उपयोग की जाती है। (Trucks are used for transporting large quantities of goods from one place to another.)"
        },
        {
          word: "Road",
          meaning: "सड़क (Sadak)",
          definition: "A wide way leading from one place to another, especially one with a specially prepared surface that vehicles can use.",
          example: "सड़क पर यातायात का नियमित संचालन होना चाहिए। (There should be regular traffic management on the road.)"
        },
        {
          word: "Bridge",
          meaning: "पुल (Pul)",
          definition: "A structure carrying a road, path, railroad, or canal across a river, ravine, road, railroad, or other obstacle.",
          example: "पुल दो किनारों को जोड़ता है। (A bridge connects two shores.)"
        },
        {
          word: "Building",
          meaning: "इमारत (Imarat)",
          definition: "A structure with a roof and walls, such as a house, school, store, or factory.",
          example: "नई इमारत बनाने के लिए स्थान पर मिट्टी को उठाया गया। (The land was cleared to build a new building.)"
        },
        {
          word: "Factory",
          meaning: "कारख़ाना (Karakhana)",
          definition: "A building or group of buildings where goods are manufactured or assembled chiefly by machine.",
          example: "यह कारख़ाना बड़ी मात्रा में उत्पादन करता है। (This factory produces goods in large quantities.)"
        },
        {
          word: "City",
          meaning: "शहर (Shehar)",
          definition: "A large town.",
          example: "दिल्ली भारत की राजधानी शहर है। (Delhi is the capital city of India.)"
        },
        {
          word: "Village",
          meaning: "गाँव (Gaav)",
          definition: "A group of houses and associated buildings, larger than a hamlet and smaller than a town, situated in a rural area.",
          example: "हमारा गाँव खूबसूरत है। (Our village is beautiful.)"
        },
        {
          word: "School",
          meaning: "स्कूल (School)",
          definition: "An institution for educating children.",
          example: "स्कूल शिक्षा का महत्वपूर्ण स्रोत है। (School is an important source of education.)"
        },
        {
          word: "Hospital",
          meaning: "अस्पताल (Aspatal)",
          definition: "An institution providing medical and surgical treatment and nursing care for sick or injured people.",
          example: "उसने घायलों को अस्पताल में ले जाया। (He took the injured to the hospital.)"
        },
        {
          word: "Library",
          meaning: "पुस्तकालय (Pustakalay)",
          definition: "A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.",
          example: "पुस्तकालय में शांति का वातावरण होता है। (The library has a peaceful environment.)"
        },
        {
          word: "Garden",
          meaning: "बाग़ (Bagh)",
          definition: "A piece of ground, often near a house, used for growing flowers, fruit, or vegetables.",
         
        
         example: "बगीचे में अनेक प्रकार के फूल होते हैं। (There are many types of flowers in the garden.)"
        },
        {
          word: "Park",
          meaning: "पार्क (Park)",
          definition: "A large public green area in a town, used for recreation.",
          example: "बच्चों के लिए खेलने के लिए पार्क में जाना अच्छा होता है। (It's good to go to the park for children to play.)"
        },
        {
          word: "Playground",
          meaning: "खेलकूद का मैदान (Khelkood ka Maidan)",
          definition: "An outdoor area provided for children to play in.",
          example: "खेलकूद का मैदान बच्चों के लिए होता है। (The playground is for children to play.)"
        },
        {
          word: "River",
          meaning: "नदी (Nadi)",
          definition: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
          example: "गंगा भारत की सबसे महत्वपूर्ण नदी है। (The Ganges is the most important river in India.)"
        },
        {
          word: "Lake",
          meaning: "झील (Jheel)",
          definition: "A large body of water surrounded by land.",
          example: "नैनीताल एक खूबसूरत झील के आसपास स्थित है। (Nainital is situated around a beautiful lake.)"
        },
        {
          word: "Ocean",
          meaning: "समुद्र (Samudra)",
          definition: "The expanse of saltwater that covers most of the earth's surface and surrounds its landmasses.",
          example: "समुद्र बड़ा होता है। (The ocean is vast.)"
        },
        {
          word: "Sea",
          meaning: "समुद्र (Samudra)",
          definition: "The expanse of saltwater that covers most of the earth's surface and surrounds its landmasses.",
          example: "समुद्र में तैरना मजेदार होता है। (Swimming in the sea is enjoyable.)"
        },
        {
          word: "Island",
          meaning: "द्वीप (Dweep)",
          definition: "A piece of land surrounded by water.",
          example: "मलदीव द्वीप समूह समुद्र में स्थित हैं। (The Maldives Islands are located in the ocean.)"
        },
        {
          word: "Mountain",
          meaning: "पहाड़ (Pahad)",
          definition: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill.",
          example: "हिमालय पहाड़ दुनिया के सबसे ऊँचे पर्वतमाला में से एक है। (The Himalayan mountain range is one of the tallest in the world.)"
        },
        {
          word: "Forest",
          meaning: "जंगल (Jangal)",
          definition: "A large area covered chiefly with trees and undergrowth.",
          example: "जंगल में वन्यजीवन बहुत संपन्न होता है। (Wildlife is abundant in the forest.)"
        },
        {
          word: "Desert",
          meaning: "रेगिस्तान (Registan)",
          definition: "A barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.",
          example: "अफ्रीका में सहारा रेगिस्तान सबसे बड़ा रेगिस्तान है। (The Sahara Desert in Africa is the largest desert.)"
        },
        {
          word: "Star",
          meaning: "तारा (Tara)",
          definition: "A fixed luminous point in the night sky that is a large, remote incandescent body like the sun.",
          example: "रात को आकाश में हमें कई तारे दिखाई देते हैं। (At night, we can see many stars in the sky.)"
        },
        
        {
          word: "Moon",
          meaning: "चाँद (Chand)",
          definition: "The natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.",
          example: "चाँद रात के आसमान में एक खूबसूरत दृश्य है। (The moon is a beautiful sight in the night sky.)"
        }, 
         
        {
          word: "Sun",
          meaning: "सूर्य (Surya)",
          definition: "The star around which the earth orbits.",
          example: "सूर्य अत्यंत गर्म होता है। (The sun is extremely hot.)"
        },

      //  word starts from A 
  {
    "word": "Almond",
    "meaning": "बादाम (Badam)",
    "definition": "The oval nutlike seed (kernel) of the almond tree, used as food.",
    "example": "बादाम सेहत के लिए अच्छे होते हैं। (Almonds are good for health.)"
  },
  {
    "word": "Alphabet",
    "meaning": "वर्णमाला (Varnamala)",
    "definition": "A set of letters or symbols in a fixed order, used to represent the basic sounds of a language.",
    "example": "वह अँग्रेज़ी वर्णमाला को अच्छे से जानता है। (He knows the English alphabet well.)"
  },
  {
    "word": "Amber",
    "meaning": "अम्बर (Ambar)",
    "definition": "A hard translucent fossilized resin produced by extinct coniferous trees of the Tertiary period, typically yellowish in color.",
    "example": "अम्बर आभूषण बनाने के लिए प्रयोग किया जाता है। (Amber is used to make jewelry.)"
  },
  {
    "word": "Amphibian",
    "meaning": "उभयचर (Ubhaychar)",
    "definition": "A cold-blooded vertebrate animal of a class that comprises the frogs, toads, newts, and salamanders. They are distinguished by having an aquatic gill-breathing larval stage followed by a terrestrial lung-breathing adult stage.",
    "example": "कुछ उभयचर पानी में और कुछ स्थलीय में रहते हैं। (Some amphibians live in water and some live on land.)"
  },
  {
    "word": "Amulet",
    "meaning": "ताबीज़ (Tabiz)",
    "definition": "An object, typically inscribed with magical incantations or symbols, worn to protect against evil spirits or to confer protection, healing, or other benefits.",
    "example": "उसने एक ताबीज़ पहना था जो उसे बुरी नज़र से बचाने के लिए था। (He wore an amulet to protect himself from the evil eye.)"
  },
  {
    "word": "Ancestor",
    "meaning": "पूर्वज (Purvaj)",
    "definition": "A person, typically one more remote than a grandparent, from whom one is descended.",
    "example": "हमारे पूर्वज ने हमारे लिए कई कठिनाइयों का सामना किया है। (Our ancestors have faced many hardships for us.)"
  },
  {
    "word": "Anchor",
    "meaning": "एंकर (Anchor)",
    "definition": "A heavy object attached to a rope or chain and used to moor a vessel to the sea bottom, typically one having a metal shank with a pair of curved, barbed flukes.",
    "example": "जहाज़ को खंडित होने से बचाने के लिए एंकर डाल दिया गया। (An anchor was dropped to save the ship from drifting.)"
  },
  {
    "word": "Angel",
    "meaning": "फरिश्ता (Farishta)",
    "definition": "A spiritual being believed to act as an attendant, agent, or messenger of God.",
    "example": "उसका दोस्त उसे अपना फरिश्ता समझता है। (His friend considers him his angel.)"
  },
  {
    "word": "Anger",
    "meaning": "गुस्सा (Gussa)",
    "definition": "A strong feeling of annoyance, displeasure, or hostility.",
    "example": "मेरे दोस्त को गुस्सा आया क्योंकि मैंने उसकी बात नहीं मानी। (My friend got angry because I didn't listen to him.)"
  },
  {
    "word": "Ant",
    "meaning": "चींटी (Cheenti)",
    "definition": "A small insect, often with a sting, that usually lives in a complex social colony with one or more breeding queens.",
    "example": "मैंने अपने बगीचे में चींटी को देखा। (I saw an ant in my garden.)"
  },
  {
    "word": "Apology",
    "meaning": "माफ़ी (Maafi)",
    "definition": "A regretful acknowledgment of an offense or failure.",
    "example": "उसने मुझसे अपनी गलती के लिए माफ़ी माँगी। (He apologized to me for his mistake.)"
  },
  {
    "word": "Apple",
    "meaning": "सेब (Seb)",
    "definition": "The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh.",
    "example": "मैंने एक सेब खाया। (I ate an apple.)"
  },
  {
    "word": "Apricot",
    "meaning": "खुबानी (Khubani)",
    "definition": "A juicy, soft fruit, resembling a small peach, of an orange-yellow color.",
    "example": "खुबानी खाने से सेहत के लिए लाभकारी होता है। (Eating apricots is beneficial for health.)"
  },
  {
    "word": "Aquarium",
    "meaning": "मछलीघर (Machhligar)",
    "definition": "A transparent tank of water in which fish and other water creatures and plants are kept.",
    "example": "मछलियों को मछलीघर में रखा जाता है। (Fish are kept in an aquarium.)"
  },
  {
    "word": "Architect",
    "meaning": "महारचित (Maharachit)",
    "definition": "A person who designs buildings and in many cases also supervises their construction.",
    "example": "यह इमारत महारचित ने डिज़ाइन की थी। (This building was designed by an architect.)"
  },
  {
    "word": "Art",
    "meaning": "कला (Kala)",
    "definition": "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture.",
    "example": "वह कला में माहिर है। (He is skilled in art.)"
  },
  {
    "word": "Artist",
    "meaning": "कलाकार (Kalaakar)",
    "definition": "A person who creates paintings or drawings as a profession or hobby.",
    "example": "वह एक बहुत ही प्रसिद्ध कलाकार है। (He is a very famous artist.)"
  },
  {
    "word": "Ash",
    "meaning": "राख (Rakh)",
    "definition": "The powdery residue left after the burning of a substance.",
    "example": "अगर कोई वस्तु जलाते हैं, तो उसके बाद राख रह जाती है। (If something is burned, ash remains after it.)"
  },
  {
    "word": "Astronomy",
    "meaning": "खगोलशास्त्र (Khagol Shastra)",
    "definition": "The branch of science that deals with celestial objects, space, and the physical universe as a whole.",
    "example": "मुझे खगोलशास्त्र में रुचि है। (I am interested in astronomy.)"
  },
  {
    "word": "Atheist",
    "meaning": "नास्तिक (Nastik)",
    "definition": "A person who disbelieves or lacks belief in the existence of God or gods.",
    "example": "वह नास्तिक है और धर्म में नहीं मानता। (He is an atheist and does not believe in religion.)"
  },
  {
    "word": "Atom",
    "meaning": "परमाणु (Paramanu)",
    "definition": "The basic unit of a chemical element, consisting of a nucleus of protons and neutrons with electrons in orbit around the nucleus.",
    "example": "परमाणु बहुत छोटे होते हैं और अत्यंत सूक्ष्म होते हैं। (Atoms are very small and extremely tiny.)"
  },
  {
    "word": "Autumn",
    "meaning": "शरद ऋतु (Sharad Ritu)",
    "definition": "The season between summer and winter, characterized by the gradual decrease in daylight hours and the onset of cooler temperatures.",
    "example": "मुझे शरद ऋतु में पत्तों का रंग बहुत पसंद है। (I love the colors of leaves in autumn.)"
  },
  {
    "word": "Avocado",
    "meaning": "एवोकाडो (Avocado)",
    "definition": "A pear-shaped fruit with a rough leathery skin, smooth oily edible flesh, and a large stone.",
    "example": "एवोकाडो एक स्वास्थ्यवर्धक फल है। (Avocado is a healthy fruit.)"
  },
  {
    "word": "Award",
    "meaning": "पुरस्कार (Puraskar)",
    "definition": "A prize or other mark of recognition given in honor of an achievement.",
    "example": "उसे बहुत सारे पुरस्कार मिले हैं। (He has received many awards.)"
  },
  {
    "word": "Axe",
    "meaning": "कुल्हाड़ी (Kulhadi)",
    "definition": "A tool typically used for chopping wood, usually a steel blade attached at a right angle to a wooden handle.",
    "example": "लकड़ी काटने के लिए कुल्हाड़ी का प्रयोग किया जाता है। (An axe is used for cutting wood.)"
  },

  
  {
    "word": "Abbey",
    "meaning": "अब्बे (Abbe)",
    "definition": "A complex of buildings used by members of a religious order under the governance of an abbot or abbess.",
    "example": "हमने एक पुराने अब्बे की यात्रा की। (We visited an old abbey.)"
  },
  {
    "word": "Absorb",
    "meaning": "अवशोषित करना (Avashoshit Karna)",
    "definition": "Take in or soak up (energy or a liquid or other substance) by chemical or physical action.",
    "example": "सूरज की किरणें पानी को अवशोषित करती हैं। (Sun rays absorb water.)"
  },
  {
    "word": "Abundant",
    "meaning": "प्रचुर (Prachur)",
    "definition": "Existing or available in large quantities; plentiful.",
    "example": "उस इलाके में हरी-भरी जगह है। (There are abundant green spaces in that area.)"
  },
  {
    "word": "Accelerate",
    "meaning": "गति बढ़ाना (Gati Badhana)",
    "definition": "Increase in rate, amount, or extent.",
    "example": "उसने अपनी कार की गति बढ़ाई। (He accelerated his car.)"
  },
  {
    "word": "Accent",
    "meaning": "उच्चारण (Uccharan)",
    "definition": "A distinctive way of pronouncing a language, especially one associated with a particular country, area, or social class.",
    "example": "उसका ब्रिटिश एक्सेंट बहुत आकर्षक है। (Her British accent is very attractive.)"
  },
  {
    "word": "Access",
    "meaning": "पहुंच (Pahunch)",
    "definition": "The means or opportunity to approach or enter a place.",
    "example": "सभी के लिए इस इंटरनेट को पहुंच है। (There is access to this internet for everyone.)"
  },
  {
    "word": "Accommodation",
    "meaning": "आवास (Aavas)",
    "definition": "A room, group of rooms, or building in which someone may live or stay.",
    "example": "हमने होटल में आवास किया। (We stayed in a hotel.)"
  },
  {
    "word": "Accomplish",
    "meaning": "पूरा करना (Pura Karna)",
    "definition": "Achieve or complete successfully.",
    "example": "उसने अपने लक्ष्य को पूरा किया। (He accomplished his goal.)"
  },
  {
    "word": "Accuracy",
    "meaning": "सटीकता (Sateekta)",
    "definition": "The quality or state of being correct or precise.",
    "example": "उसकी सटीकता का भरोसा कर सकते हैं। (You can trust his accuracy.)"
  },
  {
    "word": "Accumulate",
    "meaning": "संचित करना (Sanchit Karna)",
    "definition": "Gather together or acquire an increasing number or quantity of.",
    "example": "उसने धन की बड़ी रकम संचित की। (He accumulated a large amount of wealth.)"
  },
  {
    "word": "Acquaintance",
    "meaning": "परिचित (Parichit)",
    "definition": "A person's knowledge or experience of something.",
    "example": "मेरे पास इस विषय में अच्छा परिचय है। (I have a good acquaintance with this subject.)"
  },
  {
    "word": "Active",
    "meaning": "सक्रिय (Sakriya)",
    "definition": "Engaging or ready to engage in physically energetic pursuits.",
    "example": "उसकी जिम्मेदारी काम करने के लिए बहुत सक्रिय है। (He is very active in performing his duties.)"
  },
  {
    "word": "Adaptable",
    "meaning": "अनुकूलनशील (Anukoolansheel)",
    "definition": "Able to adjust to new conditions.",
    "example": "वह अनुकूलनशील है और हर माहौल में अच्छे से समाहित हो जाता है। (He is adaptable and can adjust well in every environment.)"
  },
  {
    "word": "Addict",
    "meaning": "नशेड़ी (Nashedi)",
    "definition": "A person who is addicted to a particular substance, typically an illegal drug.",
    "example": "नशेड़ी अपनी आदत से मुक्त नहीं हो सकता। (An addict cannot be free from his habit.)"
  },
  {
    "word": "Addition",
    "meaning": "जोड़ (Jod)",
    "definition": "The process or skill of calculating the total of two or more numbers or amounts.",
    "example": "उसने दो संख्याओं का जोड़ किया। (He did the addition of two numbers.)"
  },
  {
    "word": "Adjust",
    "meaning": "समायोजित करना (Samaayojit Karna)",
    "definition": "Alter or move (something) slightly in order to achieve the desired fit, appearance, or result.",
    "example": "मैंने अपने टी-शर्ट को समायोजित किया। (I adjusted my T-shirt.)"
  },
  {
    "word": "Admire",
    "meaning": "प्रशंसा करना (Prashansa Karna)",
    "definition": "Regard (an object, quality, or person) with respect or warm approval.",
    "example": "मैं उसकी प्रशंसा करता हूँ। (I admire him.)"
  },
  {
    "word": "Adopt",
    "meaning": "अपनाना (Apnaana)",
    "definition": "Take up or start to use or follow (an idea, method, or course of action).",
    "example": "उसने एक बच्चे को गोद लिया। (He adopted a child.)"
  },
  {
    "word": "Adult",
    "meaning": "वयस्क (Vayask)",
    "definition": "A person who is fully grown or developed.",
    "example": "वयस्कों को अपने निर्णयों के लिए जिम्मेदार होना चाहिए। (Adults should be responsible for their decisions.)"
  },
  {
    "word": "Adventure",
    "meaning": "साहसिक यात्रा (Saahsik Yatra)",
    "definition": "An unusual and exciting or daring experience.",
    "example": "मेरे दोस्तों के साथ यह साहसिक यात्रा बहुत अच्छी थी। (This adventure trip with my friends was very good.)"
  },
  {
    "word": "Advertise",
    "meaning": "विज्ञापन करना (Vigyaapan Karna)",
    "definition": "Describe or draw attention to (a product, service, or event) in a public medium in order to promote sales or attendance.",
    "example": "कंपनी ने अपने उत्पादों का विज्ञापन किया। (The company advertised its products.)"
  },
  {
    "word": "Advice",
    "meaning": "सलाह (Salaah)",
    "definition": "Guidance or recommendations offered with regard to prudent future action.",
    "example": "मुझे उसकी सलाह माननी चाहिए। (I should heed his advice.)"
  },
  {
    "word": "Advocate",
    "meaning": "प्रतिवादी (Prativaadi)",
    "definition": "A person who publicly supports or recommends a particular cause or policy.",
    "example": "उसने गरीबों के हक के लिए अपनी आवाज़ उठाई। (He advocated for the rights of the poor.)"
  },
  {
    "word": "Aerial",
    "meaning": "वायु (Vayu)",
    "definition": "Existing, happening, or operating in the air.",
    "example": "वायुसेना ने वायु अभ्यास किया। (The Air Force conducted aerial exercises.)"
  },
  {
    "word": "Affection",
    "meaning": "स्नेह (Sneh)",
    "definition": "A gentle feeling of fondness or liking.",
    "example": "मेरे दादा-दादी मुझसे बहुत स्नेह करते थे। (My grandparents had a lot of affection for me.)"
  },
  {
    "word": "Afford",
    "meaning": "कीमत का उचित होना (Keemat Ka Uchit Hona)",
    "definition": "Have enough money to pay for.",
    "example": "मैं उस घर की कीमत का खर्च कर सकता हूँ। (I can afford the cost of that house.)"
  },
  {
    "word": "Africa",
    "meaning": "अफ़्रीका (Africa)",
    "definition": "The second largest continent, situated mainly in the Northern Hemisphere, with a narrow strip in the Northeast extending to the equator.",
    "example": "अफ़्रीका में बहुत सारे देश हैं। (There are many countries in Africa.)"
  },
  {
    "word": "Aftermath",
    "meaning": "परिणाम (Parinaam)",
    "definition": "The consequences or aftereffects of a significant unpleasant event.",
    "example": "धरतीके इस तेज़ भूकम्प के परिणामस्वरूप बहुत नुक़सान हुआ। (There was a lot of damage as a result of this intense earthquake.)"
  },
  {
    "word": "Against",
    "meaning": "विरुद्ध (Viruddh)",
    "definition": "In opposition to.",
    "example": "वह अपने मित्र के विरुद्ध खड़ा है। (He is against his friend.)"
  },
  {
    "word": "Age",
    "meaning": "आयु (Aayu)",
    "definition": "The length of time that a person has lived or a thing has existed.",
    "example": "मेरी आयु 30 वर्ष है। (My age is 30 years.)"
  },
  {
    "word": "Agency",
    "meaning": "एजेंसी (Agency)",
    "definition": "A business or organization established to provide a particular service, typically one that involves organizing transactions between two other parties.",
    "example": "यह एक भारतीय एजेंसी है। (This is an Indian agency.)"
  },
  {
    "word": "Agenda",
    "meaning": "एजेंडा (Agenda)",
    "definition": "A list of items to be discussed at a formal meeting.",
    "example": "हमें उस दिन का एजेंडा प्राप्त हो चुका है। (We have received the agenda for that day.)"
  },
  {
    "word": "Agent",
    "meaning": "एजेंट (Agent)",
    "definition": "A person who acts on behalf of another, in particular.",
    "example": "वह एक एजेंट है जो कंपनी के लिए काम करता है। (He is an agent who works for the company.)"
  },
  {
    "word": "Aggressive",
    "meaning": "आक्रामक (Aakramak)",
    "definition": "Ready or likely to attack or confront; characterized by or resulting from aggression.",
    "example": "उसका आक्रामक व्यवहार समस्याओं का कारण बन गया। (His aggressive behavior became the cause of problems.)"
  },
  {
    "word": "Agile",
    "meaning": "परकर्मी (Parakarmi)",
    "definition": "Able to move quickly and easily.",
    "example": "शेर बहुत ही परकर्मी जानवर होते हैं। (Lions are very agile animals.)"
  },
  {
    "word": "Agreement",
    "meaning": "समझौता (Samjhauta)",
    "definition": "A negotiated and typically legally binding arrangement between parties as to a course of action.",
    "example": "उन्होंने एक समझौता किया। (They made an agreement.)"
  },
  {
    "word": "Agriculture",
    "meaning": "कृषि (Krishi)",
    "definition": "The science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products.",
    "example": "कृषि भारतीय अर्थव्यवस्था का मुख्य स्तंभ है। (Agriculture is the backbone of the Indian economy.)"
  },
  {
    "word": "Aid",
    "meaning": "सहायता (Sahayata)",
    "definition": "Help, typically of a practical nature.",
    "example": "हमने उसे सहायता की। (We provided him with aid.)"
  },
  {
    "word": "Air",
    "meaning": "वायु (Vayu)",
    "definition": "The invisible gaseous substance surrounding the earth, a mixture mainly of oxygen and nitrogen.",
    "example": "पर्यावरण में प्रदूषण की समस्या का मुख्य कारण है वायु प्रदूषण। (Air pollution is the main cause of environmental pollution.)"
  },
  {
    "word": "Aircraft",
    "meaning": "विमान (Vimaan)",
    "definition": "A vehicle that can fly, such as an airplane, helicopter, or balloon.",
    "example": "विमान अंतरिक्ष के ऊपर उड़ रहा था। (The aircraft was flying above the sky.)"
  },
  {
    "word": "Aisle",
    "meaning": "गलियारा (Galiyaara)",
    "definition": "A passage between rows of seats in a building such as a church or theater, an aircraft, or train.",
    "example": "मैंने वाहन के गलियारे से चला। (I walked through the aisle of the vehicle.)"
  },
  {
    "word": "Alcohol",
    "meaning": "शराब (Sharaab)",
    "definition": "A colorless volatile flammable liquid which is produced by the natural fermentation of sugars and is the intoxicating constituent of wine, beer, spirits, and other drinks, and is also used as an industrial solvent and as fuel.",
    "example": "वह शराब पीने के आदी है। (He is addicted to drinking alcohol.)"
  },
  {
    "word": "Alert",
    "meaning": "चेतावनी (Chetavani)",
    "definition": "Quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant.",
    "example": "वह बहुत ही चौकस है। (He is very alert.)"
  },
  {
    "word": "Algebra",
    "meaning": "बीजगणित (Beejganit)",
    "definition": "The part of mathematics in which letters and symbols are used to represent numbers and quantities in formulae and equations.",
    "example": "बीजगणित में उन्होंने अच्छे अंक प्राप्त किए। (They obtained good marks in algebra.)"
  },
  {
    "word": "Alias",
    "meaning": "उपनाम (Upnaam)",
    "definition": "Used to indicate that a named person is also known or more familiar under another specified name.",
    "example": "वह आमिर खान के उपनाम से भी जाना जाता है। (He is also known by the alias of Aamir Khan.)"
  },
  {
    "word": "Align",
    "meaning": "संरेखित (Sanrekhit)",
    "definition": "Place or arrange (things) in a straight line.",
    "example": "उन्होंने तारों को संरेखित किया। (They aligned the wires.)"
  },
  {
    "word": "Alive",
    "meaning": "जीवित (Jeevit)",
    "definition": "(of a person, animal, or plant) living, not dead.",
    "example": "हर जीव है। (Every living being is alive.)"
  },
  {
    "word": "Alliance",
    "meaning": "संधि (Sandhi)",
    "definition": "A union or association formed for mutual benefit, especially between countries or organizations.",
    "example": "दो देशों के बीच एक संधि हुई। (There was an alliance between two countries.)"
  },
  {
    "word": "Allocate",
    "meaning": "आवंटित करना (Aavantit Karna)",
    "definition": "Distribute (resources or duties) for a particular purpose.",
    "example": "सरकार ने धन की धारा को विभाजित किया। (The government allocated the flow of funds.)"
  },
  {
    "word": "Allow",
    "meaning": "अनुमति देना (Anumati Dena)",
    "definition": "Give (someone) permission to do something.",
    "example": "क्या आपको मुझे यहाँ बैठने की अनुमति है? (Do you allow me to sit here?)"
  },
  {
    "word": "Ally",
    "meaning": "साथी (Saathi)",
    "definition": "A state formally cooperating with another for a military or other purpose, typically by treaty.",
    "example": "दोनों देशों के बीच मित्रता है। (There is an alliance between both countries.)"
  },
  {
    "word": "Alter",
    "meaning": "बदलना (Badalna)",
    "definition": "Change or cause to change in character or composition, typically in a comparatively small but significant way.",
    "example": "मैंने अपनी वस्त्र स्थिति को बदला। (I altered my dress.)"
  },
  {
    "word": "Ambassador",
    "meaning": "राजदूत (Rajdoot)",
    "definition": "An accredited diplomat sent by a country as its official representative to a foreign country.",
    "example": "राजदूत अपने देश की ओर से दूसरे देशों में न्यायपालन करते हैं। (Ambassadors represent their country in other countries.)"
  },
  {
    "word": "Ambition",
    "meaning": "महत्वाकांक्षा (Mahatvaakanksha)",
    "definition": "A strong desire to do or achieve something, typically requiring determination and hard work.",
    "example": "उसकी महत्वाकांक्षा ने उसे उसके लक्ष्य की ओर आगे बढ़ाया। (His ambition drove him towards his goals.)"
  },
  {
    "word": "Amend",
    "meaning": "संशोधित करना (Sanshodhit Karna)",
    "definition": "Make minor changes in (a text) in order to make it fairer, more accurate, or more up-to-date.",
    "example": "कानून की संशोधन भारतीय संविधान का एक अहम हिस्सा है। (Amendment of laws is an important part of the Indian Constitution.)"
  },
  {
    "word": "Amnesty",
    "meaning": "समाधान (Samaadhaan)",
    "definition": "An official pardon for people who have been convicted of political offenses.",
    "example": "सरकार ने कई कट्टर अपराधियों को अम्नेस्टी दी। (The government granted amnesty to many hardcore criminals.)"
  },
  {
    "word": "Amount",
    "meaning": "राशि (Raashi)",
    "definition": "A quantity of something, typically the total of a thing or things in number, size, value, or extent.",
    "example": "उसने बहुत बड़ी राशि जीती। (He won a large amount.)"
  },
  {
    "word": "Amplify",
    "meaning": "विस्तृत करना (Vistrut Karna)",
    "definition": "Increase the volume of (sound), especially using an amplifier.",
    "example": "उसने अपनी आवाज़ को बढ़ाया। (He amplified his voice.)"
  },
  {
    "word": "Amuse",
    "meaning": "मनोरंजन करना (Manoranjan Karna)",
    "definition": "Cause (someone) to find something funny; entertain.",
    "example": "बच्चों को खिलौनों से मनोरंजन करो। (Amuse the children with toys.)"
  },
  {
    "word": "Analogy",
    "meaning": "समानता (Samaanta)",
    "definition": "A comparison between one thing and another, typically for the purpose of explanation or clarification.",
    "example": "गर्मियों में देवदार की छाया जैसे उसकी सुरक्षा प्रदान करती है, ठंड में साल की छाया उसी तरह देती है। (Just as the shade of the deodar provides security in summers, the shade of the pine tree provides the same security in winters.)"
  },
  {
    "word": "Ancestor",
    "meaning": "पूर्वज (Poorvaj)",
    "definition": "A person, typically one more remote than a grandparent, from whom one is descended.",
    "example": "मेरे पूर्वज गाँव में निवास करते थे। (My ancestors lived in the village.)"
  },
  {
    "word": "Anchor",
    "meaning": "एंकर (Anchor)",
    "definition": "A heavy object attached to a rope or chain and used to moor a ship to the sea bottom, typically one having a metal shank with a ring at one end for the rope and a pair of curved and/or barbed flukes at the other.",
    "example": "वह समाचार कार्यक्रम के लिए एंकर है। (He is an anchor for the news program.)"
  },
  {
    "word": "Ancient",
    "meaning": "प्राचीन (Praacheen)",
    "definition": "Belonging to the very distant past and no longer in existence.",
    "example": "प्राचीन काल का ग्रंथ बड़े रहस्यमय हैं। (The ancient texts are very mysterious.)"
  },
  {
    "word": "Anger",
    "meaning": "क्रोध (Krodh)",
    "definition": "A strong feeling of annoyance, displeasure, or hostility.",
    "example": "उसका क्रोध आसानी से उत्तेजित हो जाता है। (His anger gets easily provoked.)"
  },
  {
    "word": "Angle",
    "meaning": "कोण (Kon)",
    "definition": "The space (usually measured in degrees) between two intersecting lines or surfaces at or close to the point where they meet.",
    "example": "वह अपनी चाल के एक नए कोण की खोज कर रहा था। (He was searching for a new angle for his move.)"
  },
  {
    "word": "Animal",
    "meaning": "जानवर (Janvar)",
    "definition": "A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.",
    "example": "हमें जानवरों का सम्मान करना चाहिए। (We should respect animals.)"
  },
  {
    "word": "Animate",
    "meaning": "जीवित करना (Jeevit Karna)",
    "definition": "Bring to life.",
    "example": "उसने अपने कला को जीवित किया। (He animated his art.)"
  },
  {
    "word": "Announce",
    "meaning": "घोषित करना (Ghoshit Karna)",
    "definition": "Make a formal public statement about a fact, occurrence, or intention.",
    "example": "उसने अपना उत्तराधिकारी घोषित किया। (He announced his successor.)"
  },
  {
    "word": "Annual",
    "meaning": "वार्षिक (Varshek)",
    "definition": "Occurring once every year.",
    "example": "वार्षिक समारोह बहुत ही धूमधाम से मनाया गया। (The annual event was celebrated with great pomp and show.)"
  },
  {
    "word": "Answer",
    "meaning": "उत्तर (Uttar)",
    "definition": "A thing said, written, or done to deal with or as a reaction to a question, statement, or situation.",
    "example": "मैंने उसका प्रश्न किया। (I asked him a question.)"
  },
  {
    "word": "Anthem",
    "meaning": "राष्ट्रगान (Rashtragaan)",
    "definition": "A solemn patriotic song officially adopted by a country as an expression of national identity.",
    "example": "राष्ट्रीय राष्ट्रगान के बारे में क्या सोचते हैं? (What do you think about the national anthem?)"
  },
  {
    "word": "Anticipate",
    "meaning": "पूर्वानुमान (Poorvaanumaan)",
    "definition": "Regard as probable; expect or predict.",
    "example": "मैंने उसकी आगामी उपस्थिति का स्वागत किया। (I anticipated his upcoming presence.)"
  },
  {
    "word": "Anxiety",
    "meaning": "चिंता (Chinta)",
    "definition": "A feeling of worry, nervousness, or unease about something with an uncertain outcome.",
    "example": "वह अपने परीक्षा के लिए चिंतित था। (He was anxious about his exam.)"
  },
  {
    "word": "Any",
    "meaning": "कोई भी (Koi Bhi)",
    "definition": "Used to refer to one or some of a thing or number of things, no matter how much or how many.",
    "example": "कोई भी आदमी वहाँ नहीं था। (There was no one there.)"
  },
  {
    "word": "Apart",
    "meaning": "अलग (Alag)",
    "definition": "Separated by a distance; at a specified distance from each other in time or space.",
    "example": "उसके घर मेरे घर से दो क़िलोमीटर दूर है। (His house is two kilometers apart from mine.)"
  },
  {
    "word": "Apologize",
    "meaning": "माफ़ी मांगना (Maafi Maangna)",
    "definition": "Express regret for something that one has done wrong.",
    "example": "उसने अपनी गलती के लिए माफ़ी मांगी। (He apologized for his mistake.)"
  },
  {
    "word": "Apparent",
    "meaning": "स्पष्ट (Spashth)",
    "definition": "Clearly visible or understood; obvious.",
    "example": "वह अपनी स्पष्ट चाहत को बयां कर रहा था। (He was expressing his apparent desire.)"
  },
  {
    "word": "Appeal",
    "meaning": "अपील (Appeal)",
    "definition": "Make a serious, urgent, or heartfelt request.",
    "example": "उसने अपनी जेल की सजा पर अपील की। (He appealed against his jail sentence.)"
  },
  {
    "word": "Appear",
    "meaning": "प्रकट होना (Prakat Hona)",
    "definition": "Come into sight; become visible or noticeable, typically without visible agent or apparent cause.",
    "example": "सूर्य पूर्व में प्रकट होता है। (The sun appears in the east.)"
  },
  {
    "word": "Appliance",
    "meaning": "उपकरण (Upkaran)",
    "definition": "A device or piece of equipment designed to perform a specific task, typically a domestic one.",
    "example": "उसने एक नया घरेलू उपकरण ख़रीदा। (He bought a new household appliance.)"
  },
  {
    "word": "Appoint",
    "meaning": "नियुक्त करना (Niyukt Karna)",
    "definition": "Assign a job or role to (someone).",
    "example": "उसे प्रधानमंत्री ने अपने सलाहकार के रूप में नियुक्त किया। (The Prime Minister appointed him as his advisor.)"
  },
  {
    "word": "Appreciate",
    "meaning": "मानना (Maanna)",
    "definition": "Recognize the full worth of.",
    "example": "वह अपने मित्र के समर्थन को मानता है। (He appreciates the support of his friend.)"
  },
  {
    "word": "Approach",
    "meaning": "प्राप्ति (Prapti)",
    "definition": "Come near or nearer to (someone or something) in distance.",
    "example": "मैंने उससे अपनी प्राप्ति की। (I approached him for my attainment.)"
  },
  {
    "word": "Appropriate",
    "meaning": "उपयुक्त (Upyukt)",
    "definition": "Suitable or proper in the circumstances.",
    "example": "वह उपयुक्त विवाहीत युवती है। (She is an appropriate married woman.)"
  },
  {
    "word": "Approval",
    "meaning": "स्वीकृति (Sweekriti)",
    "definition": "The action of officially agreeing to something or accepting something as satisfactory.",
    "example": "सरकार ने उसे परियोजना की स्वीकृति दी। (The government gave approval to his project.)"
  },
  {
    "word": "Approve",
    "meaning": "मंजूर (Manjur)",
    "definition": "Officially agree to or accept as satisfactory.",
    "example": "सरकार ने परियोजना को मंजूरी दी। (The government approved the project.)"
  },
  {
    "word": "Approximate",
    "meaning": "परिमित (Parimit)",
    "definition": "Close to the actual, but not completely accurate or exact.",
    "example": "यहाँ के अनुमानित लाभ बहुत अधिक हैं। (The approximate profits here are very high.)"
  },
  {
    "word": "Arbitrary",
    "meaning": "मनमाना (Manmaana)",
    "definition": "Based on random choice or personal whim, rather than any reason or system.",
    "example": "सरकार ने मनमानी से यह नियम लागू किया। (The government implemented this rule arbitrarily.)"
  },
  {
    "word": "Architecture",
    "meaning": "वास्तुकला (Vaastukala)",
    "definition": "The art or practice of designing and constructing buildings.",
    "example": "उसने वास्तुकला में अपनी पढ़ाई की। (He studied architecture.)"
  },
  {
    "word": "Area",
    "meaning": "क्षेत्र (Kshetra)",
    "definition": "A region or part of a town, a country, or the world.",
    "example": "उसके आस-पास का क्षेत्र बहुत ही सुंदर है। (The area around him is very beautiful.)"
  },
  {
    "word": "Argument",
    "meaning": "तर्क (Tark)",
    "definition": "An exchange of diverging or opposite views, typically a heated or angry one.",
    "example": "उन दोनों के बीच में तर्क हो रहा है। (There is an argument going on between them.)"
  },
  {
    "word": "Army",
    "meaning": "सेना (Sena)",
    "definition": "A large organized body of armed personnel trained for war, especially on land.",
    "example": "सेना ने दुश्मन को परास्त कर दिया। (The army defeated the enemy.)"
  },
  {
    "word": "Around",
    "meaning": "चारों ओर (Charon Or)",
    "definition": "Located or situated on every side.",
    "example": "मेरे घर के आस-पास बहुत ही खूबसूरत है। (The area around my house is very beautiful.)"
  },
  {
    "word": "Arrange",
    "meaning": "व्यवस्थित करना (Vyavasthit Karna)",
    "definition": "Put (things) in a neat, attractive, or required order.",
    "example": "उसने अपनी किताबें क्रमबद्ध की। (He arranged his books.)"
  },
  {
    "word": "Arrest",
    "meaning": "गिरफ़्तारी (Giraftari)",
    "definition": "Seize (someone) by legal authority and take them into custody.",
    "example": "पुलिस ने उसे गिरफ़्तार किया। (The police arrested him.)"
  },
  {
    "word": "Arrive",
    "meaning": "आ जाना (Aa Jana)",
    "definition": "Reach a place at the end of a journey or a stage in a journey.",
    "example": "वह स्टेशन पर आ चुका है। (He has arrived at the station.)"
  },
  {
    "word": "Arrow",
    "meaning": "तीर (Tir)",
    "definition": "A shaft sharpened at the front and with feathers or vanes at the back, shot from a bow as a weapon or for sport.",
    "example": "वह एक तीर उछाला। (He shot an arrow.)"
  },
  {
    "word": "Art",
    "meaning": "कला (Kala)",
    "definition": "The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
    "example": "उसकी कला को समझने के लिए शिक्षा की जाती है। (Education is provided to understand his art.)"
  },
  {
    "word": "Article",
    "meaning": "लेख (Lekh)",
    "definition": "A piece of writing included with others in a newspaper, magazine, or other publication.",
    "example": "मैंने आज का अख़बार पढ़ा। (I read today's newspaper.)"
  },
  {
    "word": "Artificial",
    "meaning": "कृत्रिम (Kritrim)",
    "definition": "Made or produced by human beings rather than occurring naturally, typically as a copy of something natural.",
    "example": "उन्होंने कृत्रिम बादलों का निर्माण किया। (They created artificial clouds.)"
  },
  {
    "word": "As",
    "meaning": "जैसा (Jaisa)",
    "definition": "Used in comparisons to refer to the extent or degree of something.",
    "example": "जैसा वह बच्चों के साथ व्यवहार करता है, वह उनसे प्यार करता है। (As he behaves with children, he loves them.)"
  },
  {
    "word": "Ash",
    "meaning": "राख (Raakh)",
    "definition": "The powdery residue left after the burning of a substance.",
    "example": "वह अपने अशेषों को बहार ले गया। (He took his ashes out.)"
  },
  {
    "word": "Aside",
    "meaning": "एक ओर (Ek Or)",
    "definition": "To one side; out of the way.",
    "example": "वह अपनी बहस को एक ओर रखकर चला। (He set his argument aside and left.)"
  },
  {
    "word": "Ask",
    "meaning": "पूछना (Poochna)",
    "definition": "Say something in order to obtain an answer or some information.",
    "example": "मैंने उससे उसका पता पूछा। (I asked him his address.)"
  },
  {
    "word": "Asleep",
    "meaning": "सो रहा है (So Raha Hai)",
    "definition": "In or into a state of sleep.",
    "example": "वह गहरी नींद में था। (He was asleep deeply.)"
  },
  {
    "word": "Aspect",
    "meaning": "पहलू (Pahlu)",
    "definition": "A particular part or feature of something.",
    "example": "उसके कार्य में कई पहलू थे। (There were many aspects to his work.)"
  },
  {
    "word": "Assault",
    "meaning": "हमला (Hamlah)",
    "definition": "A physical attack.",
    "example": "वहाँ एक गैंग ने एक व्यक्ति पर हमला किया। (A gang assaulted a person there.)"
  },
  {
    "word": "Asset",
    "meaning": "संपत्ति (Sampatti)",
    "definition": "A useful or valuable thing, person, or quality.",
    "example": "वह अपनी संपत्तियों की सूची बना रहा था। (He was making a list of his assets.)"
  },
  {
    "word": "Assign",
    "meaning": "नियत करना (Niyat Karna)",
    "definition": "Allocate (a job or duty).",
    "example": "सरकार ने उसे एक नया कार्य सौंपा। (The government assigned him a new task.)"
  },
  {
    "word": "Assist",
    "meaning": "सहायता करना (Sahayata Karna)",
    "definition": "Help (someone), typically by doing a share of the work.",
    "example": "उसने उसकी पढ़ाई में सहायता की। (He assisted him in his studies.)"
  },
  {
    "word": "Associate",
    "meaning": "साथी (Saathi)",
    "definition": "Connect (someone or something) with something else in one's mind.",
    "example": "मैंने उस व्यक्ति को उसके काम से जोड़ा। (I associated that person with his work.)"
  },
  {
    "word": "Association",
    "meaning": "संघ (Sangh)",
    "definition": "A group of people organized for a joint purpose.",
    "example": "उनका गैर सरकारी संगठन बहुत ही सक्षम है। (Their non-governmental organization is very efficient.)"
  },
  {
    "word": "Assume",
    "meaning": "मानना (Maanna)",
    "definition": "Suppose to be the case, without proof.",
    "example": "वह उसके अभाव को मानता है। (He assumes his absence.)"
  },
  {
    "word": "Assure",
    "meaning": "आश्वासन देना (Aashvasan Dena)",
    "definition": "Tell someone something positively or confidently to dispel any doubts they may have.",
    "example": "मैंने उसे समर्थन दिया। (I assured him of support.)"
  },
  {
    "word": "At",
    "meaning": "पर (Par)",
    "definition": "Expressing location or arrival in a particular place or position.",
    "example": "मैं घर पर हूँ। (I am at home.)"
  },
  {
    "word": "Atmosphere",
    "meaning": "वायुमंडल (Vayumandal)",
    "definition": "The envelope of gases surrounding the earth or another planet.",
    "example": "मानव वायुमंडल को प्रदूषण की तनावपूर्ण स्थिति में डाल दिया गया है। (Human atmosphere has been put in a stressful situation of pollution.)"
  },
  {
    "word": "Attach",
    "meaning": "जोड़ना (Jodna)",
    "definition": "Join or fasten (something) to something else.",
    "example": "वह अपने दस्तावेज़ों को अपने मेल में जोड़ता है। (He attaches his documents in his mail.)"
  },
  {
    "word": "Attack",
    "meaning": "हमला (Hamlah)",
    "definition": "Take aggressive action against (a place or enemy forces) with weapons or armed force.",
    "example": "उन्होंने अपने दुश्मन पर हमला किया। (They attacked their enemy.)"
  },
  {
    "word": "Attempt",
    "meaning": "प्रयास (Prayaas)",
    "definition": "Make an effort to achieve or complete (something, typically a difficult task or action).",
    "example": "उसने उस परीक्षा के लिए प्रयास किया। (He attempted for that exam.)"
  },
  {
    "word": "Attend",
    "meaning": "उपस्थित (Upasthit)",
    "definition": "Be present at (an event, meeting, or function).",
    "example": "उनकी शादी में अधिकांश लोगों ने उपस्थिति दी। (Most of the people attended their wedding.)"
  },
  {
    "word": "Attention",
    "meaning": "ध्यान (Dhyaan)",
    "definition": "Notice taken of someone or something; the regarding of someone or something as interesting or important.",
    "example": "उसको अपने व्यावसायिक काम में ध्यान देना चाहिए। (He should pay attention to his professional work.)"
  },
  {
    "word": "Attitude",
    "meaning": "रवैया (Ravaiya)",
    "definition": "A settled way of thinking or feeling about someone or something, typically one that is reflected in a person's behavior.",
    "example": "उसका प्रवृत्ति अच्छा नहीं है। (His attitude is not good.)"
  },
  {
    "word": "Attract",
    "meaning": "आकर्षित करना (Aakarshit Karna)",
    "definition": "Cause to come to a place or participate in a venture by offering something of interest, favorable conditions, or opportunities.",
    "example": "उसने अपनी कविताओं से पाठकों को आकर्षित किया। (He attracted readers with his poems.)"
  },
  {
    "word": "Audience",
    "meaning": "दर्शक (Darshak)",
    "definition": "The assembled spectators or listeners at a public event, such as a play, movie, concert, or meeting.",
    "example": "उसका प्रदर्शन उसके दर्शकों को अच्छा लगा। (His performance was liked by his audience.)"
  },
  {
    "word": "Authority",
    "meaning": "अधिकार (Adhikar)",
    "definition": "The power or right to give orders, make decisions, and enforce obedience.",
    "example": "सरकार ने उसे अधिकार दिया। (The government gave him authority.)"
  },
  {
    "word": "Automatic",
    "meaning": "स्वचालित (Swachaalit)",
    "definition": "Working by itself with little or no direct human control.",
    "example": "वह स्वचालित प्रक्रिया पर अधिक ध्यान नहीं देता। (He doesn't pay much attention to the automatic process.)"
  },
  {
    "word": "Available",
    "meaning": "उपलब्ध (Uplabdh)",
    "definition": "Present or ready for immediate use.",
    "example": "उपाध्याय विद्यालय के लिए उपलब्ध नहीं थे। (The teachers were not available for the school.)"
  },
  {
    "word": "Average",
    "meaning": "औसत (Aausat)",
    "definition": "A quantity, rating, or the like that represents or approximates an arithmetic mean.",
    "example": "उसकी औसत कम है। (His average is low.)"
  },
  {
    "word": "Avoid",
    "meaning": "टालना (Taalna)",
    "definition": "Keep away from or stop oneself from doing (something).",
    "example": "उसने समस्याओं को टाला। (He avoided the problems.)"
  },
  {
    "word": "Aware",
    "meaning": "जागरूक (Jagaruk)",
    "definition": "Having knowledge or perception of a situation or fact.",
    "example": "वह इसकी अच्छे से जानकार था। (He was well aware of it.)"
  },
  {
    "word": "Away",
    "meaning": "दूर (Door)",
    "definition": "To or at a distance from a particular place, person, or thing.",
    "example": "वह अपने घर से दूर है। (He is away from his home.)"
  },
  {
    "word": "Awkward",
    "meaning": "अजीब (Ajeab)",
    "definition": "Causing difficulty; hard to do or deal with.",
    "example": "उसका व्यवहार थोड़ा अजीब था। (His behavior was a little awkward.)"
  },

  // Word starts from B
  {
    "word": "Baby",
    "meaning": "बच्चा (Baccha)",
    "definition": "A very young child, especially one newly or recently born.",
    "example": "मेरी बहन के घर एक नया बच्चा है। (There is a new baby in my sister's house.)"
  },
  {
    "word": "Back",
    "meaning": "पीठ (Peeth)",
    "definition": "The rear surface of the human body from the shoulders to the hips.",
    "example": "उसकी पीठ में दर्द हो रहा है। (He has pain in his back.)"
  },
  {
    "word": "Bad",
    "meaning": "बुरा (Bura)",
    "definition": "Of poor quality or a low standard.",
    "example": "यह बहुत ही बुरा फल है। (This is a very bad fruit.)"
  },
  {
    "word": "Bag",
    "meaning": "बस्ता (Basta)",
    "definition": "A container of flexible material with an opening at the top, used for carrying things.",
    "example": "उसने अपनी बस्ती में कपड़े रखे। (He kept clothes in his bag.)"
  },
  {
    "word": "Bake",
    "meaning": "बेक करना (Bake Karna)",
    "definition": "Cook (food) by dry heat without direct exposure to a flame, typically in an oven or on a hot surface.",
    "example": "मेरी माँ ने बर्तनों में भुना हुआ खाना बनाया। (My mother baked cooked food in utensils.)"
  },
  {
    "word": "Balance",
    "meaning": "संतुलन (Santulan)",
    "definition": "An even distribution of weight enabling someone or something to remain upright and steady.",
    "example": "उसका संतुलन ख़राब है। (His balance is bad.)"
  },
  {
    "word": "Ball",
    "meaning": "गेंद (Gend)",
    "definition": "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game.",
    "example": "उन्होंने खुद को गेंद से छुपाया। (He hid himself with the ball.)"
  },
  {
    "word": "Band",
    "meaning": "बैंड (Band)",
    "definition": "A flat, thin strip or loop of material put around something, typically to hold it together or to decorate it.",
    "example": "उसने अपनी कलाई पर काली बेंड डाली। (He put a black band on his wrist.)"
  },
  {
    "word": "Bank",
    "meaning": "बैंक (Bank)",
    "definition": "A financial establishment that uses money deposited by customers for investment, pays it out when required, makes loans at interest, and exchanges currency.",
    "example": "उसने अपने पैसे बैंक में जमा किए। (He deposited his money in the bank.)"
  },
  {
    "word": "Bar",
    "meaning": "बार (Bar)",
    "definition": "A long rod or rigid piece of wood, metal, or similar material, typically used as an obstruction, fastening, or weapon.",
    "example": "वह बार में चढ़ गया। (He climbed the bar.)"
  },
  {
    "word": "Base",
    "meaning": "आधार (Aadhar)",
    "definition": "The lowest part or edge of something, especially the part on which it rests or is supported.",
    "example": "इस विषय पर हमें आधारित तथ्य प्रदान किए गए हैं। (We have been provided with facts based on this subject.)"
  },
  {
    "word": "Basic",
    "meaning": "मूल (Mool)",
    "definition": "Forming an essential foundation or starting point; fundamental.",
    "example": "इस विषय में मैंने बुनियादी जानकारी हासिल की। (I acquired basic knowledge on this subject.)"
  },
  {
    "word": "Basis",
    "meaning": "आधार (Aadhar)",
    "definition": "The underlying support or foundation for an idea, argument, or process.",
    "example": "इस परियोजना के लिए मैंने एक नया आधार बनाया है। (I have created a new basis for this project.)"
  },
  {
    "word": "Basket",
    "meaning": "टोकरी (Tokri)",
    "definition": "A container used to hold or carry things, typically made from interwoven strips of cane or wire.",
    "example": "उसने सभी सब्जियाँ टोकरी में रखी। (He kept all the vegetables in the basket.)"
  },
  {
    "word": "Bat",
    "meaning": "बैट (Bat)",
    "definition": "A mammal with membranous wings that extend between the fingers and limbs.",
    "example": "बैट के आवाज़ सुनकर वह चिड़ गया। (He got scared after hearing the sound of a bat.)"
  },
  {
    "word": "Bath",
    "meaning": "नहाना (Nahana)",
    "definition": "Wash (someone) while immersing him or her in a container of water.",
    "example": "मैंने उसे नहलाया। (I bathed him.)"
  },
  {
    "word": "Battle",
    "meaning": "युद्ध (Yuddh)",
    "definition": "A sustained fight between large, organized armed forces.",
    "example": "वह जंगल में अपनी ज़िन्दगी की सबसे बड़ी लड़ाई लड़ रहा था। (He was fighting his biggest battle in the jungle.)"
  },
  {
    "word": "Beach",
    "meaning": "समुंदर का किनारा (Samundar Ka Kinara)",
    "definition": "A pebbly or sandy shore, especially by the ocean between high- and low-water marks.",
    "example": "वह बड़े बच्चों के साथ समुंदर के किनारे गया। (He went to the beach with the older children.)"
  },
  {
    "word": "Bean",
    "meaning": "राजमा (Rajma)",
    "definition": "An edible seed, typically kidney-shaped, growing in long pods on certain leguminous plants.",
    "example": "उसने अपने खाने में राजमा डाले। (He put beans in his food.)"
  },
  {
    "word": "Bear",
    "meaning": "भालू (Bhalu)",
    "definition": "A large, heavy mammal that walks on the soles of its feet, having thick fur and a very short tail.",
    "example": "उसने जंगल में एक भालू देखा। (He saw a bear in the jungle.)"
  },
  {
    "word": "Beat",
    "meaning": "पीटना (Peetna)",
    "definition": "Strike (a person or an animal) repeatedly and violently so as to hurt or injure them, typically with an implement such as a club or whip.",
    "example": "उन बच्चों ने एक-दूसरे को मारा। (The children beat each other.)"
  },
  {
    "word": "Beautiful",
    "meaning": "सुंदर (Sundar)",
    "definition": "Pleasing the senses or mind aesthetically.",
    "example": "वह बहुत ही सुंदर दिखाई दी। (She looked very beautiful.)"
  },
  {
    "word": "Because",
    "meaning": "क्योंकि (Kyonki)",
    "definition": "For the reason that; since.",
    "example": "उसने बजाय चलने के लिए कहा। (He said because of running.)"
  },
  {
    "word": "Become",
    "meaning": "होना (Hona)",
    "definition": "Begin to be.",
    "example": "उसका प्रयास सफल हो गया। (His attempt became successful.)"
  },
  {
    "word": "Bed",
    "meaning": "बिस्तर (Bistar)",
    "definition": "A piece of furniture for sleep or rest, typically a framework with a mattress and coverings.",
    "example": "मेरा बिस्तर बहुत ही आरामदायक है। (My bed is very comfortable.)"
  },
  {
    "word": "Bee",
    "meaning": "मधुमक्खी (Madhumakkhi)",
    "definition": "A stinging winged insect that collects nectar and pollen, produces wax and honey, and lives in large communities.",
    "example": "मधुमक्खियाँ फूल से नेक्टार लेती हैं। (Bees collect nectar from flowers.)"
  },
  {
    "word": "Before",
    "meaning": "पहले (Pehle)",
    "definition": "During the period of time preceding (a particular event or time).",
    "example": "वह अगले दिन से पहले चला गया। (He left before the next day.)"
  },
  {
    "word": "Begin",
    "meaning": "शुरू करना (Shuru Karna)",
    "definition": "Start; perform or undergo the first part of (an action or activity).",
    "example": "उसने अपना प्रस्ताव शुरू किया। (He began his proposal.)"
  },
  {
    "word": "Behave",
    "meaning": "व्यवहार करना (Vyavahar Karna)",
    "definition": "Act or conduct oneself in a specified way, especially toward others.",
    "example": "वह बच्चों के साथ अच्छे से व्यवहार करता है। (He behaves well with children.)"
  },
  {
    "word": "Behind",
    "meaning": "पीछे (Peeche)",
    "definition": "At or toward the back of something.",
    "example": "वह घर के पीछे खड़ा था। (He was standing behind the house.)"
  },
  {
    "word": "Believe",
    "meaning": "विश्वास करना (Vishwas Karna)",
    "definition": "Accept that (something) is true, especially without proof.",
    "example": "मैं उसके वचन पर विश्वास करता हूँ। (I believe in his words.)"
  },
  {
    "word": "Below",
    "meaning": "नीचे (Niche)",
    "definition": "At a lower level or layer than.",
    "example": "उसका घर मेरे घर से नीचे है। (His house is below my house.)"
  },
  {
    "word": "Best",
    "meaning": "सबसे अच्छा (Sabse Achha)",
    "definition": "Of the most excellent, effective, or desirable type or quality.",
    "example": "यह उसकी सबसे अच्छी कविता है। (This is his best poem.)"
  },
  {
    "word": "Better",
    "meaning": "बेहतर (Behatar)",
    "definition": "Of a more excellent or effective type or quality.",
    "example": "वह उससे बेहतर खिलाड़ी है। (He is a better player than him.)"
  },
  {
    "word": "Between",
    "meaning": "बीच में (Beech Mein)",
    "definition": "At, into, or across the space separating (two objects or regions).",
    "example": "मेरे घर और स्कूल के बीच में एक पार्क है। (There is a park between my house and school.)"
  },
  {
    "word": "Big",
    "meaning": "बड़ा (Bada)",
    "definition": "Of considerable size, extent, or intensity.",
    "example": "उसके घर में एक बड़ी बिल्ली है। (There is a big cat in his house.)"
  },
 



        
        
      
      
     ];

    let currentIndex = 0; // Initialize the index to 0 to display the first word
    