# vitaeTest

In order to run this file, copy the .js file into a directory you can find in your terminal.

Then type exactly the following into your console: 

node 40k.js 

This assumes you have node installed on your machine. 

The results can be configured via the configuration constants at the top of the file. 

// config variables
const CP = 18;
const begin_minus = 5;
const opponent_strats = 8;
const execs = 40000;
const VERITAE = true;
const STRATS = { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3 };

This starts with 18CP (triple battalion).
This spends 5CP on relics at the beginning of the game (no refunds).
This assumes your opponent uses strategems 8 times over the course of the game.
This runs 40000 executions. 
This assumes you did get the VERITAE [try spending less CP at the start and flagging VERITAE to false].
This assumes that you spend 3 1CP strategems for every 2 2CP and 1 3CP strategems.

My results show that:

on 18 base CP with the above configs:
34.163975 spent CP on average over 40000 executions
d6 avg:
3.491 average dice roll on my d6() function

not taking the VITAE and spending only 3CP at the start of the game gives:
average:
26.510925
d6 avg:
3.5134

So YES YES YES spend those 2 CP to get the VITAE.  DO IT
