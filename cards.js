// 1
firstCard = {
  prompt: "So your the new director. Glad to be working with you. So, what kind of movie do you want to make?",
  rightChoiceText: "Lets make a serious movie.",
  rightChoice: function(){
    addResource("action", 20)
    addResource("horror", 10)
    addPackToDeck("bumbling")
    addToTopDeck("crashWalls")
    },
  
  leftChoiceText: "Lets make a fun movie.", 
  leftChoice: function(){
    addResource("comedy", 20)
    addResource("drama", 10)
    addPackToDeck("bumbling")
    addToTopDeck("crashWalls")
    enemiesMade += 1;
  },
  name: "Larry the Screenwriter",
  resultText: "",
  image: "./images/screenwriter.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["crashWalls", "ExplodingSkyscraper", "floatingHearts", "fightScene", "monsterSuit"],
  
  //2
  "crashWalls" : {
    prompt: "Hey, director. We made some easy to crash through walls for a slapstick scene. Up to you if we use them.",
    rightChoiceText: "Too cartoony. Forget about it.",
      rightChoice: function(){
      addResource("comedy", -10)
      addToTopDeck("ExplodingSkyscraper")
      },
    leftChoiceText: "Sounds hilarious! Lets do it!", 
    leftChoice: function(){
      addResource("comedy", 10)
      addToTopDeck("ExplodingSkyscraper")
    enemiesMade += 1;
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

//3
  "ExplodingSkyscraper": {
    prompt: "Director, I can rig a whole skyscrapper set piece to go up in big crazy explosions! You up for it?!",
    rightChoiceText: "Sounds kinda dangerous. Lets skip it.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("floatingHearts")
      },
    leftChoiceText: "Sounds awesome. I'll have it in my film.", 
    leftChoice: function(){
      addResource("action", 10)
      addToTopDeck("floatingHearts")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //4
  "floatingHearts": {
    prompt: "Director, for any romantic scene, I make tiny hearts float around characters heads. Shall I do it?",
    rightChoiceText: "Thats a cartoon cliche. I don't want that.",
      rightChoice: function(){
      addResource("comedy", -10)
      addToTopDeck("fightScene")
      },
    leftChoiceText: "Sounds cute. Go ahead.", 
    leftChoice: function(){
      addResource("drama", 10)
      addResource("comedy", 10)
      addToTopDeck("fightScene")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

   //5
   "fightScene": {
    prompt: "Director, I checked in with the storyboard team, and they designed a killer martial arts fight scene. You want to add it the movie?",
    rightChoiceText: "A bit too violent for my taste. So, no.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("monsterSuit")
      },
    leftChoiceText: "Looks epic! Lets work it in.", 
    leftChoice: function(){
      addResource("action", 10)
      addToTopDeck("monsterSuit")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //6
  "monsterSuit": {
    prompt: "Director, the costume team just put together an awesome and terrifying monster costume. They really want it to appear in film.",
    rightChoiceText: "Looks way too scary. Pass.",
      rightChoice: function(){
      addResource("horror", -10)
      addToTopDeck("cartoonCharacters")
      },
    leftChoiceText: "Looks scary good. We will use it.", 
    leftChoice: function(){
      addResource("horror", 20)
      addToTopDeck("cartoonCharacters")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //7
  "cartoonCharacters": {
    prompt: "Hey director, I was thinking adding in 2D cartoon characters into our live action scenes. Its not really done anymore, so it could help us stand out.",
    rightChoiceText: "Its outdated and goofy. Hard pass.",
      rightChoice: function(){
      addResource("comedy", -10)
      addResource("drama", 10)
      addToTopDeck("romanceActress")
      },
    leftChoiceText: "Sounds like a fun addition. Lets do it.", 
    leftChoice: function(){
      addResource("comedy", 20)
      addResource("action", -10)
      addResource("horror", -10)
      addToTopDeck("romanceActress")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //8
  "romanceActress": {
    prompt: "Director, a famous actress has shown interest in our leading lady role. She is well known for romance movies, so I think we should add more wight to such scenes.",
    rightChoiceText: "Too much romance. The star power is not worth it.",
      rightChoice: function(){
      addResource("drama", -10)
      addToTopDeck("villainLook")
      },
    leftChoiceText: "Sweet! Lets add this love story effect.", 
    leftChoice: function(){
      addResource("drama", 20)
      addResource("horror", -10)
      addToTopDeck("villainLook")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //9
  "villainLook": {
    prompt: "Director, we need to decide on the villains asethethic. Should they have a comical appearance, or look intimadating, maybe even scary?",
    rightChoiceText: "The latter, make our villain a monster.",
      rightChoice: function(){
      addResource("horror", 20)
      addToTopDeck("villainVibe")
      },
    leftChoiceText: "The former, I like silly looking bad guys.", 
    leftChoice: function(){
      addResource("comedy", 20)
      addToTopDeck("villainVibe")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //10
  "villainVibe": {
    prompt: "We should also decide how the villain behaves. Should they be an incompetent goofball, or a ruthless, cruel threat?",
    rightChoiceText: "Make them cruel. We want the audience to hate this guy.",
      rightChoice: function(){
      addResource("drama", 10)
      addResource("comedy", -10)
      addResource("action", 20)
      addToTopDeck("spotLight")
      },
    leftChoiceText: "A clumsy, stupid villain will be a hit with kids. So go goofball.", 
    leftChoice: function(){
      addResource("comedy", 10)
      addResource("drama", -10)
      addResource("action", -10)
      addToTopDeck("spotLight")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //11
  "spotLight": {
    prompt: "Director, the lighting crew has mastered the use of spotlights and is prepared to use them for impactful scenes. Shall we use them?",
    rightChoiceText: "No thanks. Spotlights are for stage plays.",
      rightChoice: function(){
      addResource("drama", -10)
      addToTopDeck("lightning")
      },
    leftChoiceText: "Could help with dramatic character growth moments. Lets do it.", 
    leftChoice: function(){
      addResource("comedy", -10)
      addResource("drama", 10)
      addToTopDeck("lightning")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //12
  "lightning": {
    prompt: "Director, I have found a way to make realistic lightning! You gotta let me use it.",
    rightChoiceText: "Sorry, but lightning is not what this movie needs.",
      rightChoice: function(){
      addResource("horror", -10)
      addToTopDeck("comicEffect")
      },
    leftChoiceText: "This could add some intense moments Go for it.", 
    leftChoice: function(){
      addResource("horror", 20)
      addToTopDeck("comicEffect")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //13
  "comicEffect": {
    prompt: "Director, something that can add flare to the movie would be some bright, colorful impact flashes, like what appears when someone gets hit in a comic book. I can add that if you want.",
    rightChoiceText: "We are not trying to resemble comics, so no.",
      rightChoice: function(){
      addResource("comedy", -10)
      addResource("action", -10)
      addToTopDeck("jumpscare")
      },
    leftChoiceText: "Lets have this. It could make the movie a hit!!! Ha HA.", 
    leftChoice: function(){
      addResource("comedy", 10)
      addResource("action", 10)
      addToTopDeck("jumpscare")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

   //14
   "jumpscare": {
    prompt: "Hey director, I have come up with a killer idea for a jumpscare scene. Its up to you if we use it though.",
    rightChoiceText: "Lots of people do not enjoy jumpscares, so lets not.",
      rightChoice: function(){
      addResource("horror", -20)
      addToTopDeck("suburb")
      },
    leftChoiceText: "Let do this scene. The movie needs good thrills.", 
    leftChoice: function(){
      addResource("comedy", -10)
      addResource("horror", 20)
      addToTopDeck("suburb")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //15
  "suburb": {
    prompt: "Hey director, my team and I have finished plans for a suburb set. Its your call if we build it.",
    rightChoiceText: "Sounds like boring place for a movie.",
      rightChoice: function(){
      addResource("comedy", -10)
      addToTopDeck("blood")
      },
    leftChoiceText: "A relatable setting would be good for our movie.", 
    leftChoice: function(){
      addResource("comedy", 10)
      addResource("horror", -10)
      addToTopDeck("blood")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //16
  "blood": {
    prompt: "What's up director. I just got a large supply of fake blood, and I know how to make it look convincing. Can use it on our actors.",
    rightChoiceText: "I do not want that nasty stuff in my movie.",
      rightChoice: function(){
      addResource("action", -10)
      addResource("horror", -20)
      addToTopDeck("cuteBeasts")
      },
    leftChoiceText: "This will definitly add some stake to the movie.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("horror", 20)
      addResource("drama", 10)
      addToTopDeck("cuteBeasts")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //17
  "cuteBeasts": {
    prompt: "Hey, director. Marketing has asked use to make and animate some cute, colorful animals to appear in film. You up for it?",
    rightChoiceText: "Sounds like something for a kids movie. No thanks.",
      rightChoice: function(){
      addResource("comedy", -20)
      addToTopDeck("femmeFatal")
      },
    leftChoiceText: "This could be an interesting direction. We can give it a try.", 
    leftChoice: function(){
      addResource("comedy", 20)
      addToTopDeck("femmeFatal")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //18
  "femmeFatal": {
    prompt: "I've been thinking of adding a femme fatal to the story. With epic moves and complex relationships. What do you think?",
    rightChoiceText: "I'm not up for that kinda character.",
      rightChoice: function(){
      addResource("comedy", 10)
      addToTopDeck("laserSwords")
      },
    leftChoiceText: "That sort of character sounds great for the movie.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("drama", 10)
      addToTopDeck("laserSwords")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //19
  "laserSwords": {
    prompt: "Director, working with the prop team, I have made a realistic laser sword! The movie has got to have a place for this.",
    rightChoiceText: "I'm not sure about adding si-fi elements.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("pentHouse")
      },
    leftChoiceText: "This could be an epic addition.", 
    leftChoice: function(){
      addResource("action", 10)
      addToTopDeck("pentHouse")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //20
  "pentHouse": {
    prompt: "Director, the studio called and said we got permission to film in a penthouse. You want to go.",
    rightChoiceText: "I'd rather keep the film in familiar settings.",
      rightChoice: function(){
      addResource("comedy", 10)
      addResource("drama", -10)
      addToTopDeck("animatronics")
      },
    leftChoiceText: "A glimpse into the rich life would be interesting. Lets go through with it.", 
    leftChoice: function(){
      addResource("comedy", -10)
      addResource("drama", 10)
      addToTopDeck("animatronics") 
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //21
  "animatronics": {
    prompt: "The marketing team is asking for cute animal like creatures again, but this time as animatronics. Its your call if we make them.",
    rightChoiceText: "They would just end being creepy, so no.",
      rightChoice: function(){
      addResource("comedy", -10)
      addResource("horror", -10)
      addToTopDeck("explodingCars")
      },
    leftChoiceText: "I'd say do it. Animatronics can be cute.", 
    leftChoice: function(){
      addResource("comedy", 10)
      addResource("horror", 10)
      addToTopDeck("explodingCars")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

   //22
   "explodingCars": {
    prompt: "Director, I can have any car you desire to explode in fire, adding awesome to any car chase. Just tell me what to blow.",
    rightChoiceText: "Cars don't really explode like that, so no thanks.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("gunFight")
      },
    leftChoiceText: "Sounds great. Cars will boom when I say so.", 
    leftChoice: function(){
      addResource("action", 10)
      addToTopDeck("gunFight")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //23
  "gunFight": {
    prompt: "Director, considering adding an dangerous gun fight to story. Do you think its a good idea?",
    rightChoiceText: "No, gun fights are generic.",
      rightChoice: function(){
      addResource("action", -20)
      addToTopDeck("bigMonster")
      },
    leftChoiceText: "Yes, gun fights can be epic if filmed right.", 
    leftChoice: function(){
      addResource("action", 20)
      addResource("horror", 10)
      addToTopDeck("bigMonster")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //24
  "bigMonster": {
    prompt: "Director, I have experience with CGI and I have a model of a big monster on stand by. You want to use it?",
    rightChoiceText: "Cool beast, but a bit too scary for this movie.",
      rightChoice: function(){
      addResource("horror", -20)
      addToTopDeck("actorsQuits")
      },
    leftChoiceText: "I can work a beast that scary into the movie.", 
    leftChoice: function(){
      addResource("horror", 10)
      addToTopDeck("actorsQuits")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //25
  "actorsQuits": {
    prompt: "Director, I heard that the actors from an arguement scene we haven't finished yet just quit the movie. I could animate a replacement scene.",
    rightChoiceText: "No thanks, we'll just cut the scene from the movie.",
      rightChoice: function(){
      addResource("drama", -20)
      addToTopDeck("giantWeapon")
      },
    leftChoiceText: "Ok, do it. Hopefully the viewers won't notice.", 
    leftChoice: function(){
      addResource("drama", 20)
      addToTopDeck("giantWeapon")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //26
  "giantWeapon": {
    prompt: "Director, I've been working with the prop team to make a super cool mega-weapon for a big battle scene. What do you think.",
    rightChoiceText: "Its cool, but unrealistic. Save it for another movie.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("flameThrower")
      },
    leftChoiceText: "Looks awesome! This definitly has a place in the movie.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("comedy", 10)
      addToTopDeck("flameThrower")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //27
  "flameThrower": {
    prompt: "Director, I know some amazing things that can be done with fire. Fire walls. Fire symbols Flamethrowers. What do you say?",
    rightChoiceText: "To risky and flashy for this movie.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("gore")
      },
    leftChoiceText: "Fire can do great stuff, lets use it.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("drama", 10)
      addToTopDeck("gore")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //28
  "gore": {
    prompt: "Director, did you know I'm capable of serously realistic gore effects. I can demonstrate in your movie.",
    rightChoiceText: "Please, no. We don't need a gross out factor.",
      rightChoice: function(){
      addResource("horror", -10)
      addToTopDeck("domino")
      },
    leftChoiceText: "Sounds like a freaky good adition.", 
    leftChoice: function(){
      addResource("horror", 10)
      addResource("comedy", -10)
      addToTopDeck("domino")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //29
  "domino": {
    prompt: "Hey director, my team and I have plans to set up a domino effect slapstick runtine. Sound good for the movie.",
    rightChoiceText: "Not gonna use this. Too silly.",
      rightChoice: function(){
      addResource("comedy", -20)
      addToTopDeck("animeEyes")
      },
    leftChoiceText: "This will make a hilarious part of the movie.", 
    leftChoice: function(){
      addResource("comedy", 20)
      addToTopDeck("animeEyes")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //30
  "animeEyes": {
    prompt: "Uh, director, the marketing department asked me to give all our actors anime faces. What's your take on this?",
    rightChoiceText: "Don't do it. Its an outrageous idea.",
      rightChoice: function(){
      addResource("comedy", -10)
      addResource("drama", 10)
      addToTopDeck("hideAndSeek")
      },
    leftChoiceText: "A unique look for our movie. I'd say do it.", 
    leftChoice: function(){
      addResource("comedy", 10)
      addResource("drama", -10)
      addToTopDeck("hideAndSeek")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //31
  "hideAndSeek": {
    prompt: "Director, I've been working on a scene that has characters hiding from something dangerous. Want me to work it into the story?",
    rightChoiceText: "I'd say no. Adds the wrong kind of intensity.",
      rightChoice: function(){
      addResource("horror", -10)
      addResource("drama", -10)
      addToTopDeck("shopMeet")
      },
    leftChoiceText: "A good scarey scene for thrills. The movie needs this.", 
    leftChoice: function(){
      addResource("horror", 10)
      addResource("drama", 10)
      addToTopDeck("shopMeet")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //32
  "shopMeet": {
    prompt: "Director, we have to choose a public restraunt for the hero meets with the villain scene. We have permission to use either a coffee shop or a pizza joint.",
    rightChoiceText: "I choose the pizza joint.",
      rightChoice: function(){
      addResource("comedy", 10)
      addToTopDeck("climbing")
      },
    leftChoiceText: "I choose the coffee shop.", 
    leftChoice: function(){
      addResource("drama", 10)
      addToTopDeck("climbing")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //33
  "climbing": {
    prompt: "Director, I've designed a system for climbing structures, like buildings. The movie can surely use it.",
    rightChoiceText: "Sorry, we don't realy need it.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("kidActors")
      },
    leftChoiceText: "Great. We can use this.", 
    leftChoice: function(){
      addResource("action", 10)
      addToTopDeck("kidActors")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //34
  "kidActors": {
    prompt: "Director, they say never work with kids or animals in show business. I can animate kids into scenes if you don't want to risk it.",
    rightChoiceText: "I'm prepared to deal with kids.",
      rightChoice: function(){
      addResource("comedy", 10)
      addToTopDeck("merchandise")
      },
    leftChoiceText: "Anything to avoid working with kids.", 
    leftChoice: function(){
      addResource("comedy", -10)
      addToTopDeck("merchandise")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //35
  "merchandise": {
    prompt: "Director, the marketing team really wants us to add something that can be merchandised. What do think we should add?",
    rightChoiceText: "Sci-fi weapons for toys.",
      rightChoice: function(){
      addResource("action", 10)
      addToTopDeck("robotArm")
      },
    leftChoiceText: "Monsters for halloween costumes.", 
    leftChoice: function(){
      addResource("horror", 10)
      addToTopDeck("robotArm")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //36
  "robotArm": {
    prompt: "Director, the costume team just showed me a sick robot arm. You one our characters can use it?",
    rightChoiceText: "No, the movie doesn't need this.",
      rightChoice: function(){
      addResource("action", -10)
      addToTopDeck("flying")
      },
    leftChoiceText: "This could be a cool. We'll work it in.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("drama", 10)
      addToTopDeck("flying")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //37
  "flying": {
    prompt: "Director, I just heard about a green screen technique that can make someone appear to be flying or falling. You want to add it to the movie?",
    rightChoiceText: "No, green screen always looks bad.",
      rightChoice: function(){
      addResource("action", -10)
      addResource("drama", 10)
      addToTopDeck("danceParty")
      },
    leftChoiceText: "Do it and make it look good.", 
    leftChoice: function(){
      addResource("action", 10)
      addResource("drama", -10)
      addToTopDeck("danceParty")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //38
  "danceParty": {
    prompt: "Director, we just finished the dance hall set. What are planning to shoot their?",
    rightChoiceText: "A fancy dance party with some romcance.",
      rightChoice: function(){
      addResource("drama", 20)
      addToTopDeck("hallway")
      },
    leftChoiceText: "A funny scene where someone trips the whole crowd.", 
    leftChoice: function(){
      addResource("comedy", 20)
      addToTopDeck("hallway")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //39
  "hallway": {
    prompt: "Director, the hallway set is almost ready, but some of the lights have a flickering problem. Its going cost some time to fix.",
    rightChoiceText: "So, don't fix it. We can work with it.",
      rightChoice: function(){
      addResource("horror", 10)
      addResource("comedy", -10)
      addToTopDeck("fireHair")
      },
    leftChoiceText: "So, fix it. Its worth it.", 
    leftChoice: function(){
      addResource("drama", 10)
      addResource("horror", -10)
      addResource("comedy", -10)
      addToTopDeck("fireHair")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //40
  "fireHair": {
    prompt: "Director, I came up with a way have an actor's head catch fire without killing him. I'd say the movie needs this.",
    rightChoiceText: "Lets use it for a funny scene.",
      rightChoice: function(){
      addResource("comedy", 10)
      addToTopDeck("dreamSequence")
      },
    leftChoiceText: "I'll use in a bad guy death.", 
    leftChoice: function(){
      addResource("drama", 10)
      addResource("horror", 10)
      addResource("action", 10)
      addToTopDeck("dreamSequence")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //41
  "dreamSequence": {
    prompt: "I heard the script calls for a dream sequence, director. I could make an animation to serve as the sequence for effect.",
    rightChoiceText: "No, too much of a tone shift.",
      rightChoice: function(){
      addResource("drama", 10)
      addToTopDeck("villainDefeat")
      },
    leftChoiceText: "Yeah, lets make it surreal.", 
    leftChoice: function(){
      addResource("comdey", 10)
      addToTopDeck("villainDefeat")
    },
    name: "Timmy the Animator",
    resultText: "",
    image: "./images/animator.png",
    priority: 2,
    pack : "none"
  },

  //42
  "villainDefeat": {
    prompt: "Director, we need to decide, should the villain be captured upon defeat, or should they be killed?",
    rightChoiceText: "Kill them, villain deaths are satisfying.",
      rightChoice: function(){
      addResource("drama", 20)
      addToTopDeck("lastBlast")
      },
    leftChoiceText: "Just have them arrested.", 
    leftChoice: function(){
      addResource("drama", 10)
      addToTopDeck("lastBlast")
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  },

  //43
  "lastBlast": {
    prompt: "Director, I have enough materials left for one last explosion, the biggest I've ever done. Oh, why must it be your call?",
    rightChoiceText: "I'm sorry, but we have enough explosions.",
      rightChoice: function(){
      addResource("drama", 10)
      addResource("action", -20)
      addToTopDeck("finalScene")
      },
    leftChoiceText: "Go crazy while we work it into the plot.", 
    leftChoice: function(){
      addResource("drama", -20)
      addResource("action", 20)
      addToTopDeck("finalScene")
    },
    name: "Sean the Special Effects Artist",
    resultText: "",
    image: "./images/specialEffects.png",
    priority: 2,
    pack : "none"
  },

  //44
  "finalScene": {
    prompt: "So director, its a bit unclear on where the final scene is supposed to be set. Where do you think it should be?",
    rightChoiceText: "The ruins of the final battle.",
      rightChoice: function(){
      addResource("horror", 10)
      addResource("action", 20)
      addResource("comedy", -20)
      addToTopDeck("afterCredits")
      },
    leftChoiceText: "A bright, sunny beach town.", 
    leftChoice: function(){
      addResource("drama", 10)
      addResource("comedy", 20)
      addResource("horror", -20)
      addToTopDeck("afterCredits")
    },
    name: "Dela the Set Designer",
    resultText: "",
    image: "./images/setDesign.png",
    priority: 2,
    pack : "none"
  },

  //45
  "afterCredits": {
    prompt: "Director, there's only one last choice to make. Shall we have an after credits scene, or not?",
    rightChoiceText: "No, sequel bait is cliche these days.",
      rightChoice: function(){
      addResource("drama", -10)
      },
    leftChoiceText: "Sure, one last treat for those who stayed.", 
    leftChoice: function(){
      addResource("drama", 20)
    },
    name: "Larry the Screenwriter",
    resultText: "",
    image: "./images/screenwriter.png",
    priority: 2,
    pack : "none"
  }
}




