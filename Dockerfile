FROM node:19-alpine as build

# Create app directory
WORKDIR /usr/src/app
EXPOSE 3000

# Install app dependencies
COPY package*.json ./
RUN yarn global add serve && yarn install 

# Bundle app source
COPY . .
RUN yarn build

# Run app
FROM build as run
ENV NODE_ENV=production
COPY --from=build /usr/src/app/dist ./dist
CMD [ "serve", "-s", "dist", "-p", "3000" ]