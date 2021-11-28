// List of all questions, choices, and answers
var questions = [
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    choices: ['<script>', '<javascript>', '<js>', '<scripting>'],
    answer: '<script>',
  },

  {
    title:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>",
    ],
    answer: "<script src='xxx.js'>",
  },

  {
    title: "How do you write 'Hello World' in an alert box?",
    choices: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
    ],
    answer: "alert('Hello World');",
  },

  {
    title: 'What are the six primitive data types in JavaScript?',
    choices: [
      'string, number, boolean, bigInt, symbol, undefined',
      'sentence, int, truthy, bigInt, symbol, undefined',
      'sentence, float, data, bigInt, symbol, undefined',
      'string, num, falsy, bigInt, symbol, undefined',
    ],
    answer: 'string, number, boolean, bigInt, symbol, undefined',
  },

  {
    title: 'How do we declare a conditional statement in JavaScript?',
    choices: ['if...else', 'for loop', 'while loop', 'difference...between'],
    answer: 'if...else',
  },

  {
    title: 'What are the two types of scope JavaScript uses?',
    choices: [
      'Global and Local',
      'Surrounding and Inner',
      'Outside and Inside',
      'Abroad and Local',
    ],
    answer: 'Global and Local',
  },

  {
    title:
      'What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds?',
    choices: [
      'setInterval(myTimer, 3)',
      'setInterval(myTimer, 30)',
      'setInterval(myTimer, 300)',
      'setInterval(myTimer, 3000)',
    ],
    answer: 'setInterval(myTimer, 3000)',
  },

  {
    title:
      'While creating a form for a client, you decide that you do not want the corresponding browser actions to happen, and you want to implement another behavior instead. What would you use to make this possible?',
    choices: [
      'event.stopPropagation()',
      '	event.stopAction()',
      '	event.preventDefault()',
      'event.dispatchEvent()',
    ],
    answer: 'event.stopPropagation()',
  },

  {
    title: 'Which property can you use in order to implement event delegation?',
    choices: [
      'event.preventDefault()',
      'event.addEventListener()',
      'event.target',
      'event.stopPropagation()',
    ],
    answer: 'event.addEventListener()',
  },

  {
    title:
      'You just finished the feature that you have been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?',
    choices: [
      'git branch -d feature-52',
      'git checkout feature-52',
      'git merge feature-52',
      'git branch feature-52',
    ],
    answer: 'git branch -d feature-52',
  },
];
