//! git / github

//* github, gitlab , bitbucket

//* git
//? distributed vcs.
// branching

//!  git commands
//? config
//* git config --global --list
//* git config --global user.name "<user_name>"
//* git config --global user.email "<user_email>"
//* git config --global init.defaultbranch "main"

//! repository / repo
//? local repo
//? remote repo

//!git working flow

//?  working directory          -> staging area       -> local repo                 -> remote repo
//?     changes                     ready state       new version / commit

//! initialize empty local repo
//* git init

//* git status
//* git add <file_path>
//* git add .
//* git commit -m "<commit_message>"
//* git push origin  <branch_name>

//? remote repo
//* git remote -v  -> list remote repo
//* git remote add origin <remote_repo_url>
//* git remote remove origin

//! branch
//* git branch
//* git branch <branch_name>
//* git switch <branch_name>
//* git switch -c <branch_name>
//* git merge <branch_name>

//* git stash
//* git stash list
//* git stash pop

//* git log
//* git log --oneline

//! rebase
// git rebase <>
// main: A -> B -> C -> D -> G -> H
// feature:             D -> E -> F    // merge
// feature:             G' -> H' -> E -> F   // rebase

//! cherry-pick  <commit_hash>
// main: A -> B -> C -> D
// fix:                 D -> E -> F -> G

//* PR -> pull request

//? main -> production
//? develop  -> integration branch
//? hotfix  -> emergency bug fix   // hotfix/login
//? feature ->    feature/login  ->
