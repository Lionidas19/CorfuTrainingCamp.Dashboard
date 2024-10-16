function startVeriff() {
  const veriff = Veriff({
    apiKey: 'API_KEY',
    parentId: 'veriff-root',
    onSession: function(err, response) {
      // received the response, verification can be started now
    }
  });
  veriff.setParams({
    person: {
      givenName: 'Foo',
      lastName: 'Bar'
    },
    vendorData: 'example@mail.com'
  });
  veriff.mount();
}