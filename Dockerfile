# Naming our image to be use in later steps
FROM node:18 as build       
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
# Base smaller node image
FROM node:18-slim                                                                           
# Add missing dependency needed for prisma
RUN apt update && apt install libssl-dev -y --no-install-recommends                         
WORKDIR /usr/src/app
# Copy de dist folder generated in the previous step
COPY --from=build /usr/src/app/dist ./dist                                                  
# Copy env variables to use
COPY --from=build /usr/src/app/.env .env                                                    
COPY --from=build /usr/src/app/package.json .
COPY --from=build /usr/src/app/package-lock.json .
# Install without  dev dependencies to save some space
RUN npm install --omit=dev                                                                  
# Copy generated prisma client from previous step
COPY --from=build /usr/src/app/node_modules/.prisma/client  ./node_modules/.prisma/client   
ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "run","start:prod"]