let BASE_URL = ''
const TIME_OUT = 10000

// 2.根据process.env.NODE_ENV区分环境
//开发环境：development
//生成环境：production
//测试环境：test

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
