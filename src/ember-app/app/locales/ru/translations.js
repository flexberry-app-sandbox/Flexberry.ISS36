import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s36',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s36',
          title: 'I s s36'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
