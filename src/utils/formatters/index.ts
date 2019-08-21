export const thousondsToK = (value: number) => {
  
  const absValue: number = Math.abs(value);
  const absShortValue: any = absValue/1000;

  return(absValue > 999 
    ? Math.sign(value) * absShortValue.toFixed(1) + 'k' 
    : Math.sign(value) * absValue
  )
}