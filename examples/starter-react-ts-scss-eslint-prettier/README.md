# React Starter Pack (Typescript & SCSS)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Additional Add-Ons in this Starter Pack

This starter pack has predefined configurations for the following things.

1. Typescript
2. SCSS
3. ESLint (eslint and eslint-plugin-react)
4. Prettier
5. Pre Commit Hook with Husky

Once you download this example, run the following command to install all node modules.

### `npm i`

## Manual Set Up

For detailed explanation, checkout this <a href = "https://medium.com/swlh/developer-checklist-react-application-initial-set-up-d4568799b825">article</a>

### Step 1 : Create React App with Typescript

Let’s navigate to our codebase folder and create the project using “create-react-app” command.

### `npm create-react-app app-name --template typescript`

### Step 2 : Set Up SCSS

Let’s install node-sass first.

### `npm create-react-app app-name`

Boom! SCSS has been set up in the project directory.

1. Convert existing .css files (App.css and index.css) to .scss files.
2. Change any imports to use .scss.

### Step 4: Set up ESLint

With ESLint, we could enforce some guidelines in our project and avoid common pitfalls. Let’s install ESLint and ESLint Plugin React to our project first. 

### `npm install eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`

Create a .eslintrc file at the project root and set the configurations.

###

    {
        "env": {
            "browser": true,
            "node": true,
            "jest": true,
            "es6": true
        },
        "plugins": [
            "import",
            "react",
            "@typescript-eslint"
        ],
        "extends": [
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended"
        ],
        "parserOptions": {
            "ecmaVersion": 2020,
            "ecmaFeatures": {
                "jsx": true
            },
            "sourceType": "module",
            "project": "./tsconfig.json"
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        },
        "overrides": [
            {
                "files": [
                    "serviceWorker.ts"
                ],
                "rules": {
                    "no-console": "off",
                    "@typescript-eslint/explicit-module-boundary-types": "off"
                }
            }
        ],
        "rules": {
            "no-console": "warn",
            "no-eval": "error",
            "import/first": "error"
        }
    }

You can view the entire list of configurations <a href = "https://eslint.org/docs/user-guide/configuring">here</a>

Create another file called .eslintignore at the project root. We could mention the list of directories or files which needs to be skipped by ESLint.
###
    # don't ever lint node_modules
    node_modules
    # don't lint build output (make sure it's set to your correct build folder name)
    dist


Add the following to package.json along with other scripts.

###

    {
        "scripts": {
            "lint": "eslint .",
            "lint:fix": "eslint --fix ."
        }
    }

### Step 4: Set up Prettier

Prettier helps in formatting the code. It makes sure the entire codebase looks uniform when there are multiple developers working on it. Let us install Prettier within our project directory.

### `npm install prettier --save-dev`

Now, let’s configure prettier. Create a .prettierrc file in the project root directory and add few prettier options.

    {
        "printWidth": 85,
        "arrowParens": "always",
        "semi": true,
        "tabWidth": 4,
        "bracketSpacing": true,
        "singleQuote": true
    }

Let’s also set up Prettier CLI which will format our code based on the options specified. Add the following code snippet to package.json along with other scripts.

###

    {
        "scripts": {
            "format": "prettier --write \"**/*.+(ts|tsx|js|jsx|json|css|md)\""
        }
    }

### Step 5: Integrate Prettier with ESLint

Did you know ESLint can also format your code to some extent? Well, if we are using Prettier, we need to replace ESLint’s formatting rules.

### `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

We can enable this configuration by using the recommended one in eslintrc file.

###

    {
        "extends": ["plugin:prettier/recommended"]
    }

### Step 6: Set Up Pre-Commit Hook

husky is a tool that allows to set up Git Hooks easily. We could set up a pre-commit hook with husky that will make sure the ESLint and Prettier scripts are run before the code is committed to your repository.

### `npm install --save-dev husky`

The above command will install husky in the project. Now, let’s set up the husky pre-commit hook.
Insert the following code in your package.json.

###

    {
        "husky": {
            "hooks": {
                "pre-commit": "npm run lint:fix && npm run format"
            }
        }
    }
