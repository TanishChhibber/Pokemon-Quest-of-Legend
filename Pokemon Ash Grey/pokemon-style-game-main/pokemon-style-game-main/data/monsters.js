const monsters = {
  Emby: {
    position: {
      x: 260,
      y: 220
    },
    image: {
      src: 'https://img.pokemondb.net/sprites/black-white/anim/back-shiny/typhlosion.gif'
    },
    frames: {
      max: 1,
      hold: 30
    },
    scale: 2.8,
    animate: true,
    name: 'Typhlosion', 
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Sceptile: {
    position: {
      x: 760,
      y: 160
    },
    image: {
      src: 'https://img.pokemondb.net/sprites/black-white/anim/shiny/sceptile.gif'
    },
    frames: {
      max: 1,
      hold: 30
    },
    scale: 2.8,
    animate: true,
    isEnemy: true,
    name: 'Sceptile',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
