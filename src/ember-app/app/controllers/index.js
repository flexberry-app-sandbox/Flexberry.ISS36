import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s36.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s36.title'),
          children: [{
            link: 'i-i-s-i-s-s36-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-form-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-i-s-s36-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-support-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-i-s-s36-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s36.i-i-s-i-s-s36-investment-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})