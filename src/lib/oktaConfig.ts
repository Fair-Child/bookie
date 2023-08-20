export const oktaConfig = {
    clientId: '0oaava7j160IEua895d7',
    issuer: 'https://dev-04487977.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
};