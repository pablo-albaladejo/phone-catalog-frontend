FROM node:8-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN npm install
# RUN npm install --only=production

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]