interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '4SdR6GSf5X4DRbwFfuq0sm2yg1c8CxQE',
  domain: 'amanrathie.auth0.com',
  callbackURL: 'https://poker-bankroll.herokuapp.com/#/home/dashboard'
};
