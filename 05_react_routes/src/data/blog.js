const blogs = [
  {
    id: 1,
    title: "前端工程化之模块化开发",
    content:
      "模块化开发是前端工程化的重要组成部分，通过将代码分成一个个独立的模块，可以提高代码的可维护性和复用性。常见的模块化开发方案有CommonJS、AMD、ES6模块等。",
    author: "上官子怡",
    image:
      "https://th.bing.com/th/id/OIP.LKf7bCWEyqo-Qt5BEa08MQHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1024,
    favorites: 120,
    likes: 240,
    tags: ["前端工程化", "模块化", "开发技巧"],
  },
  {
    id: 2,
    title: "自动化构建工具Webpack入门",
    content:
      "Webpack是一款流行的前端自动化构建工具，可以处理JavaScript、CSS、图片等各种资源。通过配置Webpack，可以实现代码压缩、打包、热更新等功能，提高开发效率。",
    author: "菠萝吹雪",
    image:
      "https://th.bing.com/th/id/OIP.6_WZYZMcC5fl7UDzDev0VgAAAA?w=160&h=152&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1500,
    favorites: 150,
    likes: 300,
    tags: ["前端工程化", "Webpack", "自动化构建"],
  },
  {
    id: 3,
    title: "前端代码规范与ESLint实践",
    content:
      "在团队开发中，统一的代码规范至关重要。ESLint是一款流行的JavaScript代码检测工具，可以帮助开发者发现代码中的问题并强制代码风格的一致性。",
    author: "梨花诗",
    image:
      "https://th.bing.com/th/id/OIP.jrfKUWFIA_HV3_ebA4ZSogHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 856,
    favorites: 96,
    likes: 192,
    tags: ["前端工程化", "代码规范", "ESLint"],
  },
  {
    id: 4,
    title: "Git在前端团队中的高效应用",
    content:
      "Git是目前最流行的版本控制系统之一。在前端团队中，合理利用Git的分支策略、提交规范等可以大大提高团队协作效率和代码质量。",
    author: "陆小果",
    image:
      "https://th.bing.com/th/id/OIP.B0igogx9AQDr4PiszSev_AAAAA?w=201&h=173&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1280,
    favorites: 112,
    likes: 224,
    tags: ["前端工程化", "Git", "团队协作"],
  },
  {
    id: 5,
    title: "前端性能优化实战",
    content:
      "前端性能直接影响用户的体验。通过代码分割、懒加载、图片优化、缓存策略等手段，可以有效提升网页的加载速度和运行性能。",
    author: "花如意",
    image:
      "https://th.bing.com/th/id/OIP.dBY5JSGfSROwGyIMnRNBTwHaF7?w=197&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1350,
    favorites: 140,
    likes: 280,
    tags: ["前端工程化", "性能优化", "用户体验"],
  },
  {
    id: 6,
    title: "前端自动化测试入门与实践",
    content:
      "自动化测试是保证前端代码质量的重要手段。本文将介绍Jest、Cypress等自动化测试工具的使用方法和最佳实践，帮助开发者构建可靠的测试体系。",
    author: "贼眉鼠眼",
    image:
      "https://th.bing.com/th/id/OIP._0WSLEQprOM0HdkS2T7lPQHaD9?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 960,
    favorites: 105,
    likes: 210,
    tags: ["前端工程化", "自动化测试", "代码质量"],
  },
  {
    id: 7,
    title: "前端工程化之持续集成与持续部署",
    content:
      "持续集成和持续部署（CI/CD）是现代前端开发流程中的关键环节。通过自动化构建、测试和部署流程，可以加快产品迭代速度并减少人为错误。",
    author: "认贼作父",
    image:
      "https://th.bing.com/th/id/OIP.FK8HJp5uoYK7mvHAru6doAAAAA?w=265&h=144&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1120,
    favorites: 130,
    likes: 260,
    tags: ["前端工程化", "CI/CD", "DevOps"],
  },
  {
    id: 8,
    title: "现代前端架构设计与微前端",
    content:
      "随着前端应用的复杂度不断增加，传统的单体架构难以满足需求。微前端架构将前端应用分解为多个可独立开发、部署的模块，提高了团队协作效率和系统可维护性。",
    author: "乱臣贼子",
    image:
      "https://th.bing.com/th/id/OIP.BbtPd0zsKce9xa7rj_BpZgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1400,
    favorites: 168,
    likes: 336,
    tags: ["前端工程化", "架构设计", "微前端"],
  },
  {
    id: 9,
    title: "前端工程化之Docker容器化部署",
    content:
      "Docker容器化技术为前端应用的部署提供了便利。通过Docker，可以将前端应用及其运行环境打包成一个独立的容器，在不同环境中快速部署和运行。",
    author: "天下无贼",
    image:
      "https://th.bing.com/th/id/OIP.j-bi-r-EgbvJr3ZwuqPLAQAAAA?w=159&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1050,
    favorites: 126,
    likes: 252,
    tags: ["前端工程化", "Docker", "容器化"],
  },
  {
    id: 10,
    title: "前端工程化工具链深度解析",
    content:
      "前端工程化离不开各种工具的支持。本文将深入解析前端工程化中常用的工具链，包括构建工具、打包工具、代码质量检测工具等，帮助开发者选择和定制适合自己的工具链。",
    author: "橙留香",
    image:
      "https://th.bing.com/th/id/OIP.GLyjHcaA-cKoQ2yT-fR2GAAAAA?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    views: 1200,
    favorites: 144,
    likes: 288,
    tags: ["前端工程化", "工具链", "开发效率"],
  },
];

export default blogs;
