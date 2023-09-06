const quotes = [
  "Desire, hope, expectations, ambitions are the driving forces of human society.",
  "Your desires define your life.",
  "In the very womb of desires lies the light of knowledge. When desires go unfulfilled and they shatter, rays of knowledge enter the human heart.",
  "Happiness and security, aren't these attained by deeds of a human being?",
  "Ideals and learning develop a man's character. This means, the way the parents develop their child's character, their future turns out to be similar.",
  "Most parents in the process of securing their children's future, forget to enhance their character.",
  "In reality, as a man climbs up the mountain, he comes across new obstacles and difficulties. At every step, he decides what is to be done next. He needs to change his plans at every step of the way. He will never be able to change the mountain according to his will. He can only adapt to the mountain.",
  "Isn't it something similar as above in life? When a person considers one challenge, one difficulty as the epicentre of his life and puts an end to everything else in life then he can never succeed in his life and neither can he achieve happiness and peace.",
  "In other words, instead of trying to change life, adapting yourself to changing life situations is the only path to success and happiness.",
  "The other name for future is struggle.",
  "Life lies neither in the future nor in the past. Life is the present moment. In other words living in the present is the true essence of living.",
  "If we accept the cardinal rule that we can neither foresee the future nor shape it, all we can do is embrace the future with patience and courage and welcome it with open arms. Won't each moment of life be filled with vitality(liveliness, brightness).",
  "Parents give their children life as well as death.They give them the light of love as well as the darkness of hate and the darkness may reside in mind, heart or may be a real one, but the only result of it is fear. Only fear.",
  "Is it that the situation or object that causes fear is also the origin of grief? No. There is no rule such as that.",
  "Everyone's experience in fact tells that being scared does not solve problems in the future.",
  "Fear is only the imagination of the grief to come.It has no relationship to the reality whatsoever.",
  "Despite knowing that fear is nothing but imagination, is it difficult to be free from it and live fearlessly?",
  "In this world, each person has some weakness or the other.",
  "And that single weakness of ours is considered the epicenter of our lives. This gives birth to sadness and discontentment in the heart.",
  "A person who does not let his weakness defeat him and houses righteousness in his heart is able to move past his weakness.",
  "God may give one weakness, but bounds, dignity or limit, is determined by the heart of a person.",
  "The foundation of all human relationships is expectation.",
  "An individual usually loves the person who meets his expectations. But expectations are destined to be broken. Becasue expectations originate from the mind. No one else ever learns of those expectations.",
  "In spite of all intentions to fulfill them one can never fulfill another person's all expectations. And that is the root of conflict.",
  "If humans stop building their relationships based on expectations and accept relationships solely for what they are won't this life be full of peace and happiness?",
  "Every moment on life is a moment of decision. The decision leaves a lasting impression. Decisions taken in the present bring about happiness or sadness in the future, not just for oneself but one's family and the future generations too.",
  "We take most decisions not to find a solution to the problem, but to clam one's heart.",
  "But can one eat while running? No. Then can a heart in a state of battle take the correct decision.",
  "In  reality when one takes a decision with a calm mind he ensures a happy future for himslef. But, when one takes a decision to calm his heart it will invariably cause him pain and misery in the future.",
  "Our life and security is based on relationships. That is why, the basis of all happiness in our life is also a relationship. Then why do we meet with grief and struggle when it comes to relationships?",
  "When a person does not accept the work or belief of another and tried to bring about a change in it a struggle is born. In other words, the more one refuses greater is the struggle. And the more one accepts, greater is the happiness.",
  "If man willingly restrains his expectations, analyzes his thoughts and instead of trying to change another person tries to bring about change in oneself then is achieving satisfaction in relationships that difficult a task? In other words is acceptance not the true meaning of relationships?",
  "The one who was unjust ought to repent and the one who experienced injustice ought to renew faith in his heart about society. Does this not sum up the meaning of justice?",
  "But an unrighteous person renounces justice and embraces enmity and revenge. He choses to defeat violence with violence. The one who experienced agony tries to inflict agony to others. And while walking donwn this path, the oppressed becomes the oppressor. Very soon he turns into a criminal.",
  "There is very little difference between justice and revenge and this difference is called righteousness(Dharma). Isn't it?",
  "If we ponder over every relationship, we'd notice that the source of all of them are the very boundaries that we draw for others. And even if unknowingly, a stranger oversteps the bounds, the very instant our heart palpitates with anger.",
  "But if everyone respects the indepedence of another, boundaries and rules become extinct. In other words just like agreement is the body of a relationship isn't indepedence the soul of a relationship?",
  "A pious heart dispenses righteous advice and a depraved heart dispenses unrighteous advice. Accepting righteous advice propels man towards happiness. But accepting such advice is possible only when one is pious.",
  "Before accepting someone's suggestion or advice, fostering righteousness in one's heart is very important.",
  "Just as it would be best to develop a child's character rather than develop his future, similarly, instead of deciding the path in a child's life wouldn't empowering them to face new conflicts with confidence and knowledge be more beneficial?",
  "Talking about an event or incident or else talking about any mistake which one commits, is that a true feeling? No. This is just a fact. That means, just disclosing exactly what happenend is usual.",
  "When someone reveals a fact even though the fear exists that's called the truth. In reality, truth is nothing but another name of courage. To be courageous one needn't wait for the right time because courageouness is the nature of the soul.",
  "Isn't every moment right enough to disclose the truth?"
]

const app = document.getElementById('app')

function renderQuotes() {
  for (let i = 0; i < quotes.length; i++) {
    const quote = quotes[i];
    const elm = document.createElement('div');
    elm.innerText = `${i + 1}. ${quote}`;
    app.appendChild(elm);
  }
}

renderQuotes()
