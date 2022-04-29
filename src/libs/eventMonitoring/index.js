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
      dsn: 'https://2f6eedb3c6de41799bf9f03a658cfa53@o1145507.ingest.sentry.io/6212953',
      environment: 'testing',
      release,
      dist,
      tracesSampleRate: 0.01,
    });
  },
};
