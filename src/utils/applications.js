import { registerApplication } from 'single-spa';
const commioApplications = require('./../commio-applications.json');

const runScript = async (url) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });

const loadApplication = (name, url) => async () => {
  await runScript(url);
  return window[name];
};

export const registerApplications = () => {
  commioApplications.applications.forEach(({ name, url, path }) => {
    console.log('Registering application', { name, url, path });
    registerApplication({
      name,
      app: loadApplication(name, url),
      activeWhen: path
    });
  });
};
