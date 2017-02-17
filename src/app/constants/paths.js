const PROD_API_DOMAIN = 'https://bao-wedding-api.herokuapp.com';
const DEV_API_DOMAIN = 'http://0.0.0.0:3000';

// HACKITY HACK
const IS_DEV = false;
export const API_DOMAIN = IS_DEV ? DEV_API_DOMAIN : PROD_API_DOMAIN;
