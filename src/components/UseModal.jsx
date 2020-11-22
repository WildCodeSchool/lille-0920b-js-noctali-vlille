import { useState } from "react";

const UseModal = () => {
  const [avis, setAvis] = useState(false);

  function toggle() {
    setAvis(!avis);
  }

  return {
    avis,
    toggle,
  };
};

export default UseModal;
