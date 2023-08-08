export const environment = {
  production: true,
  auth: {
    endpoint: 'https://dev.azure.com/dr34mt34m/_apis/projects?api-version=6.0',
    clientId: '4aac7ebd-25d3-4066-b6ca-7c8defd75099',
    redirectUri: 'https://azure-taskboard.vercel.app',
    authority:
      'https://login.microsoftonline.com/4b4804e7-608f-4dbc-9547-7ccc5d9b8600',
    scopes: ['user.read', 'tasks.read'],
  },
};
