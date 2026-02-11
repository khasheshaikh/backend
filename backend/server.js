import express from 'express'
const app = express()
const port = process.env.PORT ||3000;
 const jokes = [
  {
    id: 1,
    title: "Dark Mode",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs 🐛"
  },
  {
    id: 2,
    title: "Broke Developer",
    joke: "Why did the developer go broke? Because he used up all his cache 💸"
  },
  {
    id: 3,
    title: "Java Glasses",
    joke: "Why do Java developers wear glasses? Because they don’t see sharp 🤓"
  },
  {
    id: 4,
    title: "Computer Sleep",
    joke: "I told my computer I needed a break… it said 'No problem, I’ll go to sleep' 😴"
  },
  {
    id: 5,
    title: "Debugging",
    joke: "Debugging: Removing the needles from the haystack 🪡"
  },
  {
    id: 6,
    title: "Binary Joke",
    joke: "There are only 10 types of people in the world: those who understand binary and those who don’t 💻"
  },
  {
    id: 7,
    title: "Timeout",
    joke: "Why did the function return early? Because it had a timeout ⏰"
  },
  {
    id: 8,
    title: "Mystery Code",
    joke: "My code doesn’t work, I have no idea why. My code works, I have no idea why 🤯"
  },
];



app.get('/api', (req, res) => res.send('Hello World!'))
app.get('/api/jokes', (req, res) => res.send((jokes)));
   

app.listen(port, () => console.log(`Example app listening on port ${port}!`))