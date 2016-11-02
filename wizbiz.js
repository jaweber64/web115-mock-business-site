/**
 * Created by jweber29 on 10/4/16.
 */

$(document).ready(function() {

    // ****************************************************************
    function setButtonHover(prod) {
        $(prod).hover(function () {
                $(prod).css("box-shadow", "2px 2px 4px grey");
            },
            function () {
                $(prod).css("box-shadow", "none");
            }
        )
    }
// ****************************************************************
    function setTextHover(prod) {
        $(prod).hover(function () {
                $(prod).css("text-shadow", "2px 2px 4px grey");
            },
            function () {
                $(prod).css("text-shadow", "none");
            }
        )
    }
    // ****************************************************************
    // Animals Page (animals.html)
    // ****************************************************************
    function manip(fld1, fld2, fld3) {
        $(fld1).slideToggle(500);
        $(fld2).animate({left: "+75%"});
        $(fld2).animate({left: "0%"});
        if ($(fld3).css("width") == "150px") {
            $(fld3).animate({width: "50px"});
        } else {
            $(fld3).animate({width: "150px"});
        }
    }

    $("#animalBckgrndHdr").click(function() {
        $("#animalBckgrnd").slideToggle(500);
    });

    $("#hdrCat").click(function () {
        manip("#descrCat", "#hdrCat", "#cat");
    });
    $("#hdrToad").click(function () {
        manip("#descrToad", "#hdrToad", "#toad");
    });
    $("#hdrBird").click(function () {
        manip("#descrBird", "#hdrBird", "#bird");
    });
    $("#hdrDog").click(function () {
        manip("#descrDog", "#hdrDog", "#dog");
    });

    setTextHover("#animalBckgrndHdr");
    setTextHover("#hdrCat");
    setTextHover("#hdrToad");
    setTextHover("#hdrBird");
    setTextHover("#hdrDog");

    // ****************************************************************
    // Potions Page (potions.html)
    // ****************************************************************
    setButtonHover("#pot1");
    setButtonHover("#pot2");
    setButtonHover("#pot3");
    setButtonHover("#pot4");
    setButtonHover("#pot5");

    var potImg = new(Image);
    var potimage = ["images/beauty.png","images/apple.png","images/meditate.png","images/water.png", "images/yoga.png"];
    var pottitles = ["Beauty Potion", "Simple Love Potion", "Meditation", "Cooling Potion", "Healing Potion"];
    var potCost = "$14.95";
    var potInfo = ["This will improve your looks and keep you looking young for as long as your genes will allow and " +
    "beyond.  It combines a bit of old herbal medicine, and a bit of new nutritional science.  Drink this twice a week.  " +
    "Set a reminder for Tuesday and Saturday, for example.",

        "This will not force someone to love you, but it will ease the way to their expressing it if love is there.  " +
        "This is based on an old, well known recipe.",

        "This potion is helpful to achieve a reasonably relaxed and open state that is good for meditation and trance.  " +
        "It uses old standard ingredients that are known to work well for this purpose.  Some may wish to add a little " +
        "vodka or another clear liquor, while others may wish to avoid this.",

        "Sometimes in the summer or when they have a fever, people have a loss of appetite and upset stomach, or general " +
        "discomfort from being too hot.  This helps to cool them off and make their insides feel more comfortable.  " +
        "Be aware that it can make loose bowels worse, so don’t give it to someone who already has a problem with that.  " +
        "This is based on some well used Indian recipes.  Start this the day before you want to serve it.",

        "This is a general healing potion that basically boosts the immune system and helps the body to heal or recover " +
        "from illness faster.  This is very old fashioned, but very effective."];


    var beautyPotIng = ["1 cup orange juice", "1/2 cup water", "1-2 teaspoons honey", "2 egg yolks (bless your eggs with " +
            "your fertility Goddess)", "1 gram dried Roman chamomile if you are under 25 or 1 gram dried helichrysum " +
            "arenarum if you are over 25"];

    var lovePotIng = ["1 cup of milk", "3 drops of vanilla extract", "1 drop of rose or orange flavoring", "1/2 teaspoon " +
            "coriander powder", "2 teaspoons honey "];
    var medPotIng = ["2 cups of water", "1 heaping teaspoon blue lotus", "1 heaping teaspoon hibiscus", "1/2 teaspoon lavender",
            "honey or stevia to taste"];
    var coolPotIng = ["1 teaspoon edible almond gum (badam pisin) powder", "2 cups of water", "few leaves of fresh mint",
            "a half a lemon, sliced", "honey or stevia herb to taste", "an additional 2 cups of water, or well crushed ice"];
    var healPotIng = ["a liter of vinegar", "1 entire head of garlic with the root end sliced off", "a handful of dried helichrysum arenarum",
        "a handful of non toxic pine needles"];


    var beautyPotInstr = ["Make a tea (preferably in your cauldron) from the water and chamomile by heating the water until " +
            "it is just boiling, adding the chamomile, and removing it from the heat.  Let this settle and cool.",
            "Put your egg yolks in the bottom of a pretty wine glass, and beat them well.",
            "Mix in the honey, and then the orange juice, and the liquid of your tea.",
            "Drink up.  This does not keep for long."];

    var lovePotInstr = ["Put your milk and honey in the cauldron, pot, or warmer.",
        "Give your intent to the coriander.  It helps to hold it in your hand for a moment and speak to it.",
        "Add the vanilla and flavoring with intent.",
        "Stir and heat until hot, but not boiling.",
        "Serve this to your lover.  It’s very nice to serve this in a drinking bowl or wide cup with a few fresh rose petals floating in it."];

    var medPotInstr = ["Boil the herbs for 20 minutes, and then sweeten with honey or stevia to your taste."];

    var coolPotInstr = ["Mix the almond gum powder with 2 cups of water in a container, cover it and let it set for 24 hours.",
        "Put the lemon and mint in a large jar.", "Pour over enough boiling water to cover the lemon.",
        "Add enough honey or stevia to make it sweet enough.", "Let it cool.", "Strain the liquid into a tall glass.",
        "Get your almond gum and strain out the excess liquid.", "Add this to the lemonade, and stir.",
        "Refrigerate or add some crushed ice, and then serve it with your love."];

    var healPotInstr = ["Put the herbs in a jar.",
        "Bring the vinegar to a rolling boil then turn it off and let it cool until it is warm but not cold-cold.",
        "Pour the vinegar over the herbs and cover it loosely while it cools completely.",
        "Tighten the cap and let it set in a cool, dark place for at least 6 weeks."];


    var potcount = potimage.length;

    for (var k=0; k<potcount; k++) {
        potImg.src = potimage[k];
        potimage.push(potImg);
    }

    /* create potion ingredient and instruction html list code and put into array */

        var ingredlist, instrlist, listCount;
        /*  Create the html ingredient list code for the beauty potion*******************************/
        listCount = beautyPotIng.length;
        ingredlist = "<ul>";
        for (i=0; i<listCount; i++) {
            ingredlist = ingredlist + "<li>" + beautyPotIng[i] + "</li>";
        }
        ingredlist = ingredlist + "</ul>";
        var potIng = [ingredlist];

        /*  Create the html ingredient list code for the love potion*******************************/
        listCount = lovePotIng.length;
        ingredlist = "<ul>";
        for (i=0; i<listCount; i++) {
            ingredlist = ingredlist + "<li>" + lovePotIng[i] + "</li>";
        }
        ingredlist = ingredlist + "</ul>";
        potIng[1] = ingredlist;

        /*  Create the html ingredient list code for the meditation potion*******************************/
        listCount = medPotIng.length;
        ingredlist = "<ul>";
        for (i=0; i<listCount; i++) {
            ingredlist = ingredlist + "<li>" + medPotIng[i] + "</li>";
        }
        ingredlist = ingredlist + "</ul>";
        potIng[2] = ingredlist;
        //alert(potIng[2]);

        /*  Create the html ingredient list code for the cooling potion*******************************/
        listCount = coolPotIng.length;
        ingredlist = "<ul>";
        for (i=0; i<listCount; i++) {
            ingredlist = ingredlist + "<li>" + coolPotIng[i] + "</li>";
        }
        ingredlist = ingredlist + "</ul>";
        potIng[3] = ingredlist;

        /*  Create the html ingredient list code for the healing potion*******************************/
        listCount = healPotIng.length;
        ingredlist = "<ul>";
        for (i=0; i<listCount; i++) {
            ingredlist = ingredlist + "<li>" + healPotIng[i] + "</li>";
        }
        ingredlist = ingredlist + "</ul>";
        potIng[4] = ingredlist;

        /*  Create the html instruction list code for the beauty potion*******************************/
        listCount = beautyPotInstr.length;
        instrlist = "<ol>";
        for (i=0; i<listCount; i++) {
            instrlist = instrlist + "<li>" + beautyPotInstr[i] + "</li>";
        }
        instrlist = instrlist + "</ol>";
        var potInstr = [instrlist];

        /*  Create the html instruction list code for the love potion*******************************/
        listCount = lovePotInstr.length;
        instrlist = "<ol>";
        for (i=0; i<listCount; i++) {
            instrlist = instrlist + "<li>" + lovePotInstr[i] + "</li>";
        }
        instrlist = instrlist + "</ol>";
        potInstr[1] = instrlist;

        /*  Create the html instruction list code for the meditate potion*******************************/
        listCount = medPotInstr.length;
        instrlist = "<ol>";
        for (i=0; i<listCount; i++) {
            instrlist = instrlist + "<li>" + medPotInstr[i] + "</li>";
        }
        instrlist = instrlist + "</ol>";
        potInstr[2] = instrlist;

        /*  Create the html instruction list code for the cooling potion*******************************/
        listCount = coolPotInstr.length;
        instrlist = "<ol>";
        for (i=0; i<listCount; i++) {
            instrlist = instrlist + "<li>" + coolPotInstr[i] + "</li>";
        }
        instrlist = instrlist + "</ol>";
        potInstr[3] = instrlist;

        /*  Create the html instruction list code for the healing potion*******************************/
        listCount = healPotInstr.length;
        instrlist = "<ol>";
        for (i=0; i<listCount; i++) {
            instrlist = instrlist + "<li>" + healPotInstr[i] + "</li>";
        }
        instrlist = instrlist + "</ol>";
        potInstr[4] = instrlist;


    var lastPotionIndex = -1;

    function displayPotion(index) {

        if ($("#potcard").css("display") == "none") {
            document.getElementById("pottitle").innerHTML = pottitles[index];
            document.getElementById("potinfo").innerHTML = potInfo[index];
            document.getElementById("potimg").src = potimage[index];
            document.getElementById("potcost").innerHTML = potCost;
            //alert(potIng[index]);
            $("#ingred").empty();
            $("#ingred").append(potIng[index]);
            $("#instr").empty();
            $("#instr").append(potInstr[index]);
            $("#potcard").slideDown(500);
        } else {
            if (index == lastPotionIndex) {
                $("#potcard").slideUp(500);
            } else {
                document.getElementById("pottitle").innerHTML = pottitles[index];
                document.getElementById("potinfo").innerHTML = potInfo[index];
                document.getElementById("potimg").src = potimage[index];
                document.getElementById("potcost").innerHTML = potCost;
                $("#ingred").empty();
                $("#ingred").append(potIng[index]);
                $("#instr").empty();
                $("#instr").append(potInstr[index]);
                $("#potcard").slideDown(500);
            }
        }
        lastPotionIndex = index;
    }

    $("#pot1").click(function () {displayPotion(0);});
    $("#pot2").click(function () {displayPotion(1);});
    $("#pot3").click(function () {displayPotion(2);});
    $("#pot4").click(function () {displayPotion(3);});
    $("#pot5").click(function () {displayPotion(4);});

    $("#potdl").click(function() {alert("Potion Ingredients / Instructions Downloaded!")});
    $("#potbuy").click(function() {alert("Ready-made Potion added to your Cart.")});

    // ****************************************************************
    // Spells Page (spells.html)
    // ****************************************************************
    setButtonHover("#spell1");
    setButtonHover("#spell2");
    setButtonHover("#spell3");
    setButtonHover("#spell4");

    var spellImg = new(Image);
    var spellimage = ["images/money.png","images/love.png","images/sleep.png","images/yoga.png"];
    var spelltitles = ["Money / Prosperity", "Love", "Sleep & Dream", "Health"];
    var spellCost = "Free!";
    var spellChant = ["Prosperity is everywhere \nI need some wealth, \n Financial health \nI just need my share",

        "Star of love, burn so bright \n Aid me in my spell tonight \n Unite my true love to me \n As I will it, so mote it be.",

        "Bring me quiet \n Bring me peace \n Ease my dreams \n Nightmares cease",

        "Bring health to my body \n Heal mind and soul too \n Strength and well-being \n Make it all new."];

    spcount = spellimage.length;

    for (var i=0; i<spcount; i++) {
        spellImg.src = spellimage[i];
        spellimage.push(spellImg);
    }

    var lastSpellIndex = -1;
    function displaySpell(index) {
        if ($("#spellcard").css("display") == "none") {
            document.getElementById("spelltitle").innerHTML = spelltitles[index];
            document.getElementById("spellinfo").innerHTML = spellChant[index];
            document.getElementById("spellimg").src = spellimage[index];
            document.getElementById("spellcost").innerHTML = spellCost;
            $("#spellcard").slideDown(500);
        } else {
            if (index == lastSpellIndex) {
                $("#spellcard").slideUp(500);
            } else {
                document.getElementById("spelltitle").innerHTML = spelltitles[index];
                document.getElementById("spellinfo").innerHTML = spellChant[index];
                document.getElementById("spellimg").src = spellimage[index];
                document.getElementById("spellcost").innerHTML = spellCost;
                $("#spellcard").slideDown(500);
            }
        }
        lastSpellIndex = index;
    }

    $("#spell1").click(function () {displaySpell(0);});
    $("#spell2").click(function () {displaySpell(1);});
    $("#spell3").click(function () {displaySpell(2);});
    $("#spell4").click(function () {displaySpell(3);});

    $("#spdl").click(function() {alert("Spell Downloaded!")});

    // ****************************************************************
    // Accessory Page (para.html)
    // ****************************************************************
    setButtonHover("#prod1");
    setButtonHover("#prod2");
    setButtonHover("#prod3");
    setButtonHover("#prod4");
    setButtonHover("#prod5");
    setButtonHover("#prod6");

    var slide = new(Image);
    var paccimage = ["images/cauldron-img.png","images/broom.png","images/wand.png","images/knife.png",
        "images/bookofshadows.png","images/pentacle.png"];
    var pacctitles = ["Cauldron", "Broom (Besom)", "Wand", "Athame (Knife)", "Book of Shadows", "Pentacle"];
    var paccCost = ["$125.99", "$42.50", "$36.95", "$66.99", "$27.33", "$17.95"];
    var paccdescrip = ["The cauldron is a necessary part of witches' paraphernalia. While many years ago, cauldrons were a " +
        "part of every home, now they're seldom seen except at Halloween or as a yard decoration. But cauldrons with magical " +
        "powers go back to the myth of the Celtic Goddess Cerridwen, whose cauldron represented the cycle of birth, renewal, " +
        "rebirth and transformation. Witches today often burn small fires (balefires) or incense in their cauldrons. The " +
        "cauldron can also represent the womb during the Great Rite ritual, which calls up the union of the God and Goddess " +
        "from which new life comes.",

        "Witches don't actually fly on brooms, although many do have them. They're used to purify an area of lingering " +
        "energies (similar to the use of sage below) before 'casting a circle.' Circles are cast before any ritual.",

        "Many witches use wands. Wands represent fire and the life force of the witch. It is a symbol of power, wisdom " +
        "and healing. The wand, like the sword, staff and athame, can be used to cast the circle. It may also be used " +
        "to direct energy during a spell.",

        "A knife isn't one of the traditional witch's props you can get at the costume shop, but the athame is an " +
        "important part of many rituals. The athame is a double-edged knife with a blade about 6 inches long. It is " +
        "not terribly sharp -- it is used to mark the edges of the circle and to stir the salt and water that are used " +
        "to consecrate (or make sacred) the circle. It is also used sometimes to carve symbols or words into candles. The " +
        "athame's owner marks either the handle or the blade with his or her witchcraft name and stores it in a white " +
        "container or cloth. The athame is also used in the Great Rite ritual (more on the Great Rite later) as a phallic " +
        "symbol, representing one half of the union of the God and Goddess from which new life comes.",

        "The Book of Shadows is essentially the witch's guidebook. It contains all of a particular witch's (or coven's) " +
        "ritual and spell information. It is the written record of everything the witches in that coven need to know, " +
        "such as descriptions and explanations of all of the sabbats (more on sabbats later).",

        "The pentacle is a five-pointed star (a pentagram) enclosed within a circle. The 'upright' pentacle or pentagram " +
        "(one point up, two points down) is a widely recognized symbol of witchcraft. The points represent earth, fire, " +
        "water, air and spirit. The circle represents the God and Goddess that allow the energy of the pentagram to be " +
        "focused. It is symbolic of the idea of bringing together spirit and earth."];

    var count =  paccimage.length;
    for (var j=0; j<count; j++) {
        slide.src = paccimage[j];
        paccimage.push(slide);
    }
    var lastProdIndex = -1;
    function displayAccProd(index) {
        if ($("#prodcard").css("display") == "none") {
            document.getElementById("title").innerHTML = pacctitles[index];
            document.getElementById("info").innerHTML = paccdescrip[index];
            document.getElementById("prodimg").src = paccimage[index];
            document.getElementById("cost").innerHTML = paccCost[index];
            $("#prodcard").slideDown(500);
        } else {
            if (index == lastProdIndex) {
                $("#prodcard").slideUp(500);
            } else {
                document.getElementById("title").innerHTML = pacctitles[index];
                document.getElementById("info").innerHTML = paccdescrip[index];
                document.getElementById("prodimg").src = paccimage[index];
                document.getElementById("cost").innerHTML = paccCost[index];
                $("#prodcard").slideDown(500);
            }
        }
        lastProdIndex = index;
    }

    $("#prod1").click(function () {displayAccProd(0);});
    $("#prod2").click(function () {displayAccProd(1);});
    $("#prod3").click(function () {displayAccProd(2);});
    $("#prod4").click(function () {displayAccProd(3);});
    $("#prod5").click(function () {displayAccProd(4);});
    $("#prod6").click(function () {displayAccProd(5);});

    $("#paccbuy").click(function() {alert("Item added to Cart!")});
    // ****************************************************************

});