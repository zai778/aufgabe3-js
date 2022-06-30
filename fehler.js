/**
 * Author: Fantasia
 * Projekt: Bankanbindung Sparkasse
 * Subprojekt: Senden einer Überweisung
 * Company: tranzfer
 */
const API_URL = "api.sparkasse.de/v3/accounts";

const API_key = "lwqdjOI987HHUIaihjaskdh";

const TRANZFER_CUSTOMER_ID = "tranzfer-009";

const bankname = "Sparkasse";

console.log("Initialisiere Verbindung...");

console.log("Verbindung mit " + bankname + " hergestellt");

let kunde1 = "Jan Müller";

let kunde2 = "Martina Stein";

let iban1 = "1234 0000 9908 9999";

let iban2 = "1222 0000 9908 9999";

let betrag = 23.3;

console.log("Starte Überweisung");

console.log(`Von "${kunde1}" IBAN: "${iban1}"`);

console.log(`Nach "${kunde2}" IBAN: "${iban2}"`);

console.log(`Sende Betrag ${betrag}€`);

console.log("Überweisung erfolgreich");
// Transaktionsdauererfassen;
const bankname2 = "Sparkasse Berlin";

const transaktionsDauer = 100;

console.log("Beende Verbindung...");

console.log("Verbindung mit " + bankname + " beendet");

console.log("Dauer der Transaktion " + transaktionsDauer + "s");
