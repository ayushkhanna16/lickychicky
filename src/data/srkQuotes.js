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
  }
}

export function getSRKQuote(monthId) {
  return SRK_QUOTES[monthId] || null
}
