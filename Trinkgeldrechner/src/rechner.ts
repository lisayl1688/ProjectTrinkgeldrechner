const Betrag = document.getElementById('betrag')as HTMLInputElement;
const mengePersonen = document.getElementById('mengePersonen')as HTMLInputElement;
const serviceBewertung = document.getElementById('serviceBewertung')as HTMLSelectElement;
const berechnungsButton = document.getElementById('berechnungsButton')as HTMLInputElement;
const ergebnisElement = document.getElementById('ergebnisElement')as HTMLInputElement;






function ergebnisOnClick (event: MouseEvent) :void{
    event.preventDefault();

    let betragValue : number = Number(Betrag.value);
    let mengePersonenValue : number = Number(mengePersonen.value);
    let betragProPerson = betragValue / mengePersonenValue;
    let gesamtProPersonBerechnung : number = 0;
    let trinkgeldProPerson: number = 5;
    let serviceBewertungValue  : string = serviceBewertung.value;
    
    console.log("hallo");
    console.log(serviceBewertungValue);
    switch (serviceBewertungValue) {
        case "guteBewertung":
            gesamtProPersonBerechnung = betragProPerson * 1.2;
            trinkgeldProPerson = gesamtProPersonBerechnung - betragProPerson;
            console.log("cisdfv");
            break;
        case "mittlereBewertung":
            gesamtProPersonBerechnung = betragProPerson * 1.1;
            trinkgeldProPerson = gesamtProPersonBerechnung - betragProPerson;
            break;
        case "schlechteBewertung":
            gesamtProPersonBerechnung = betragProPerson * 1.02;
            trinkgeldProPerson = gesamtProPersonBerechnung - betragProPerson;
            break;
    }

    let gesamtTrinkgeld = trinkgeldProPerson * mengePersonenValue;
    let Gesamtsumme = betragValue + gesamtTrinkgeld;
    
    const ergebnisTrinkgeldRechner = document.createElement("p") 
    ergebnisTrinkgeldRechner.innerText = `Das Trinkgeld ist: ${trinkgeldProPerson}`
    ergebnisElement.appendChild(ergebnisTrinkgeldRechner)

    const gesamtsummenRechner = document.createElement("p") 
    gesamtsummenRechner.innerText = `Die Gesamtsumme beträgt: ${Gesamtsumme}`
    ergebnisElement.appendChild(gesamtsummenRechner)

    const preisProPersonRechner = document.createElement("p") 
    preisProPersonRechner.innerText = `Der Preis pro Person beträgt: ${betragProPerson}`
    ergebnisElement.appendChild(preisProPersonRechner)
}

berechnungsButton.addEventListener('click', ergebnisOnClick);