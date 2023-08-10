export const environment = {
  production: false,
  auth: {
    endpoint: 'https://dev.azure.com/dr34mt34m/_apis/projects?api-version=6.0',
    clientId: '4aac7ebd-25d3-4066-b6ca-7c8defd75099',
    redirectUri: 'http://localhost:4200/',
    authority:
      'https://login.microsoftonline.com/4b4804e7-608f-4dbc-9547-7ccc5d9b8600',
    scopes: ['user.read', 'tasks.read','499b84ac-1321-427f-aa17-267ca6975798/user_impersonation' ],
  },
};
