export type  Country = {
  name: string,
  nativeName: string,
  alpha2Code: string,
  alpha3Code: string,
  area: number,
  population: number
  populationDensity: number,
  capital: string,
  gini: number
  location: {
    latitude: number,
    longitude: number,
  },
  numericCode: string
  subregion: {
    name: string,
    region: {
      name: string
    },
  },
  officialLanguages: LangType[]
  currencies: {
    name: string,
    symbol: string,
  }[],
  regionalBlocs: {
    name: string,
    acronym: string,
    otherAcronyms: {
      name: string
    },
    otherNames: {
      name: string
    },
  },
  flag: {
    emoji: string,
    emojiUnicode: string,
    svgFile: string,
  },
  topLevelDomains: {
    name: string
  },
  callingCodes: {
    name: string
  },
  alternativeSpellings: {
    name: string
  }
}

export type LangType = {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}