const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/justin-by',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Justin Sung',
  role: 'Full Stack Developer',
  description:
    "I'm a passionate Software Engineer who absolutely loves the innovation and conceptualization required in order to become a great developer. I have experience in building multiple full-stack web applications with JavaScript, Python, React, Flask, and Express.",
  resume: `https://docs.google.com/document/d/1aLthgbTIePLpl0uUf5jZb7TjKRZ3tbtHKYUcnTsMDW8/edit?usp=sharing`,
  social: {
    linkedin: 'https://www.linkedin.com/in/j-sung/',
    github: 'https://github.com/justin-by',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Anilog',
    description:
      'A web app for discovering and categorizing anime onto a user’s personalized anime list.',
    stack: ['Javascript', 'Python', 'Flask', 'React'],
    sourceCode: 'https://github.com/justin-by/Anilog',
    livePreview: 'https://anilog-proj.herokuapp.com/',
  },
  {
    name: 'PBrain',
    description:
      'A programming language-oriented study application that allows users to create and study flashcards within decks; a clone of Brainscape.',
    stack: ['Javascript', 'Python', 'Flask', 'React'],
    sourceCode: 'https://github.com/rzh150030/group_project_2_Brainscape_clone',
    livePreview: 'https://pbrain-app.herokuapp.com/',
  },
  {
    name: 'Req.Body',
    description:
      'A personal application for logging workouts to display complete accomplishments and remind of incomplete workouts.',
    stack: ['Javascript', 'AJAX', 'Express'],
    sourceCode: 'https://github.com/MattMores/req.body',
    livePreview: 'https://req-body.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'React',
  'Redux',
  'Express',
  'Flask',
  'Node.js',
  'Git',
  'Docker',
  'SQL / Sequelize',
  'postgreSQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jsung.by@gmail.com',
}

export { header, about, projects, skills, contact }
