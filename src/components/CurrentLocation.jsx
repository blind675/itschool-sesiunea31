function CurrentLocation(props) {
  // Primim locatia curenta de la parinte si o afisam pe ecran.
  const {currentLocation} = props;

  return (
    <p>
      Orasul curent este <strong>{currentLocation}</strong>
    </p>
  )
}

export default CurrentLocation;
