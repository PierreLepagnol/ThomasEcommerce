import React from "react";
import './App.css';
import './stylemobile.css';
import ProductView from './ProductView';
import TitleView from './TitleView';
import PaymentView from './PaymentView';


import Modal from "./Modal";
import useModal from './useModal'

export const ModalContext=React.createContext({})


function App() {
  const {isShowing, toggle} = useModal();
  const [isLoaded,setIsLoaded]=React.useState(false)
  const [error,setError]=React.useState(false)
  const [product,setProduct]=React.useState({})

  React.useEffect(() => {
    fetch("http://localhost:3000/menu")
    .then(res => res.json())
      .then((result) => {
          console.log(result);
          setIsLoaded(true);
          setProduct(result[0]);

        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [product])
  
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ModalContext.Provider value={{isShowing, toggle}}>
      <div className="App">
          <TitleView />
          <ProductView product={product}/>
          <Modal isShowing={isShowing} hide={toggle}><PaymentView product={product}/></Modal>
      </div>
      </ModalContext.Provider>
    );  
}

  
}
export default App;
