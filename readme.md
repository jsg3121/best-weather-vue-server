# 기상정보 종합 안내 서비스 (서버)

## 사용 기술
1. <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
2. <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/>
3. <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=TypeScript&logoColor=white"/>
4. <img src="https://img.shields.io/badge/lodash-3492FF?style=flat-square&logo=lodash&logoColor=white"/>
5. <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>

## API 제공
1. 기상청
2. OpenWeatherMap
3. AccuWeather (추후 적용 예정)

## 실행 순서
1. ```docker-compose up -d``` mysql 서버 설치
2. ```npm run prisma``` database 추가
3. ```npm run dev``` init data && run production -- development

---

### 파일 구조
```
Root
├───prisma
│   └───migrations
│       └───20211006011524_init
├───public
│   ├───css
│   ├───fonts
│   ├───img
│   └───js
└───src
    ├───@types
    │   └───src
    ├───api
    │   └───src
    │       ├───koreaWeather
    │       │   └───src
    │       │       ├───atmosService
    │       │       │   └───src
    │       │       ├───currentWeather
    │       │       │   └───src
    │       │       ├───threeHours
    │       │       │   └───src
    │       │       └───weeklyWeather
    │       │           └───src
    │       └───openWeather
    │           └───src
    │               ├───currentData
    │               │   └───src
    │               ├───hourlyData
    │               │   └───src
    │               └───weeklyData
    │                   └───src
    ├───common
    │   └───src
    ├───database
    │   └───src
    │       └───geolocate
    ├───server
    │   └───src
    └───service
        └───src
            ├───geolocation
            │   └───src
            ├───koreaWeather
            │   └───src
            │       ├───atmosService
            │       │   └───src
            │       ├───currentTemperature
            │       │   └───src
            │       ├───threeHours
            │       │   └───src
            │       └───weeklyTemperature
            │           └───src
            └───openWeather
                └───src

```