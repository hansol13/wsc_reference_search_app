const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://students.wts.edu/resources/creeds/shorterchatechism.html';

rp(url)
  .then((html) => {

    /* finding the answers to each questions */
    const questions =[
      "What is the chief end of man?",
      "What rule hath God given to direct us how we may glorify and enjoy him?",
      "What do the scriptures principally teach?",
      "What is God?",
      "Are there more Gods than one?",
      "How many persons are there in the Godhead?",
      "What are the decrees of God?",
      "How doth God execute his decrees?",
      "What is the work of creation?",
      "How did God create man?",
      "What are God's works of providence?",
      "What special act of providence did God exercise toward man in the estate wherein he was created?",
      "Did our first parents continue in the estate wherein they were created?",
      "What is sin?",
      "What was the sin whereby our first parents fell from the estate wherein they were created?",
      "Did all mankind fall in Adam's first transgression?",
      "Into what estate did the fall bring mankind?",
      "Wherein consists the sinfulness of that estate whereinto man fell?",
      "What is the misery of that estate whereinto man fell?",
      "Did God leave all mankind to perish in the estate of sin and misery?",
      "Who is the Redeemer of God's elect?",
      "How did Christ, being the Son of God, become man?",
      "What offices doth Christ execute as our Redeemer?",
      "How doth Christ execute the office of a prophet?",
      "How doth Christ execute the office of a priest?",
      "How doth Christ execute the office of a king?",
      "Wherein did Christ's humiliation consist?",
      "Wherein consisteth Christ's exaltation?",
      "How are we made partakers of the redemption purchased by Christ?",
      "How doth the Spirit apply to us the redemption purchased by Christ?",
      "What is effectual calling?",
      "What benefits do they that are effectually called partake of in this life?",
      "What is justification?",
      "What is adoption?",
      "What is sanctification?",
      "What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?",
      "What benefits do believers receive from Christ at death?",
      "What benefits do believers receive from Christ at the resurrection?",
      "What is the duty which God requireth of man?",
      "What did God at first reveal to man for the rule of his obedience?",
      "Where is the moral law summarily comprehended",
      "What is the sum of the ten commandments?",
      "What is the preface to the ten commandments?",
      "What doth the preface to the ten commandments teach us?",
      "Which is the first commandment?",
      "What is required in the first commandment?",
      "What is forbidden in the first commandment?",
      "What are specially taught by these words [before me] in the first commandment?",
      "Which is the second commandment?",
      "What is required in the second commandment?",
      "What is forbidden in the second commandment?",
      "What are the reasons annexed to the second commandment?",
      "Which is the third commandment?",
      "What is required in the third commandment?",
      "What is forbidden in the third commandment?",
      "What is the reason annexed to the third commandment?",
      "Which is the fourth commandment?",
      "What is required in the fourth commandment?",
      "Which day of the seven hath God appointed to be the weekly sabbath?",
      "How is the sabbath to be sanctified?",
      "What is forbidden in the fourth commandment?",
      "What are the reasons annexed to the fourth commandment?",
      "Which is the fifth commandment?",
      "What is required in the fifth commandment?",
      "What is forbidden in the fifth commandment?",
      "What is the reason annexed to the fifth commandment?",
      "Which is the sixth commandment?",
      "What is required in the sixth commandment?",
      "What is forbidden in the sixth commandment?",
      "Which is the seventh commandment?",
      "What is required in the seventh commandment?",
      "What is forbidden in the seventh commandment?",
      "Which is the eighth commandment?",
      "What is required in the eighth commandment?",
      "What is forbidden in the eighth commandment?",
      "Which is the ninth commandment?",
      "What is required in the ninth commandment?",
      "What is forbidden in the ninth commandment?",
      "Which is the tenth commandment?",
      "What is required in the tenth commandment?",
      "What is forbidden in the tenth commandment?",
      "Is any man able perfectly to keep the commandments of God?",
      "Are all transgressions of the law equally heinous?",
      "What doth every sin deserve?",
      "What doth God require of us, that we may escape his wrath and curse due to us for sin?",
      "What is faith in Jesus Christ?",
      "What is repentance unto life?",
      "What are the outward means whereby Christ communicateth to us the benefits of redemption?",
      "How is the word made effectual to salvation?",
      "How is the word to be read and heard, that it may become effectual to salvation?",
      "How do the sacraments become effectual means of salvation?",
      "What is a sacrament?",
      "Which are the sacraments of the New Testament",
      "What is baptism?",
      "To whom is baptism to be administered?",
      "What is the Lord's supper?",
      "What is required to the worthy receiving of the Lord's supper?",
      "What is prayer?",
      "What rule hath God given for our direction in prayer?",
      "What doth the preface of the Lord's prayer teach us?",
      "What do we pray for in the first petition?",
      "What do we pray for in the second petition?",
      "What do we pray for in the third petition?",
      "What do we pray for in the fourth petition?",
      "What do we pray for in the fifth petition?",
      "What do we pray for in the sixth petition?",
      "What doth the conclusion of the Lord's prayer teach us?",
    ];
    const answers = [];
    for(let i=1; i<214; i=i+2) {
      answers.push($('p[class=text]> strong',html)[i].next.data);
    }

    // weird formatting for api
    console.log('[');
    for(let i=0; i<107; i++) {
      console.log('{id: '+ i + ',');
      console.log('question: \"' + questions[i] + '\",');
      console.log('answer: \"' + answers[i] +'\"},');
    }
    console.log('];');
    
  })
  .catch((err) => {
    //handle error
    console.log(err);
  });