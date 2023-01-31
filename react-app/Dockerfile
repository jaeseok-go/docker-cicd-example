# Stage 1
# react 소스를 기준으로 정적 파일 빌드
FROM node:alpine as builder

WORKDIR /usr/src/app

COPY ./react-app/package.json ./

RUN npm install

COPY ./react-app/ ./

CMD ["npm", "run", "build"]

# Stage 2
# 빌드된 파일을 nginx 경로로 이동한다.
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html