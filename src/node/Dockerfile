FROM node:12-slim
WORKDIR /app
ADD . /app
RUN npm --registry https://registry.npm.taobao.org install  # 使用淘宝镜像
EXPOSE 3000
CMD npm start