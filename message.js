/* ==========================================================================
   ✏️  EDIT EVERYTHING HERE
   --------------------------------------------------------------------------
   Change only the text BETWEEN the " " quotation marks, then save the file
   and refresh the page in your browser. No dates, no code knowledge needed.

   ➕ To ADD a photo:  drop the image file into this folder, then copy one
      { file: "...", caption: "..." } line below and paste a new one.
   ➕ To add another REASON: copy/paste a line in the REASONS list.
   🎵 Music: put an audio file in this folder named  music.mp3  and it plays
      automatically when the envelope is opened.
   ========================================================================== */

const MESSAGE = {

  /* --- The envelope she taps to open -------------------------------- */
  envelope: {
    to:     "For our dearest",
    name:   "Ate Riza",
    button: "Open 🤍"
  },

  /* --- Line shown right after the envelope opens -------------------- */
  introLine: "Instead of a card — nine small reasons why we love you.",

  /* --- The video (family clip) shown before the letter -------------- */
  video: {
    file:    "received_1783238695596736.mp4",
    headline: "One more reason — press play.",
    caption: "Pinapanood ko 'to kapag na-miss ko kayo. 🎬"
  },

  /* --- The 9 reasons (photo + reason + caption) --------------------- */
  reasons: [
    {
      file:    "32862241_1966957356712567_1888032829791535104_n.jpg",
      reason:  "because even on ordinary days, buotan ngan approachable ka pirme.",
      caption: "You are kind."
    },
    {
      file:    "49047631_2397753163632982_5847967735828447232_n.jpg",
      reason:  "because you show us that you are a good mother to Aazir and a loving wife to kuya Mamart",
      caption: "Love namon tim family, te Riza."
    },
    {
      file:    "651749975_34275293268785557_8087557551810131196_n.jpg",
      reason:  "because you make even the busiest, most rushed days look easy.",
      caption: "Bisan mapaol, smile la gihap."
    },
    {
      file:    "655793635_34419929214321961_8156284135848083883_n.jpg",
      reason:  "because bisan damo an iyo difficulties with your family, you never give up.",
      caption: "Ikaw it amon inspiration."
    },
    {
      file:    "Messenger_creation_010B608F-77FC-42B7-8FB1-13578FD4E94C.jpeg",
      reason:  "because the people around you always end up smiling anyway.",
      caption: "You make us smile and feel happy."
    },
    {
      file:    "32934620_1966956923379277_7423738662036176896_n.jpg",
      reason:  "because diri mo kami ginpapabay-an or ginpapasagdan.",
      caption: "We value your words and advice."
    },
    {
      file:    "36561145_2042007802540855_2521843125052243968_n.jpg",
      reason:  "because you hold on tight — to the little ones, to memories, to what matters.",
      caption: "You show us nga love mo kami."
    },
    {
      file:    "472746781_2649275148604168_7773524231129255300_n.jpg",
      reason:  "because we cannot imagine a life without you nga kaupod namon.",
      caption: "Life is easier with you."
    },
    {
      file:    "491270564_3889767527953470_3212643516255425963_n.jpg",
      reason:  "because love, in your case, is something you can see from a mile away.",
      caption: "We love you so much!"
    }
  ],

  /* --- The full birthday message (unfolded letter) ------------------ */
  letter: {
    heading: "Happy Birthday, Ate Riza 🤍",
    paragraphs: [
      "Ate Riza — instead of a card, I made you this: nine small reasons why we love you",
      "Ikaw an best ate para ha amon in the whole universe. You hold a special place in our hearts and we thank God that He blessed us pinaagi han imo life. Siguro malungkot duro ini nga kinabuhi kun waray ka namon nakilala.",
      "Thank you for always being there for us. Kapag kinahanglan ka namon, you are just one call away. Bisan ikaw nasasaktan or kinukurian, you are always the first to offer us your comfort. We see Lord Jesus when we look at how you live your life",
      "So today, this one is for you. I hope the year ahead gives you back even a fraction of what you give us — good health, slow mornings, answered prayers, and more reasons to laugh.",
      "Mahal ka namin. Enjoy every minute of your day. Sana makaupod mo tim loved ones for today <3"
    ],
    signoff: "Always take care, Ate Riza."
  },

  /* --- The finale at the very bottom -------------------------------- */
  finale: {
    line1: "Thank you for everything!",
    line2: "From Johan 🤍"
  }
};
