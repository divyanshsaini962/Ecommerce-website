interface Props{
    amount:number,
    className?:string;
}

const Price = ({amount,className}:Props) => {
    const priceFormate = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'INR',
        maximumFractionDigits:2,
    })
  return (
      <span className={`${className}`}>{priceFormate}</span>
  )
}

export default Price