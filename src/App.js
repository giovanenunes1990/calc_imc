import styles from './App.module.css';
import { useState } from 'react';
import { levels, calculateImc } from './helpers/imc';
import { GridItem } from './components/GridItem';

import Powered from './assets/powered.png';
import leftImage from './assets/left-side.jpg';
import rightImage from './assets/right-side.jpg';
import bottomImage from './assets/bottom-side.jpg';
import topImage from './assets/top-side.jpg';

function App() {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const handlerCalculeButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos.");
    }
  }
  const clear = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <div className={styles.propagating}>
        <picture>
          <source srcset={topImage} media="(max-width: 920px)" />
          <img src={leftImage} alt="Gym" />
        </picture>
      </div>

      <div className={styles.main_content}>
        <header>
          <img src={Powered} alt="Warriors" />
        </header>
        <div className={styles.main_body}>
          {!toShow &&
            <div className={styles.parameters}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.parameterBig}>
              <GridItem final="component" item={toShow} />
            </div>

          }
          {toShow &&
            <div className={styles.back}><p onClick={clear}>Voltar</p></div>
          }

        </div>
        <div className={styles.calc}>
          <h2>Calcule seu IMC.</h2>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. ex: 170 (cm)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            min="20" max="200"
          />
          <input
            type="number"
            placeholder="Digite seu peso. ex: 75.3 (kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
            min="20" max="200"
          />

          <button onClick={handlerCalculeButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
      </div>

      <div className={styles.propagating}>
        <picture>
          <source srcset={bottomImage} media="(max-width: 920px)" />
          <img src={rightImage} alt="Wood" />
        </picture>
      </div>
    </div>
  );
}

export default App;
