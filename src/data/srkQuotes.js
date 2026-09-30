// SRK Quote images and quotes for each month
// Store images at: public/srk-quotes/month1.jpg through month6.jpg

export const SRK_QUOTES = {
  month1: {
    quote: 'Sachi mohabbat zindagi main sirf ek baar hoti hai aur jab hoti hai, toh koi bhagwan ya khuda usse nakamayab nahi hone deta.',
    movie: 'Veer Zara',
    imageUrl: '/srk-quotes/SRK 1.JPG'
  },
  month2: {
    quote: 'Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki koshish ki hai.',
    movie: 'Om Shanti Om',
    imageUrl: '/srk-quotes/SRK 2.jpeg'
  },
  month3: {
    quote: 'Bade Bade deshon mein aaisi choti choti baatein hoti rehti hain...Senorita!!',
    movie: 'Dilwale Dulhania Le Jayenge',
    imageUrl: '/srk-quotes/SRK 3.jpg'
  },
  month4: {
    quote: 'Naina kaash mein tumhe bataa sakta, mein tumhe kitna chahta hoon. I love you, I love you very very much Naina...',
    movie: 'Kal Ho Na Ho',
    imageUrl: '/srk-quotes/SRK 4.jpg'
  },
  month5: {
    quote: 'Teri aankhon ki namkeen mastiyaan, teri hansi ki beparwah gustakhiyaan, teri zulfon ki lehraati angdaaiyaan, nahi bhoolunga main, jab tak hai jaan, jab tak hai jaan.',
    movie: 'Jab Tak Hai Jaan',
    imageUrl: '/srk-quotes/SRK 5.jpg'
  },
  month6: {
    quote: 'Tum meri ho, main tumhe zindagi bhar pyar karoonga. Marte dam tak pyar karoonga aur uske baad bhi.',
    movie: 'Kal Ho Na Ho',
    imageUrl: '/srk-quotes/SRK 6.jpg'
  },
  month7: {
    quote: 'Aaj kal har kisi ki zindagi mein do kahaniyaan hoti hain. Ek to woh jo log jaante hain, aur ek wo jo sirf tum jaante ho.',
    movie: 'Devdas',
    imageUrl: '/srk-quotes/SRK 7.jpg'
  },
  month8: {
    quote: 'Pyar woh nahi joh aankhon se nikaalta hai, pyar woh hai jo dil se nikalta hai.',
    movie: 'Mohabbatein',
    imageUrl: '/srk-quotes/SRK 8.jpg'
  },
  month9: {
    quote: 'Zindagi mein utarte rehta hoon main, par girta nahi hoon kyunki mere paas tumhara haath hai.',
    movie: 'Swades',
    imageUrl: '/srk-quotes/SRK 9.jpg'
  },
  month10: {
    quote: 'Tum mere liye sabse khaas ho. Har lamhe, har pal, har din.',
    movie: 'Darr',
    imageUrl: '/srk-quotes/SRK 10.jpg'
  },
  month11: {
    quote: 'Love is not about finding someone you can live with, it\'s about finding someone you can\'t imagine living without.',
    movie: 'My Name is Khan',
    imageUrl: '/srk-quotes/SRK 11.jpg'
  },
  month12: {
    quote: 'Mera naam Khan hai, aur main terrorist nahi hoon. Lekin maine ek aur cheez payi - tumhara pyar.',
    movie: 'My Name is Khan',
    imageUrl: '/srk-quotes/SRK 12.jpg'
  },
  month13: {
    quote: 'Ek saal ho gaya, lekin har din tum mere liye nayi baat laayi ho. Main isi liye tumhe pyar karta hoon, har din, har pal.',
    movie: 'Veer Zara',
    imageUrl: '/srk-quotes/SRK 13.jpg'
  }
}

export function getSRKQuote(monthId) {
  return SRK_QUOTES[monthId] || null
}
