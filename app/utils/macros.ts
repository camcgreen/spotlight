export const URL_DEV = 'http://localhost:3000'
export const URL_PROD = 'https://getspotlight.vercel.app'
export const URL_BASE =
  process.env.NODE_ENV === 'development' ? URL_DEV : URL_PROD
export const RANGE_STEP = 0.05
