FROM node:12-slim

WORKDIR /app

COPY package*.json ./

# 使用淘宝镜像
RUN npm --registry https://registry.npm.taobao.org install  

COPY . .

EXPOSE 3000

CMD ["npm", "start"]