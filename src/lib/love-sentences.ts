const loveSentences = [
  "You had me at 'let's order Indian food'.",
  "I love you more than chocolate...",
  "You're my favorite notification.",
  "You must be a magician, because every time I look at you, everyone else disappears.",
  "You're the nutella to my bread.",
  "If kisses were snowflakes, I'd send you a blizzard.",
  "You're like Wi-Fi — I feel lost without you.",
  "I'm much more me when I'm with you.",
  "You make my heart do a little cha-cha.",
  "You're proof that love is the best kind of magic.",
  "You had me at your first awkward smile.",
  "You're my favorite daydream.",
  "If loving you is wrong, I don't want to be right.",
  "You're the plot twist I didn't know I needed.",
  "I love you more than Netflix on a rainy day.",
  "You're my human diary and my happy place.",
  "You're my person, in every universe.",
  "I still get butterflies — and sometimes they tap dance.",
  "You're my 'can't wait to tell you' person.",
  "You're the sweetest potato of them all",
  "You're my favorite hello and hardest goodbye.",
  "You make me believe in happy endings.",
  "You're the song stuck in my head… forever.",
  "You make my heart race faster than free dessert.",
  "You're my partner in crime and in cuddles.",
  "I'd pause my coding for you — and that's love.",
  "You're the sparkle in my mundane Tuesday.",
  "With you, even doing nothing feels like everything.",
  "You're the best chapter in my story.",
  "I love you more than I hate early mornings."
];

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function getLove(): string {
    const sentence = loveSentences[getRandomInt(0, loveSentences.length)]
    console.log(sentence)
    return sentence
}