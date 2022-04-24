### Build Step
# pull the Node.js Docker image
FROM node:16.13 as builder

# change working directory
WORKDIR /usr/src/app

# https://pnpm.io/cli/fetch
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Files required by pnpm install
COPY .npmrc package.json pnpm-lock.yaml  ./

# run npm install in our container
RUN pnpm install --frozen-lockfile 

# copy the codes except the node_modules which is in .dockerignore
COPY . .

# build the application
RUN pnpm run build

### Serve Step
# pull the Node.js Docker image
FROM node:16.13-alpine

# change working directory
WORKDIR /app

# copy files from previous step
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "index.js"]
