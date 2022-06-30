/**
 * Author: Fantasia
 * Projekt: Bankanbindung Sparkasse
 * Subprojekt: Senden einer Überweisung
 * Company: tranzfer
 */
const API_URL = "api.sparkasse.de/v3/accounts";

const API_key = "lwqdjOI987HHUIaihjaskdh";

const TRANZFER_CUSTOMER_ID = "tranzfer-009"; // Anführung zeichen

const bankname = "Sparkasse";

console.log("Initialisiere Verbindung..."); // Klammer bitte

console.log("Verbindung mit " + bankname + " hergestellt"); // .log , plus zeichen

let kunde1 = "Jan Müller"; //Name darf mit keinen zahl begonnen werden

let kunde2 = "Martina Stein"; //Name darf mit keinen zahl begonnen werden

let iban1 = "1234 0000 9908 9999"; //Name darf nicht wiederholt werden

let iban2 = "1222 0000 9908 9999"; //Name darf nicht wiederholt werden

let betrag = 23.3; //extra punkt darf hier nicht sein

console.log("Starte Überweisung");

console.log(`Von "${kunde1}" IBAN: "${iban1}"`);

console.log(`Nach "${kunde2}" IBAN: "${iban2}"`);

console.log(`Sende Betrag "${betrag}" €`);

console.log("Überweisung erfolgreich");
// Transaktionsdauererfassen; //ein kommentar muss zwei Schrägstriche haben
const bankname2 = "Sparkasse Berlin"; //den gleichen Neme darf nicht mehr als ein mal benutzt werden, const müss hier zugefügt werden

const transaktionsDauer = 100; //const und wert müssen zusammen geschrieben werden

console.log("Beende Verbindung...");

console.log("Verbindung mit " + bankname + " beendet");

console.log("Dauer der Transaktion " + transaktionsDauer + "s");
