import demoJSON from './public/locales/en/demo.json';
import commonJSON from './public/locales/en/common.json';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        resources: {
            common: typeof commonJSON;
            demo: typeof demoJSON;
        };
    }
}

