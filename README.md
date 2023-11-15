# Griglia Campo Minato

L'utente clicca sul bottone Play che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- creo una variabile che seleziona la board nell'html
- creo una variabile che seleziona il bottone play
- creo una funzione che crea un elemento nell'html e prende come argomenti il tag dell'elemento, un array di classi da aggiungere all'elemento e il contenuto dell'elemento
  - creo un elemento con il tag desiderato tramite document.createElement()
  - tramite un ciclo for scorro l'array delle classi da inserire
    - per ogni elemento dell'array aggiungo la classe all'elemento
  - appendo il contenuto all'elemento
  - ritorno l'elemento creato
- inizializzo una variabile isPlaying a false
- aggiungo l'evento al click sul bottone play
  - se isPlaying non è false
    - eseguo un ciclo con 100 iterazioni che per ogni iterazione
      - crea un nuovo elemento tramite la funzione prima creata
      - appende l'elemento alla board
    - mette isPlaying a true(così in futuro cliccando il bottone non rieseguo il codice)
    - seleziono la lista di tutti gli elementi con classe cell
    - per ogni elemento aggiungo un evento al click che
      - aggiunge se non c'è o toglie se c'è la classe new-bg che cambia il colore di background della cella
      - stampa in console il numero della cella
