import numeral from 'numeral'

export const prettyNums = (num: number) => `${numeral(num).format("0.0a")}`