# Node.js 기반의 이미지를 사용합니다.
FROM node:14

# 작업 디렉토리를 생성하고 앱 코드를 복사합니다.
WORKDIR /app
COPY . .

# 앱 종속성 설치
RUN npm install

# 앱 빌드
RUN npm run build

# 앱 실행
CMD ["npm", "start"]
