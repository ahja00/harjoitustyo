Sovelluksen käyttöönotto:
1.git clone
2. avaa visual studio codessa
3. suorita nmp install
4. laita API -avain joka löytyy wordista niin tuohon electricrobot.py kohtaan "price_endpoint".
4. suorita python electricrobot.py (tämä luo status.json tiedoston ja toimii electricrobot.html-,electricrobot.py- ja electricrobot.js-tiedostojen kanssa yhdessä.)
5. avaa login.html liveserverin kautta (sillä electricrobot ei anna tietoja muuten. Muihin juttuihin pitäisi toimia ilman liveserveriä.)


TIETOA
Harjoitustyö: 
Arjen organisointisovellus

Tässä on HTML-pohjainen sovellus, jonka tavoitteena on tehdä arjesta helpompaa ja järjestelmällisempää, siivouksen, kaupassakäynnin ja perheen ajanhallinnan osalta. Sovellus auttaa käyttäjiä pitämään tärkeät asiat listattuna ja muistettuna, ja tukee myös yhteistä aikataulujen hallintaa.

Sovelluksessa käyttäjät voivat kirjautua sisään, rekisteröityä, hallita erilaisia listoja, kuten ostos- ja siivouslistoja, sekä kirjata muistiinpanoja perheen kalenteriin, sekä seurata sähkönhintaa. Tavoitteena on tehdä arjesta sujuvampaa ja helpompaa, koska tässä sovelluksessa on mahdollisuus ottaa käyttöön ilmoitukset SMS:llä tai sähköpostilla, niin se helpottaa esim. siivoushommien muistamista perheen sisällä.

Toiminnallisuudet:
1. Kirjautuminen ja rekisteröityminen
Kun kirjaudut sisään tai rekisteröidyt, pääset sovelluksen päävalikkoon. (Ylhäällä lukee pop up-ikkuna, mikäli kirjautuminen onnistuu. Kun tästä painaa ok, siirtyminen tapahtuu.)

2. Päävalikko:
Päävalikossa on seuraavat osiot:

Shopping List (Ostoslista)
Tässä osiossa voit lisätä, poistaa ja muokata ostettavia tuotteita. On kätevää kun listaan pystyy lisäämään esim. perheen sisällä jonon jatkoksi ostettavia tarvikkeita. (ja back to menu)

Cleaning List (Siivouslista)
Siivouslistassa voit lisätä siivoustehtäviä, kuten "imurointi" tai "pölyjen pyyhkiminen". Tehtävät voi myös merkitä tehdyiksi, jolloin asiat pysyvät hallinnassa.(ja back to menu)


User Management (Käyttäjien hallinta)( > alempana kohta3. kerrottu tarkemmin mitä tämä osio sisältää)
Tässä osiossa voit lisätä, poistaa ja muokata käyttäjiä. Tämä on hyvä juttu, jos sovellusta käyttää useampi henkilö samassa perheessä tai ryhmässä.

Daily Planner (Perheen aikataulu)
Tässä osiossa voit lisätä tärkeitä tehtäviä ja muistutuksia kalenteriin. Näin kaikki perheenjäsenet voivat nähdä päivän suunnitelmat ja tehtävät yhdessä paikassa. Aikataulut voi jakaa helposti ja varmistaa, ettei mikään tärkeä asia jää huomiotta.(ja back to menu)

Electric Robot (sähköbotti)
Tämä hakee pörssisähkö.net -sivustolta sähkönhinnan, ja kertoo milloin kannattaa pyykätä.

Logout (Uloskirjautuminen)
Voit kirjautua ulos sovelluksesta.


3. User Management -osio sisältää:
Add a User (lisää käyttäjä)
Delete a User (poista käyttäjä)
Edit User Details (muokkaa käyttäjän tietoja)
Notification Settings (enable/disable Email/SMS noitifications)
Back to the Menu






Kehityssuunnitelmat:

Tällä hetkellä sovellus on HTML-pohjainen, mutta reactiin siirto on kesken. Kun react on ok, laajennan tätä tietokannan avulla, jolloin käyttäjien tiedot ja listat voidaan tallentaa pysyvästi.

Ajatuksena olisi, että tässä onnistuisi myöhemmin: 
-Jakaa ostos- ja siivouslistat muiden käyttäjien kanssa.
-hallita päivittäisiä tehtäviä ja aikatauluja yhdessä paikassa.
-lisätä muistutuksia tärkeistä asioista perheen jäsenten puhelimiin.


(Sovellus avataan login.html tiedostosta. Josta pitäisi onnistua etenemään.)

Olen käyttänyt shoppinglistaan tutorialia, ja tein samalla tyylillä myös cleaning listin. Ne piti muokata, jotta on erillisiä listoja. tutorial: https://www.youtube.com/watch?v=3OqWCGVaOkA

-Janika Ahonen