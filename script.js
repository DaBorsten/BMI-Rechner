function bmiBerechnen() {

    // Variablen
    let m = document.getElementById('masse').value
    let y = document.getElementById('groesse').value
    let ergebnisRechnung
    let ergebnisBMI = document.getElementById('ergebnisBMI')
    let mehrDetails = document.getElementById('mehrDetails')
    let detail = document.getElementById('detailBMI')

    // Variable ergebnis berechnen
    if (m && y > 0) {
        ergebnisRechnung = m / Math.pow(y, 2)

        // Ergebnis ausgeben
        ergebnisBMI.innerHTML = ergebnisRechnung.toFixed(2)

        // Details anzeigen, falls noch nicht sicht ar
        if (mehrDetails.style.display !== 'block') {
            mehrDetails.style.display = 'block'
        }

        // BMI prüfen und Diagnose daraus ziehen + Farbe ändern
        switch (true) {
            case (ergebnisRechnung < 16):
                detail.innerHTML = "starkes Untergewicht";
                detail.style.color = "rgb(255, 0, 0)";
                break;
            case (ergebnisRechnung < 17):
                detail.innerHTML = "mäßiges Untergewicht";
                detail.style.color = "rgb(200, 80, 0)";
                break;
            case (ergebnisRechnung < 18.5):
                detail.innerHTML = "leichtes Untergewicht";
                detail.style.color = "rgb(200, 150, 0)";
                break;
            case (ergebnisRechnung < 24.9):
                detail.innerHTML = "Normalgewicht";
                detail.style.color = "rgb(0, 125, 0)";
                break;
            case (ergebnisRechnung < 29.9):
                detail.innerHTML = "Präadipositas";
                detail.style.color = "rgb(200, 150, 0)";
                break;
            case (ergebnisRechnung < 34.9):
                detail.innerHTML = "Adipositas Grad I";
                detail.style.color = "rgb(200, 80, 0)";
                break;
            case (ergebnisRechnung < 39.9):
                detail.innerHTML = "Adipositas Grad II";
                detail.style.color = "rgb(200, 50, 0)";
                break;
            case (ergebnisRechnung >= 40):
                detail.innerHTML = "Adipositas Grad III";
                detail.style.color = "rgb(255, 0, 0)";
                break;
        }
    } else {
        return
    }
}


