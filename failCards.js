failCards = [{
  resource:"comedy", 
  level: "high", 
  card: {
    prompt: "The movie is finished and has premiered! What did the audience think of it?",
    rightChoiceText: "Thanks for playing!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Thanks for playing!", 
    leftChoice: function(){location.reload();
    },
    name: "",
    resultText: "Fans laughed out really loud at the slap stick and goofy elements of the show, to the point they almost missed some more mature elements. Those that did notice may try to bring controversy, but the film is destined to be remembered as comedy platinum.",
    image: "./images/whiteCard.png"
  }  
},

{
  resource:"action", 
  level: "high", 
  card: {
    prompt: "The movie is finished and has premiered! What did the audience think of it?",
    rightChoiceText: "Thanks for playing!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Thanks for playing!", 
    leftChoice: function(){location.reload();
    },
    name: "",
    resultText: "Though some humorous or frightning elements seemed to come out of nowhere, what people remember most about this movie is the action scenes. The epic fights, the flashy explosions, the death cheating stunts, it makes the movie an example that action movies to come will struggle and fail to copy.",
    image: "./images/whiteCard.png"
  }  
},

{
  resource:"horror", 
  level: "high", 
  card: {
    prompt: "The movie is finished and has premiered! What did the audience think of it?",
    rightChoiceText: "Thanks for playing!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Thanks for playing!", 
    leftChoice: function(){location.reload();
    },
    name: "",
    resultText: "While some critisize the movie's comedic moments, fans argue that they add a false sense of security element, or prevent the audience from fainting from terror. The movie inspires nightmares and urban legends in even the bravest viewers, marking it as one of the scariest movies ever made.",
    image: "./images/whiteCard.png"
  }  
},

{
  resource:"drama", 
  level: "high", 
  card: {
    prompt: "The movie is finished and has premiered! What did the audience think of it?",
    rightChoiceText: "Thanks for playing!",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Thanks for playing!", 
    leftChoice: function(){location.reload();
    },
    name: "",
    resultText: "The movie tells a tale of love, betrayal, rage, and hope. Even some violence and scary and funny bits don't stop the story from sucking viewers in and claiming their full attention. The movie is hailed as a story you have to see in order to love, with the payoff being a million times worth it.",
    image: "./images/whiteCard.png"
  }  
}]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}