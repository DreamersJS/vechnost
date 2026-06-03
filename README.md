This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Considering you have the requirements to run this project all you need to do is navigate to root folder install dependencies and start the server then open it.

Requirements:
- Node.js 18 or later
- A package manager like npm(comes with Node.js)
  
[or if you don't meet the requirements:](#if-you-do-not-have-the-requirements)

Navigate to root folder (where your package.json is)

Open a terminal (macOS/Linux) or Command Prompt / PowerShell (Windows) in the project folder, then run:
```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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