Bear

![image](https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5f04e7c0465e497076f20454_Dimensions-Animals-Bears-Grizzly-Bear-Size-Comparison.svg)

## Setup

- Clone this repo
- `cd` to repo directory
- `npm install`
  - note: if install fails, run `npm uninstall sqlite3`, `npm install` then `npm install sqlite3`
- `npm run dev`
  - view the app on `http://localhost:3000`

## Modifying

- Make a new feature branch `git checkout -b [featureBranch name]`
- Make your changes
- Stage and commit your changes
- Checkout local `main` branch
- Pull from Github `main` branch `git pull`
- Checkout local `[featureBranch name]` and merge from local `main` branch `git merge main`
- Fix any merge conflicts and commit
- Push your local branch to Github `git push [featureBranch name]`
- Make a pull request from your `[featureBranch name]` branch to the `main` branch
