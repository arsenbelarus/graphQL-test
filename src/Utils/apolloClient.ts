import {ApolloClient, gql, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache()
});

export const COUNTRIES = gql` {
  Country {
    name
    nativeName
    alpha2Code
    alpha3Code
    area
    population
    populationDensity
    capital
    gini
    location {
      latitude
      longitude
    }
    numericCode
    subregion {
      name
      region {
        name
      }
    }
    officialLanguages {
      iso639_1
      iso639_2
      name
      nativeName
    }
    currencies {
      name
      symbol
    }
    regionalBlocs {
      name
      acronym
      otherAcronyms {
        name
      }
      otherNames {
        name
      }
    }
    flag {
      emoji
      emojiUnicode
      svgFile
    }
    topLevelDomains {
      name
    }
    callingCodes {
      name
    }
    alternativeSpellings {
      name
    }
  }
}`
