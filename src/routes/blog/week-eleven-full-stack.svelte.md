---
title: Week Eleven - Full Stack
created: 2022-01-22T00:00:00
summary: Full Stack for Front-end Engineers, V2
coverImageUrl: /media/projects/type-kana/session.jpg
---

<script context="module">
  import { load } from "./_load"
  export { load }
</script>


Jem Young
https://frontendmasters.com/courses/fullstack-v2/


## Server Setup
Make sure you key is avtive

Make sure key is active
`$vi ~/.ssh/config`

```
Host *
AddKeysTAgent yes
UseKeychain yes
```

Add private key
`ssh-add -K ~/.ssh/fsfe`


You don't want to

`sudo su` because that will give you superpowers and not warn you. Which means you can destroy roots.

`whoami`

root


CNAME = Canonical name

## Server setup

To set up a user that has root-like powers, but isn't root.


1. `apt update` // Update software

2. `apt upgrade`

3. `addUser $USERNAME` // Create user

4. `usermod -aG sudo $USERNAME` // add to sudo group

5. `su $USERNAME` // switch user

6. `sudo cat /var/log/auth.log` // check if successful

It's people who are trying to log into the server.

7. `vi ~/.ssh/authorized_key`
// create authorized_key file and paste the PUBLIC key

8. `chmod 644 ~/.ssh/authorized_keys` // change file permissions. 

9. `sudo vi /etc/ssh/sshd_config` disable root login

`head` gives you the top 10 lines of the file
`tail` gives you the last 10 lines of the file


Security above Security
It's like making your door smaller. It doesn't actually protect you. 



## Application Architecture

```
ui
    css
    js
    html
```    

> [00:00:23] Let's talk about, briefly, application architecture. If you ask me what the difference is between a senior engineer and a junior engineer, I'd say it's about architecture. It's not about code, it's about the architecture. Cuz in the long run, it's the architecture and application that will get you. It's how you arrange your files, how you arrange your code.

> [00:00:42] That sort of thing is we're thinking about long-term maintainability versus just, I'm a hacker who solves bugs every day. That's more like a junior engineer, senior engineers think long-term. So when we set up an application architecture, remember, it will live for a long time, maybe years. So you want to make sure it's set up in a way that makes sense to you and everybody can agree on.


### When to install globally?
`npm -g stuff`

Speaker 2: What are the exceptions? When is it safe to use a global install?

> Jem Young: When you need to run it globally from any directory. Because this isn't, let's say I had four or five other node applications running, I want pm2 to access all of that. So installing and locally wouldn't make as much sense because we didn't then we have to pipe everything into node modules, things like that.

> But that's an excellent point. You generally don't want to do things globally unless you have to. If you wanna run things globally but from the local directory you can use something called MPX. Which will look at first in your local and then move up. But in this case, we wanna run globally because its a process manager.

### Mercurial
Everybody just knows Git? Fun fact, what does GitHub or not GitHub, I think Facebook uses SVN, Subversion, or is it Mercurial? Facebook uses a monorepo, they have one repository for all of their code at Facebook. Because Git literally can't handle as much code as they have. There's like a maximum limit on it.

[00:00:55]
And I think Google has their own custom repo version control as well. 

## Server Security

Install Fail2Ban and ExpressJS scritpts



## Bash Commands

standard output, input, error
stdout
stdin
stinerr 

Unix agreement

`/var/log` is typically where every software writes their log file.



![](https://i.imgur.com/ZqVRHPc.png)


## nginx config basics

> And we can set our compression levels to 1 through 9 I believe it is, I wouldn't mess too much with the compression levels. It's tempting to go all the way up to 9 or 11, if it were, [LAUGH] if anybody understands that joke.

> [00:07:43] But honestly, at this point you're trading off CPU power because it takes time to compress these things and run through the compression algorithms versus the amount of bytes you're saving. And 6 4 is a pretty good level where you're trading off speed for performance. Going any higher it's really tempting but you're honestly not saving that much.

> [00:08:02] There's more optimizations you can do down the line.

## Why is security so important

> people wanna get in anyways just because they use it to build lots of nefarious things or just try to steal passwords, credit card information, things like that.

> >> Speaker 2: If you do the horrible thing of reusing your password, they have your password for other things.

We use SSH keys because you while you can reuse those, you can't steal unless you physically take someone's computer or their device.

> >> Speaker 3: Redirect your site to them. Nefarious sites.
>> Jem Young: Yeah, they can absolutely. They can say, I want to bankofusa.com. But it's actually not actually bankofusa.com to site that looks exactly like it because they can just copy your HTML and CSS and JS.

> Even better if you weren't using HTTPS, they can actually forward everything to the actual real site. So that the the people running the site don't know that it's broken and they're just stealing all the traffic in between.

[00:02:28]
That is actually it's called a man in the middle attack.

>> Speaker 2: They can kind of run their own server on your server and until you get banned.
And then all of a sudden, your legit stuff is not working cuz your IPs are banned from services like a mailbot or something like that. Like when people's bridges were spamming the world.
>> Jem Young: Yeah, they can lock you out of your own server. So that like all that data and all that time and code you put in, they can steal it and lock you out of it and you can't get it back.

>> Jem Young: They can scrape your database, they can take all that credit card information or unencrypted passwords which today, people still leave unencrypted password in database.


I’ll use an MD5 hash.

[00:03:45]
But I'll just do it five times and I'll hash a password using MD5 which is a very breakable hashing mechanism. And I'll save that and it looks secure. But because the database wasn't locked down and the permission weren't locked down. They got into the database and you are like, it's okay because everything is still safe cuz it's encrypted and then they decrypted that.


>> Speaker 2: Overloaded with requests.
>> Jem Young: Yeah, so that's the end result, what they do is they could turn into what's known as a botnet. And that's just a program that they install a backdoor. They won't do anything. And in fact, if you're really good in Unix, you can delete all the logs.

[00:05:06]
So someone could break in, do a bunch of stuff, delete the logs that show that they ever were there which is pretty common. There's a script that will do it for you. And then they just turn into like a silent botnet and they might not do anything for months or even years.

completely. The more nefarious ones, we're starting to see a lot more, is what is called cryptojacking or ransoming. So what they'll do is, Mark like you're saying earlier, they'll steal your database credentials, they'll encrypt all of them.

[00:05:56]
They'll encrypt your entire database which is, invaluable information and then they'll sell it back to you for money. Because they encrypted 

## Security Checklist

>> Speaker 3: One of the most famous zero day things was Stuxnet, where our government or whoever attacked the Iran radioactive program or whatever, nuclear program. And then they used four zero day things as a worm to spread this worm into the facility, it's just crazy.
>> Jem Young: Stuxnet is fascinating.
[00:03:37]
If you look at your auth log you see that there's people trying to break in your server right now. Stuxnet is a really interesting example. And it goes back to, what can someone do if they gain access to your server? So what Stuxnet did was they chained a bunch of zero day, so that is unpatched, unknown bugs.

[00:03:54]
And they usually start with some sort of a stack overflow or something like that, something innocuous. But if you can make a computer stack overflow, you can make it throw an error, and that error, you can control. And then once you start chaining those together, you can actually start doing something.

[00:04:07]
So even the most minor vulnerability can turn into something major if someone knows what they're doing. And what Stuxnet did was they planted software into, I wanna say it was the USB drives, that's how it started. Because this was a nuclear facility that refined uranium, or plutonium, probably uranium.

[00:04:24]
And they're like, okay, we know we're dealing with things that are really dangerous. We're not gonna connect to the Internet at all. So what Stuxnet did was they hooked up to someone's USB drive. So I don't know, a secretary or someone, so whenever they hacked their computer. So whenever they plugged in the USB drive, they dumped the software into that.

[00:04:45]
So when that person went to work and they plugged in that USB to, I don't know, watch movies or something, whatever people at nuclear facilities do, that now got on to their server. So even though that computer wasn't connected at all to the Internet, they now managed to infiltrate the entire network, which honestly is next level hacking.

[00:05:03]
If you can hack someone's server without actually being connected to it, that's like only something governments can achieve, or really, really, really big funded companies. But what they did was really subtle. They just turned off the controls for the things that refined uranium. So they just made them spin out of control.


Certbot -> it's a wrapper for Let's Encrypt, built by the EFF Free software foundation. 
