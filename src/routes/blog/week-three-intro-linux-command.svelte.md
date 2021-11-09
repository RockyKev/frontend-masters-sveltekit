---
title: Week Three - Intro to Linux and Command Line
created: 2021-11-07T00:00:00
summary: Complete Intro to Linux and the Command-Line
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>

https://btholt.github.io/complete-intro-to-linux-and-the-cli/

## The CLI


**WHICH**
`which` shows you where the program lives.

`which ls` 

**LS**

```bash
ls -l -a
```

`-l` show me stats like file
`-a` show me hidden files
`--help` see all the flags for ls
`ls lsah` - show everything and permissions

**BASH HISTORY**
Your bash history is saved with up/down arrow keys. Which means you shouldn't save your passwords on it. 

ADD TO TIL: 
Ctrl+R - reverse-search history
(left and right drops you back into your terminal)

`tail ~/.bash_history`

It adds it to the bash history when you log out. 
It 'buffers' it in memory. 

**COPY AND PASTE**

A malicious person can hide things in your clipboard and force a return.
So if you copy/paste, it can hide some extra commands, and automatically run it once you paste it in your terminal.

**SIGNALS**
A notification that you send to the event.
It's like a text message that says, "Come over"

`Ctrl+C` - SIGINT // Stop running

`Ctrl + D` - SIGQUIT  // Quit the program
It can only be done in the operating system.

SIGTERM  // Terminate

SIGKILL // this is done in the Task Manager

Find all the sig commands with `kill -l`
![](https://i.imgur.com/lKYFfSl.png)


## Files, Pipes, & Permissions

**Principle of Least Power**
`whoami` to find your current user.

`cat /etc/passd` to find all the users. 
A bunch of users that are not used directly through the interactive GUI.

Why?

Those users have a very specific permission. 
Similar to AWS. 

**su**

`su brian` switch to user brian

![](https://imgs.xkcd.com/comics/incident.png)
https://xkcd.com/838/

**Groups**
Set groups that can do certain actions. 

**read, write, execute everything**

This is the same:
```bash
sudo chmod 777 file.txt
sudo chmod u=rwx,g=rwx,o=rwx file.txt

# user 
# group
# other people
```

## Environments & Processes

```bash
$ echo hello my name is $USER
```

hello my name is ubuntu


```bash
$ USER=brian
$ echo hello my name is $USER
```
hello my name is brian

(Note: it only saves it within the session)


```bash
$ GREETING="hello"
$ echo $GREETING $USER, how are you?
```
hello ubuntu, how are you?

**Where all the variables are located**
`sudo vi/etc/environment`

This is shared by EVERY SINGLE USER.

```bash
TEST_THING="blahblah"
```

so if you open the shell again, $TEST_THING will equal "blahblah"

**Bash sessions and where to save things**
use `/.bashrc` for all changes.

`/.bash_profile` only runs on start. 


**Exit codes**
`date`
This gives us the current date/time.

`uptime`
Gives you how long you've been on, and logged in users.


`echo $?`
`0`

This gives us the 'exit code'. 0 means success.
If you get a different number, you'll get some other numbers. 

* 0: means it was successful. Anything other than 0 means it failed
* 1: a good general catch-all "there was an error"
* 2: a bash internal error, meaning you or the program tried to use bash in an incorrect way
* 126: Either you don't have permission or the file isn't executable
* 127: Command not found
* 128: The exit command itself had a problem, usually that you provided a non-integer exit code to it
* 130: You ended the program with CTRL+C
* 137: You ended the program with SIGKILL
* 255: Out-of-bounds, you tried to exit with a code larger than 255

[reference](https://btholt.github.io/complete-intro-to-linux-and-the-cli/process-operators)

## Networking & The Internet

**ssh and sftp**
If you connect normally via `ssh`, you can connect via `sftp`.

```bash
sftp>
```

Then you can do `pwd` & `ls` for your current directory on the remote.
Or `lpwd` and `lls` for local directory on your host.


```bash
sftp> put localfile.txt
```

**permissions**

When you download a script from the internet (script.sh), 
you have to give it execute permissions via chmod.
NOTE: check the script that it's not a bad script.

**wget vs curl**

wget is like the COPY of the internet.

wget will also recursively download things. Like it will look in a html file, and also get javascript, css, etc.

**curl commands**

```
$ curl -O https://website.com/thing.txt 
```
-O flag gets the entire `thing.txt` file and puts it in your root folder.


POST REQUESTS:
```
$ curl -X POST https://website.com/thing.txt 
```

Copy as Curl
![](https://i.imgur.com/QcPrZoy.png)

**Dangerous internet**

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Watch out for that `| bash` command.
This is trusted URL. But if this was on JOE's BLOG, do not execute.

The workaround:

![](https://i.imgur.com/8M2lFqP.png)
1. curl curl -o- URL > my-file.sh

2. cat my-file.sh

The server can switch something underneath you with Bash.


## (Skip) Package Management

## Shell Scripts


**Making a script**
`nano gen_files.sh`


```bash
mkdir -p ~/temp # -p mean don't error if it exists in this case, it does other things too
cd ~/temp
touch file{1..10}.txt
echo done
```

To run it: (3 different ways)
`source gen_files.sh`
`. gen_files.sh`
`bash gen_files.sh`

**hashbang**

Open gen_files.sh and put this as the very first line. I bold that because it must be the first line.
```bash
#! /bin/bash
```
If you add that, you can then change it from `gen_files.sh`->`gen_files`. And then make `chmod +x gen_files` 
and when you run it `./gen_files`, it'll automatically execute.

**path & variables**

echo $PATH


## (SKIP) Automation & Customization

