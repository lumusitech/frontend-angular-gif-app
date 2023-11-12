# GifsApp - Angular v15.2.6

1. After clone, run

    ```bash
    cd frontend-angular-gif-app
    pnpm i
    ```

2. Then, generate environments

    ```bash
    ng g environments
    ```

3. Set this properties to environment file

    ```bash
    export const environment = {
        API_KEY: 'your_api_key',
        API_URL: 'https://api.giphy.com/v1/gifs',
    };

    ```

4. Run dev server

    ```bash
    ng serve -o
    ```

## Dependencies

[git commit msg linter](https://www.npmjs.com/package/git-commit-msg-linter): A lightweight, independent, 0 configurations and joyful git commit message linter.
👀 Watching your every git commit message INSTANTLY 🚀.
