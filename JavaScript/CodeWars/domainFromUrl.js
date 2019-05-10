const domainName = (url) => url
  .replace('http://', '')
  .replace('https://', '')
  .replace('www.', '')
  .split('.')[0];

  