import { makeObservable, observable, action, computed } from "mobx"
import type { TAppLocale } from '../types/Locale'
import { appLocalStorage } from '@/shared'
import i18n from '@/app/config/i18n'
import * as api from './api'

type TPrivateFields = '_locale'

export class Locale {
    private _locale: TAppLocale = appLocalStorage.get('locale') || import.meta.env.VITE_DEFAULT_LOCALE

    get locale() {
        return this._locale
    }

    constructor() {
        makeObservable<Locale, TPrivateFields>(this, {
            _locale: observable,
            locale: computed,
            setLocale: action,
            updateLocale: action
        })
    }

    setLocale(value: TAppLocale) {
        this._locale = value
    }

    async updateLocale(locale: TAppLocale) {
        const resources = await api.fetchLocale(locale)

        i18n.addResources(this.locale, '', resources)

        i18n.changeLanguage(locale)

        this.setLocale(locale)

        // appLocalStorage.set('locale', locale)
    }
}
  