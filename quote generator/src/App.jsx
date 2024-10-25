import { useState } from 'react';
import './App.css';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  const quotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90% of the code accounts for the first 90% of the development time. The other 90% accounts for the remaining time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Programming is like poetry—it's beautiful when it works.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    "Code never lies, comments sometimes do.",
    "Programming without a heavy use of console.log is like a doctor refusing X-rays.",
    "The best way to predict the future is to invent it.",
    "Don't write better error messages, write code that doesn't need them.",
    "The only way to go fast is to go well.",
    "Walking on water and developing software from a specification are easy if both are frozen.",
    "Copy-and-paste is a design error.",
    "The sooner you start to code, the longer the program will take.",
    "A program that compiles is only half the battle.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Talk is cheap. Show me the code.",
    "Machines take me by surprise with great frequency. — Alan Turing",
    "It's not a bug. It's an undocumented feature.",
    "A good programmer looks both ways before crossing a one-way street.",
    "Deleted code is debugged code.",
    "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics.",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "When in doubt, leave it out.",
    "In programming, experience is directly proportional to the number of lines of code you've deleted.",
    "Simplicity is the soul of efficiency.",
    "A user interface is like a joke. If you have to explain it, it's not good.",
    "A code is like humor. When you have to explain it, it's bad.",
    "Good software, like wine, takes time.",
    "The best error message is no error message.",
    "Programming is the art of figuring out what you want so precisely that even a machine can do it.",
    "The difference between theory and practice is that in theory, there is no difference.",
    "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
    "Nothing is more permanent than a temporary fix.",
    "The road to success is paved with failed attempts at 'if' statements.",
    "Behind every working program is a person who learned from 100 crashes.",
    "First, solve the problem. Then, write the code.",
    "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
    "Computers are fast; developers keep them slow.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "There is always one more bug to fix.",
    "Documentation is like a love letter you write to your future self.",
    "A well-designed system is one where the programming language seems unnecessary.",
    "Learning to code is learning how to think.",
    "Every great developer you know got there by solving problems they were unqualified to solve until they did.",
    "The best programmers are not afraid to fail—they learn quickly from their mistakes."
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(quotes.length).fill(0));

  const voteFor = () => {
    const newVotes = [...votes]; 
    newVotes[selected] += 1; 
    setVotes(newVotes); 
  }

  const generate = () => {
    let index = Math.floor(Math.random() * quotes.length);
    setSelected(index);
  }

  const getMostVoted = () => {
    const maxVotes = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(maxVotes);
    return { quote: quotes[mostVotedIndex], votes: maxVotes };
  };

  
  const mostVoted = getMostVoted();

  return (
    <div>
      <div className='container'>
      <p className='Quote'>{quotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <Button handleClick={generate} text={'Next Quote'} />
      <Button handleClick={voteFor} text={'Vote'} />
      </div>
      <div className='container'>
      <h2>Most Voted Anecdote:</h2>
      <p className="Quote">{mostVoted.quote}</p>
      <p>Votes: {mostVoted.votes}</p>
      </div>
    </div>
  );
}

export default App;
