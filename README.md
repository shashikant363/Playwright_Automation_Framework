###### Robust Automation framework with the help of Playwright and typescript
###########################################################################

# As a Software Development Engineer in Test (SDET), the decisions we make when constructing an automation framework extend beyond mere technical preferences—they critically affect the effectiveness and quality of our testing. Each choice, from selecting tools to implementing testing practices, has the potential to leave a lasting impact on our testing efforts. Grasping the reasoning behind these decisions is essential for developing sustainable, long-term solutions.

# Tools used
1. Playwright
2. Typescript
3. VS code
4. ESLint
5. Prettier

# Features implemented
1. Env based test execution
2. Serial test execution
3. Parallel test execution
4. Followed good project structure
5. Added customized configurations


# Setting up ESLint and Prettier for Code Consistency
    1. # ESLint and TypeScript dependencies
## npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Prettier and ESLint Prettier Plugin
## npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# Airbnb style guide
## npx install-peerdeps --dev eslint-config-airbnb-base

### Project Structure
- 📦 your-automation-framework
- ┣ 📂 environments
- ┃ ┣ 📜 local.env
- ┃ ┣ 📜 dev.env
- ┃ ┗ 📜 qa.env
- ┣ 📂 node_modules
- ┣ 📂 src
- ┃ ┣ 📂 ui
- ┃ ┃ ┣ 📂 tests
- ┃ ┃ ┃ ┣ 📜 test1.spec.ts
- ┃ ┃ ┃ ┗ 📜 test2.spec.ts
- ┃ ┃ ┗ 📂 utils
- ┃ ┃   ┣ 📜 uiConstants.ts
- ┣ 📜 .eslintrc.js
- ┣ 📜 .prettierrc.js
- ┣ 📜 .gitignore
- ┣ 📜 tsconfig.json
- ┣ 📜 playwright.config.ts
- ┣ 📜 package.json
- ┣ 📜 package-lock.json
- ┗ 📜 README.md

 ## Steps to follow for running the tests
 1. Clone the repo into your local system
 2. Make sure you have Node.js in your system
 3. Run the command 'npm install'
 4. Run the command for installing Prettier and ESLint Prettier Plugin
 5. Set a new NODE_ENV environment variable on your local machine(refer https://www.twilio.com/en-us/blog/how-to-set-environment-variables-html)
 6. Make the Environment value changes with your login credentials
    - TEST_USERNAME = YOUR_PHONE/EMAIL
    - TEST_PASSWORD = YOUR_PASSWORD
 7. Configure the browser based on your requirement from playwright.config.ts file
 8. run 'npx playwright test' to run the tests with local.env