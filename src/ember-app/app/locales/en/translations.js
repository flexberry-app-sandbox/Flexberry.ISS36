import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS36FormLForm from './forms/i-i-s-i-s-s36-form-l';
import IISISS36InvestmentLForm from './forms/i-i-s-i-s-s36-investment-l';
import IISISS36SupportLForm from './forms/i-i-s-i-s-s36-support-l';
import IISISS36FormEForm from './forms/i-i-s-i-s-s36-form-e';
import IISISS36InvestmentEForm from './forms/i-i-s-i-s-s36-investment-e';
import IISISS36SupportEForm from './forms/i-i-s-i-s-s36-support-e';
import IISISS36FormModel from './models/i-i-s-i-s-s36-form';
import IISISS36InvestmentModel from './models/i-i-s-i-s-s36-investment';
import IISISS36ListInvModel from './models/i-i-s-i-s-s36-list-inv';
import IISISS36SupportModel from './models/i-i-s-i-s-s36-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s36-form': IISISS36FormModel,
    'i-i-s-i-s-s36-investment': IISISS36InvestmentModel,
    'i-i-s-i-s-s36-list-inv': IISISS36ListInvModel,
    'i-i-s-i-s-s36-support': IISISS36SupportModel
  },

  'application-name': 'I s s36',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s36',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s36',
          title: 'I s s36'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s36': {
          caption: 'ISS36',
          title: 'ISS36',
          'i-i-s-i-s-s36-form-l': {
            caption: 'Form',
            title: ''
          },
          'i-i-s-i-s-s36-support-l': {
            caption: 'Support',
            title: ''
          },
          'i-i-s-i-s-s36-investment-l': {
            caption: 'Investment',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s36-form-l': IISISS36FormLForm,
    'i-i-s-i-s-s36-investment-l': IISISS36InvestmentLForm,
    'i-i-s-i-s-s36-support-l': IISISS36SupportLForm,
    'i-i-s-i-s-s36-form-e': IISISS36FormEForm,
    'i-i-s-i-s-s36-investment-e': IISISS36InvestmentEForm,
    'i-i-s-i-s-s36-support-e': IISISS36SupportEForm
  },

});

export default translations;
