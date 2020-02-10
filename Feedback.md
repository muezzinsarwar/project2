# Project 2 Feedback

## Code Quality -

Criteria: Is the code well-formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is well-formatted, with semantic and sensible variable names.
-   Code is easy to read and understand.
-   Code shows good understanding of frontend fundamentals as well as React framework.

### Areas for Growth:

-   Make sure you remove all console.log()s before submitting a project!!
-   Your deployed application gives Mixed Content warnings in the console because it's trying to load resources from some `http` instead of `https` URLs. Not necessarily an easy fix since you don't control the API, but something to keep an eye on and look into.
-   As far as overall React architecture goes, I recommend moving all state and methods to the App component and allowing it to pass these down to its children. This refactor will pay off with better app functionality overall. Also remember that if your components don't have state data or life-cycle methods, they can be functional components which are a bit more lightweight than class components.
-   Be sure to delete any unused code or files that come out of the React-app generator.
-   One `this.setState()` can assign/reassign more than one state variable at once, so you don't need to have methods with multiple `this.setState`.

## Technical Requirements -

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   App is a working, interactive React application.
-   Includes third-party API data and four components (including App).
-   Deployed to the web. Frequent Git commits dating back to origin of project.

### Areas for Growth:

-   Your fourth component, the `Header.js` file, is not really doing much as a component. An alternative could be to have the search form as its own component, which would make more sense in terms of breaking UI elements down into React components.
-   Interesting that you have 10 "Update Readme" commits in a row ... next time I would make most of your edits and then commit instead of having that many commits just from your README.

## Creativity and Interface - Performing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   The design is simple but modern and appealing, and works in terms of furthering your content and theme.
-   Nice job using custom Google fonts to give your app a more unique look!
-   Good work implementing CSS grid for the champion card list on the home page, and using media queries to adjust the number of columns. Flex might have been a more natural choice here, as it is inherently responsive to available screen space, but the way that you implemented Grid works just fine here too!

### Areas for Growth

-   The champions list and detail views look good on mobile view, but the header is a bit squished. This could be adjusted with a simple media query, and give you a great looking mobile version in return for a few more lines of code.
-   Consider customizing the favicon and app title in `index.html` so that it further reflects the project's design and looks less like an out-of-the-box React app.

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   The application's main features work relatively well without bugs: the user can see all the champion results on the main page, can click on an individual champion to see more results, and can also type a search string into the form field, and click on the result to see detailed info.
-   The search functionality is a great feature, and I like how it returns matches for partial strings.

### Areas for Growth:

-   The search functionality could be tweaked a bit. A couple things that would improve it: the filtering working automatically as the user types. Being able to click out of it or on a reset button that returns you to the home view (since the search string URL endpoint is the same as the home, refreshing or clicking on the home link doesn't really work the way that the user expects it to if they've entered something into the search field).

## Presentation -

Criteria: Is there adequate documentation? Is the repository well-organized and free of clutter?

### Strengths:

-   Your repo looks great. Folders are organized well and there is no clutter.
-   README provides adequate documentation on project, including overview, screenshots of main app views, and used technologies.

### Areas for Growth:

-   When there are multiple components in addition to App, developers often put them into their own components directory to keep the `src` folder better organized.
-   In your directions for using the application locally, be sure to add the step that the user needs to run `npm install` to download required dependencies before they can start the React server.
-   A good README should also offer some insights into the developer's planning process. Be sure to include your wire-frames and user stories so that visitors to your repo can see the thought and planning you put into your application.

## Hard Requirements - Complete:

-   [x] Your app must be a working, interactive, React application.
-   [x] It must include data from a third-party API.
-   [x] It must use at least 4 separate components.
-   [x] It must be deployed to the Web.
-   [x] It uses CSS Grid or Flex for layout and not floats.
-   [x] Your project repository must adequately document your project and include a line to the deployed app.
-   [x] You have used git for version control throughout the project.

## Grade: Pass
