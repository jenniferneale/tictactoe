Setup: npm i  
Start: npm run start

Play the version of Tic Tac Toe no one ever asked for: multiplayer! Play with your friends or against very stupid AI in this free-for-all. Further updates to this game would include, at a minimum:  
+ The game must be able to start from either a human's first move, or the computer's, but let the human decide who will start each game.  
+ Keep and display a running tally of wins/losses/ties.  
+ The computer player should state in some form (log file, console.log, whatever) all possible moves whenever it's its turn.  
+ implementation of the minimax algorithm with pruning, to make the AI difficult to play against. It would also be fun to introduce points of weakness into the algorithm so that they occasionally make mistakes, and are not impossible to win against. It could also be fun to see how a supervised recursive neural network might learn which moves optimally follow which board states.  
+ The larger boards have also not been properly tested and explored. It is likely that changes would be necessary to make the game more fun as the board size increases, and to account for the extra stress on the minimax algorithm.  
+ The symbol assignment uses a rearrangement of the alphabet at present. It would be fun to add an emoji api to play with random or selected emojis instead.  
+ The code itself is in a single file heap at present. With more time, I'd like to restructure it into multiple files for organization and readability, and reduce the inevitable repetition that comes from hacking something together so quickly.  

This has been an exercise in putting together something simply very quickly, but if this game were to be taken seriously and scaled for production, there would be much more to take into account.  

1.	How do you know that the code you've written is as performant/optimized as it can be?
2.	What non-code factors would you want to assess/profile before going live?

Continuous integration at scale is a difficult problem that requires a lot of care. Writing great code that works locally is only the first step in a process meant to guard against bugs and anticipate issues that will arise when that code is pushed into production. Essential steps include:  
1. Start with a detailed issue description which notes requirements, acceptance criteria, and other systems that may be affected. I've used Jira for keeping track of issues, but human communication is really key here, so you know relevant stakeholders have had their input. 
2. When writing and reviewing your code, keep take and space complexity in mind. Make your linter happy, and if necessary, run through a list to make sure you haven't missed any obvious opportunities to remove dead code, create constants, avoid unnecessary loops or work that can be pulled out of loops, etc. (2) Write unit tests not just to ensure that code is working now, but to ensure that any breaking changes are easy to catch later. I like Mocha and Chai, or Jasmine, when working with Javascript. 
3. Getting a code review from at least one other developer. At OUP and Notre Dame, I could usually ask one other person for help. At Yieldmo we used a rule that a pull request needed two thumbs-up on GitLab from other developers. This involves some amount of planning ahead, since other engineers are inevitably busy and often prefer to be addressed asynchronously. 
4. Run QA in a given list of supported environments, browsers, and operating systems. Specs and baseline are critical here. 
5. Keep releases small so they're easy to revert or fix if necessary. It's also useful to rotate the responsibility of deployment among the engineers who worked on changes, both because those engineers are already invested, and because rotation allows everyone to get experience with the release process.
Another great tool is A/B testing. If you're unsure how well a piece of code will perform in the wild, you can set the code to run only a percentage of the time. This becomes more useful if your codebase sends back usage data, so you have an outcome and a baseline to compare against. I saw this used to great effect at Yieldmo, where we not only A/B tested variations on our ad formats, but also used machine learning to help determine which variations produced the most lift for different user segments. Releases were pushed out gradually over the course of a week. Then we kept an eye on errors per second and error types, number of users that actually viewed an ad on a page, latency, and more.  
There are also various tools for load testing the number of users and activity your site or app can handle, such as JMeter, which can be integrated with Jenkins, or the excellently named Bees with Machine Guns. There's also no replacement for planning ahead for expected usage spikes.  
A simpler tool is research: if you have an idea of what kinds of problems your type of system is likely to face, you can look up what similar issues came up with other companies, and how they solved them. Staying active in the tech community is essential for staying on top of new technologies and expected industry changes.
