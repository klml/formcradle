# formcradle

> Von der Wiege bis zur Bahre,
> Formulare, Formulare!

[ancient german Volksmund](//aphorismen.de/zitat/72791) for _from cradle to bier, forms, forms!_

Everybody [hates](//www.addletters.com/pictures/bart-simpson-generator/bart-simpson-generator.php?line=Mein+IBAN+ist+DE271007777702092997002092997) to copy IBANs.
Interactive PDF-forms are great, but they often dont't work.
You should only have to enter data once and then they should be able to get copied it whenever needed.

With __formcradle__ enables you to just type in your data and then send it, print it and scan it.

[Example](//klml.github.io/formcradle/?form=forms/sepamandate_de.md#glaeubiger_adress=Max%20Mustermann&ci=1234567&mndtid=PE456787&glaeubiger=Muster%20AG&kdnr=987654321&schuldner=Erika%20Mustermann%20&adress=Hauptstr%201&plz=12345&ort=Musterstadt&iban=DE27100777770209299700&bic=MARKDEFF&ort_an_sub=Musterstadt&datum_an=&fcqr=true&wiederholende=mehrmal)

formcradle is a online tool to fill in common forms (terminations, NDAs, etc) and print it local or as pdf.
Or send values as key-values url with updated fragment identifier (`#hash`) via mail.
Or scan the printed QR code, even on [desktops](//www.the-qrcode-generator.com/scan) and get the filled form again in your browser.

## create forms

* use markdown
* use em (`__Word__`) as placeholder
* add plain HTML inputs with name like placeholders `name="word"` in lowercase.
* set short id inputs

And add URL to form: [?form=](https://klml.github.io/formcradle/?form=).

## QR Code

The QR Codes represents the formscradle URL.
With the additional hash parameter `&fcqr=` (default `true`) you can switch the QR Code on prints.

### security problem

There is no guarantee, the printed QR code represents the values from the printed form.
You can print the form with a value and manipulate the QR code with another value.


## Examplesforms

* [german nda](https://klml.github.io/formcradle/?form=forms/nda_de.md) from [bsi.bund.de](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Hilfsmittel/Muster/vertraulichkeitsvereinbarung_pdf.pdf?__blob=publicationFile&v=2 )
* are you tired of writing your IBAN? Use [german sepamandate](https://klml.github.io/formcradle/?form=forms/sepamandate_de.md) and c&p your IBAN, print it, sign it and scan it again.


Using [hashsplit](https://github.com/klml/hashsplit) to prefill forms or hand over datasets.
