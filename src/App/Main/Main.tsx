import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import style from './Main.module.css'
import {COUNTRIES} from "../../Utils/apolloClient";
import {Country} from "../../Utils/types";
import {CircularProgress, Snackbar} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import {prettyNums} from "../../Utils/utils";
import {NavLink, Redirect} from 'react-router-dom';

type MainType = {
  isLoggedFromStorage: string | null
}

export const Main = (props: MainType) => {

  const {loading, error, data} = useQuery(COUNTRIES);
  const [open, setOpen] = useState(true)
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  if (loading) return <CircularProgress className={style.progress}/>
  if (error) {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Something went wrong</Alert>
      </Snackbar>
    )
  }

  if (!props.isLoggedFromStorage) {
    return <Redirect to={'/login'}/>
  }
  return data.Country.map((country: Country) => (
    <div key={country.name} className={style.countriesContainer}>
      <NavLink to={`/${country.alpha3Code}`} className={style.countryContainer}>
        <div className={style.flag}>
          <img src={country.flag.svgFile} alt={country.name}/>
        </div>
        <div className={style.informationContainer}>
          <div className={style.countryInformationHeader}>
            <h2>{country.name}</h2>
          </div>
          <div className={style.countryInformationList}>
            <ul>
              <li>Capital: {country.capital}</li>
              <li>Population: {prettyNums(country.population)} <i>people</i></li>
              <li>Currency: {country.currencies[0].name}</li>
              <li>Area: {prettyNums(country.area)} <i>sq. km.</i></li>
              <li>Official languages: {country.officialLanguages.map(lang =>
                <i key={lang.iso639_2}> {lang.name} </i>)}
              </li>
            </ul>
          </div>
        </div>
      </NavLink>
    </div>))
}