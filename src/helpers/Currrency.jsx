
const currency_format = ({value}) => {
  return ( 
    Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(value/100)
  
)
}

export default currency_format;


