// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCYTr2NNmZBMdNAiBRUlNi-83y2BG8Mllw",
    authDomain: "premium-management-system.firebaseapp.com",
    databaseURL: "https://premium-management-system.firebaseio.com",
    projectId: "premium-management-system",
    storageBucket: "premium-management-system.appspot.com",
    messagingSenderId: "603738375766"
  }
};
