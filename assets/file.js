

Vue.createApp({
  data() {
    return {
      contatti: [    {
                  name: "Michele",
                  avatar: "assets/Immagini/avatar_1.jpg",
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      message: "Hai portato a spasso il cane?",
                      status: "sent",
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      message: "Ricordati di dargli da mangiare",
                      status: "sent",
                    },
                    {
                      date: "10/01/2020 16:15:22",
                      message: "Tutto fatto!",
                      status: "received",
                    },
                  ],
                  
                },
                {
                  name: "Fabio",
                  avatar: "assets/Immagini/avatar_2.jpg",
                  messages: [
                    {
                      date: "20/03/2020 16:30:00",
                      message: "Ciao come stai?",
                      status: "sent",
                    },
                    {
                      date: "20/03/2020 16:30:55",
                      message: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                    },
                    {
                      date: "20/03/2020 16:35:00",
                      message: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "received",
                    },
                  ],
                },
                {
                  name: "Samuele",
                  avatar: "assets/Immagini/avatar_3.jpg",
                  messages: [
                    {
                      date: "28/03/2020 10:10:40",
                      message: "La Marianna va in campagna",
                      status: "received",
                    },
                    {
                      date: "28/03/2020 10:20:10",
                      message: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                    },
                    {
                      date: "28/03/2020 16:15:22",
                      message: "Ah scusa!",
                      status: "received",
                    },
                  ],
                },
                {
                  name: "Luisa",
                  avatar: "assets/Immagini/avatar_4.jpg",
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      message: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      message: "Si, ma preferirei andare al cinema",
                      status: "received",
                    },
                  ],
                },],
      contattoAttivo: 0, 
    };
  },
  methods: {
    mostraConversazione(index) {
      this.contattoAttivo = index; // 
    },

    inviaMessaggio() {
      if (this.nuovoMessaggio.trim() === "") return; 
      const nuovoMessaggio = {
        date: new Date().toLocaleString(), 
        message: this.nuovoMessaggio,
        status: "sent",
      };
      this.contatti[this.contattoAttivo].messages.push(nuovoMessaggio);
      this.nuovoMessaggio = ""; 
      setTimeout(() => {
        const risposta = {
          date: new Date().toLocaleString(), 
          message: "Ok",
          status: "received",
        };
        this.contatti[this.contattoAttivo].messages.push(risposta);
      }, 1000); 
    },

    
  },
}).mount('#app');


