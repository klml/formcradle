# formcradle

> Von der Wiege bis zur Bahre,
> Formulare, Formulare!

[ancient german Volksmund](//aphorismen.de/zitat/72791) for _from cradle to bier, forms, forms!_

__formcradle__ is a online tool to fill in common forms (terminations, NDAs, etc) and print it local or as pdf.
Or send values as key-values url with updated fragment identifier (`#hash`) via mail.
Or scan the printed QR code, even on [desktops](//www.the-qrcode-generator.com/scan) and get the filled form again in your browser.

[Example](//klml.github.io/formcradle/?form=forms/nda_de.md#ag=Example%20AG&an=Max%20Muster&stra%C3%9Fe_an=Fakestreet%20123&plz_an=12345&ort_an=Musterstadt&verteten=Maximilian%20Mustermann&auftrag=Rollout%20Formularcenter&gericht=Berlin&ort_ag=M%C3%BCnchen&datum_ag=&ort_an_sub=Berlin&datum_an=2018-02-22
)

## Forms

* use markdown
* use em (`__Word__`) as placeholder
* add plain HTML inputs with name like placeholders `name="word"` in lowercase.
* set short id inputs

And add URL to form: [?form=](https://klml.github.io/formcradle/?form=).

## QR Code

With the additional hash parameter `&fcqr=` (default `true`) you can swoitch the QR Code on prints.

## Examplesforms

* [german nda](https://klml.github.io/formcradle/?form=forms/nda_de.md) from [bsi.bund.de](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Hilfsmittel/Muster/vertraulichkeitsvereinbarung_pdf.pdf?__blob=publicationFile&v=2 )
* are you tired of writing your IBAN? Use [german sepamandate](https://klml.github.io/formcradle/?form=forms/sepamandate_de.md) and c&p your IBAN, print it, sign it and scan it again.


Using [hashsplit](https://github.com/klml/hashsplit) to prefill forms or hand over datasets.
