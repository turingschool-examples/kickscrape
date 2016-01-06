Start by installing a couple packages we'll be using:

```
npm install nightmare prettyjson
```

Then follow the step branches in order:

Step 1. Loading the page via Nightmare
Step 2. Extracting a few piece of information from the page
Step 3. Extracting information that is in a repeated form
Step 4. Getting a list of URLs from a search

Note:

This is based on the layout for an active kickstarter project. After Mar 6, the project being used becomes inactive, and the layout will change, and this code will likely break. Also, kickstarter is likely to just change the layout of their pages, breaking this for even active projects.