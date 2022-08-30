This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- First, clone this repository
- Rename `.env.example` to `.env.local` and provide the values for each environmental variable
- Install necessary dependencies and start the server:

```bash
cd client
npm install
npm start
# or
yarn dev
```

- Alternatively, you can run using the Dockerfile:

```
cd client
docker build . -t yodds-client
docker run -p 3000:3000 yodds-client
```
