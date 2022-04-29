import {Platform} from 'react-native';
import * as SentryModule from '@sentry/react-native';
import {version, build} from '../../../package.json';

export const eventMonitoring = {
  captureException: SentryModule.captureException,
  captureMessage: SentryModule.captureMessage,
  captureEvent: SentryModule.captureEvent,
  configureScope: SentryModule.configureScope,
  setUser: SentryModule.setUser,
  async init() {
    let release = `${version}-${Platform.OS}`;
    // if (update) {
    //   release += `+codepush:${update.label}`;
    // }
    const dist = `${build}-${Platform.OS}`;

    SentryModule.init({
      dsn: 'https://1c501b6cc9b3401887da3bd10c3935e3@sentry.ehp.internal-passculture.app/9',
      environment: 'testing',
      release,
      dist,
      tracesSampleRate: 0.01,
    });
  },
};
