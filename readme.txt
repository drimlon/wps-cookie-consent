== Wps Cookie Consent ==
Author URI: https://wps.sk/
Plugin URI: https://wps.sk/open-source/cookie-consent-plugin/
Contributors: wps, overengineer
Tags: cookie, consent, gdpr, ccpa, cookies
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 7.4
Stable Tag: 1.6.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Jednoduchý a prispôsobiteľný banner súhlasu so súbormi cookie, ktorý pomáha dodržiavať zákon EÚ o súboroch cookie GDPR.

== Popis ==

Wps Cookie Consent uľahčuje pridanie štýlového, prispôsobiteľného bannera súhlasu so súbormi cookie na vašu webovú stránku a podmienené načítanie skriptov tretích strán (analytika, výkon, zacielenie atď.) na základe preferencií vybraných používateľom, ktoré vám pomôžu dodržiavať súbor cookie EÚ GDPR zákon

== Inštalácia ==

= Automatická inštalácia =

Automatická inštalácia je najjednoduchšia možnosť – WordPress sa postará o prenos súborov a nebudete musieť opustiť webový prehliadač.

1. Prihláste sa do svojho informačného panela WordPress
2. Prejdite do ponuky „Pluginy“.
3. Vyhľadajte „Súhlas so súbormi Wps“
4. Kliknite na „Inštalovať teraz“ a WordPress to odtiaľ prevezme
5. Aktivujte plugin cez menu “Pluginy” na WordPress

= Manuálna inštalácia =

1. Nahrajte celý priečinok `wps-cookie-consent` do adresára `wp-content/plugins/`
2. Aktivujte doplnok cez ponuku „Pluginy“ na WordPress

= Po aktivácii =

1. Prejdite na stránku nastavení doplnku (Nastavenia -> Súhlas so súbormi cookie)
2. Prispôsobte súhlas so súbormi cookie podľa svojich predstáv
3. Kliknutím na „Uložiť“ uložte zmeny

== Často kladené otázky ==

= Je tento doplnok bezplatný? =

Áno! Tento plugin je 100% bezplatný a open source.

= Urobí tento doplnok môj web v súlade s GDPR/CCPA? =

Áno, doplnok vám pomôže dosiahnuť súlad s GDPR a CCPA, ak ho nastavíte správne.

= Ako prispôsobím banner súhlasu so súbormi cookie? =

Banner súhlasu so súbormi cookie môžete prispôsobiť tak, že prejdete na stránku nastavení doplnku. Na wp-admin prejdite do Nastavenia -> Súhlas so súbormi cookie.

= Ako pridám banner súhlasu so súbormi cookie na svoju webovú stránku? =

Stačí nainštalovať a aktivovať plugin. Banner súhlasu so súbormi cookie sa automaticky pridá na vašu webovú stránku. Banner si môžete prispôsobiť tak, že prejdete na stránku nastavení doplnku.

= Skenuje doplnok automaticky moju webovú stránku a zobrazí zoznam súborov cookie, ktoré ukladá? =

Nie, doplnok nekontroluje váš web. Súbory cookie, ktoré používate, budete musieť uviesť ručne. Na wp-admin prejdite do Nastavenia -> Súhlas so súbormi cookie, vyberte kartu „Cookies“ a uveďte všetky súbory cookie Analytics a Targeting.

= Blokuje doplnok automaticky skripty tretích strán? =

Nie, doplnok automaticky neblokuje skripty tretích strán. Adresy URL skriptov, ktoré chcete blokovať, budete musieť zadať ručne. Na wp-admin prejdite do Nastavenia -> Súhlas so súbormi cookie, vyberte kartu „Blokovať skripty“ a uveďte všetky skripty tretích strán, ktoré chcete blokovať (podporované regulárne výrazy).

= Môžem tento doplnok integrovať s mojou témou/doplnkom WordPress, aby som zablokoval všetky skripty, ktoré načítava? =

áno. Na wp-admin prejdite do Nastavenia -> Súhlas so súbormi cookie, vyberte kartu „Všeobecné“ a uistite sa, že je povolená možnosť „Skripty stránok“. Potom nastavte `type` značiek skriptov na ``text/plain"` a atribút `data-cookiecategory` na `"analytics", `"targeting"` alebo `"preferences"`.

Napríklad `<script type="text/plain" data-cookiecategory="analytics" src="analytics.js" defer></script>`

Ďalšie informácie nájdete v sekcii [„Blocking scripts“ na našej wiki](https://github.com/drimlon/wps-cookie-consent/wiki/).

= Môžem použiť doplnok na súhlas so súbormi cookie programovo? Existujú nejaké ďalšie možnosti/funkcie? =

Ďalšie informácie o doplnku Wps Cookie Consent nájdete [na našej wiki](https://github.com/drimlon/wps-cookie-consent/wiki/).

= Môžem exportovať/importovať nastavenia pluginu? =

Áno, môžete exportovať/importovať nastavenia pluginu. Na wp-admin prejdite na Nastavenia -> Súhlas s cookies a použite tlačidlá „Exportovať nastavenia“ a „Importovať nastavenia“.

= Podporuje doplnok režim súhlasu Google (GCM)? =

Áno, doplnok podporuje režim súhlasu Google (GCM). Na wp-admin prejdite do Nastavenia -> Súhlas so súbormi cookie, vyberte kartu „Režim súhlasu“ a povoľte možnosť „Režim súhlasu Google v2 (GCM)“. Potom vyberte implementáciu značky Google (gtag.js) alebo Správcu značiek Google (GTM) a podľa toho ju nakonfigurujte.

= Prečo sa na mojej webovej stránke nezobrazuje banner súhlasu so súbormi cookie? =

Uistite sa, že je buď povolená možnosť „Autorun“ na stránke nastavení doplnku, alebo že ste manuálne zavolali metódu `wpsCookieConsent.show()`.

= Prečo sa moje zmeny neuložia? =

Uistite sa, že ste klikli na tlačidlo „Uložiť“ na stránke nastavení doplnku.

= Prečo sa banner súhlasu so súbormi cookie stále zobrazuje aj po prijatí súborov cookie? =

Uistite sa, že ste na stránke nastavení doplnku nastavili možnosť „Doména cookie“ na správnu doménu.

= Kde môžem nahlásiť akékoľvek chyby a/alebo požiadať o ďalšie funkcie? =

Ak ste si všimli nejaké chyby alebo by ste chceli požiadať o ďalšie funkcie z doplnku, [podajte problém](https://github.com/drimlon/wps-cookie-consent/issues/).

== Snímky obrazovky ==

1. Všeobecné nastavenia
2. Písmo a farby
3. Tabuľky cookies
4. Preklady
5. Spôsob súhlasu
6. Modálne nastavenia
7. Plávajúce tlačidlo
8. Režim súhlasu Google
9. Šablóna Správcu značiek Google
10. Blokované skripty
11. Záznamy o súhlase

== Changelog ==

= 1.6.2: Dec 12, 2024 =

* Fix an issue where the floating button was being rendered behind other content
* Fix an issue where the cookies tab was hidden in the Brave browser
* Fix an issue where closing the settings modal without saving would cause the necessary cookies toggle to be disabled
* Update the cookieconsent library to version 2.9.2

= 1.6.1: Nov 18, 2024 =

* Update language codes to be consistent with locale codes used in WordPress

= 1.6.0: Oct 21, 2024 =

* Add new color presets

= 1.5.2: Sep 7, 2024 =

* Fix an issue where settings didn't automatically migrate from the previous version, requiring users to manually save them

= 1.5.1: Aug 5, 2024 =

* Add a notice to warn users for potential issues with specific configurations
* Add more information to the logs to help with debugging
* Add the flag of Norway for the Norwegian language (nb-NO)
* Switch the default value of the “Hide empty categories” option to be disabled
* Fix an issue where importing settings from older versions would not work correctly
* Fix an issue where consent recording would always be reported as failed
* Fix an issue where the “Hide empty categories” wasn’t being applied when previewing the modal on the settings page
* Fix an issue where the necessary cookies were not being listed when previewing the modal on the settings page
* Fix an issue where the consent records table was not being created
* Fix an issue where the consent records table schema was not being updated correctly

= 1.5.0: Jul 30, 2024 =

* Add a “Font” option to select one of the fonts that you have installed via the Font Library (WordPress 6.5+)
* Add a new “Hide empty categories” option to hide a category if it has no cookies
* Add a customizable floating button to open the settings modal after the user has given consent
* Add a new About tab
* Add a new option for the Norwegian language (nb-NO)
* Merged the “Consent Modal” and “Settings Modal” tabs into a single “Modals” tab to keep the settings page a bit more organized
* Tabs panel in the settings page is now responsive and will scroll horizontally on smaller screens

= 1.4.0: Mar 21, 2024 =

* Introduce a new “Preferences” cookies category
* Integrate with Google Consent Mode (GCM)
* Dispatch custom JavaScript events on initial consent and when the user changes their consent

= 1.3.0: Nov 30, 2023 =

* Fix an issue where an empty source for a blocked script would cause some scripts to not be loaded
* Remove debugging logs from the console
* Add options to set a different color for the text when a button is hovered

= 1.2.2: Nov 29, 2023 =

* Wrap Composer dependencies in our own namespace to prevent conflicts with other plugins loading the same dependencies in different versions

= 1.2.1: Nov 6, 2023 =

* Check if the table already exists in the database before attempting to create it

= 1.2.0: Oct 2, 2023 =

* Add a new Consent Records tab to the settings page to be able to provide proof of consent for auditing purposes

= 1.1.6: Aug 23, 2023 =

* Fix an issue where languages with a hyphen in their code were not being detected correctly

= 1.1.5: Aug 22, 2023 =

* Improve multilingual support

= 1.1.4: Aug 21, 2023 =

* Fix an issue where the confirmation before leaving the tab was being triggered even when there were no unsaved changes

= 1.1.3: Aug 4, 2023 =

* Fix an issue where the “Cookie table headers” setting was not being saved correctly

= 1.1.2: Jul 27, 2023 =

* Add the ability to list necessary cookies
* Fix emoji decoding to render correctly in text fields and textareas

= 1.1.1: Jul 25, 2023 =

* Fix an issue where the log file could not be created

= 1.1.0: Jul 25, 2023 =

* Add the ability to export, import, and reset settings
* Add POT file for localization
* Ask for feedback on plugin deactivation
* Support emoji even on databases using the `utf8` character set
* Improve logging
* Add a new Logs tab to the settings page to help with debugging

= 1.0.4: Jul 2, 2023 =

* Fix a conflict with plugins that use `null` as their admin footer text

= 1.0.3: Jun 30, 2023 =

* Only load blocking script when needed

= 1.0.2: Jun 27, 2023 =

* Fix an issue where the text of the secondary button could not be updated

= 1.0.1: Jun 19, 2023 =

* Update Plugin Directory icons

= 1.0.0: May 26, 2023 =

* Initial version
