
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## if you do not have the requirements
- Install Node.js →
[guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Or install via nvm (Node Version Manager) →
[guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

    You can install Node versions like this:
    ```bash
    nvm install 18
    nvm use 18
    ```

- Can't install Node.js 18? - run it inside Docker container:
  1. create a disposable container:
   ```bash
   docker run -it --rm \
  -v $(pwd):/app \
  -w /app \
  -u $(id -u):$(id -g) \
  node:18 sh
   ```
   1. Inside the container:
   ```bash
   npx create-next-app
   npm install
   npm run dev
   ```
   2. Exit with:
   ```bash
   exit
   ```
   3. start the container - type in terminal:
   ```
   docker-compose up --build
   ```
   You will see link in terminal to localhost ctrl + click it or type it in your address bar