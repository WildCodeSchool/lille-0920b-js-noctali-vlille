import { useState } from "react";

const UseModal = () => {
  const [avis, setAvis] = useState(false);
  //use state à false pour ne pas voir la boite modal ouverte dès le début
  function toggle() {
    setAvis(!avis);
    //function ouvrir et fermer la modal
  }

  return {
    avis,
    toggle,
  };
  //si avis true return contenu si false return rien
};

export default UseModal;
