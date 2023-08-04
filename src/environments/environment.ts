// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientId: '4aac7ebd-25d3-4066-b6ca-7c8defd75099',
    redirectUri: 'http://localhost:4200/',
    authority:
      'https://login.microsoftonline.com/4b4804e7-608f-4dbc-9547-7ccc5d9b8600',
    scopes: ['user.read'],
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
