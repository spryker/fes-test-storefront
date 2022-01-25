import { ExperienceService } from '@spryker-oryx/experience';

export default () => {
  global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

  function createXHR2() {
    return new XMLHttpRequest();
  }

  ExperienceService.createXHR = createXHR2;
};
