import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

export const GridItem = ({ item }) => {
    return (
        <div className={styles.parameters_item}>
            <div className={styles.item_component} style={{ background: item.color }}>
                <div className={styles.icon}>
                    <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
                </div>
                <div className={styles.title}>{item.title}</div>
                {item.yourImc &&
                    <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
                }
                <div className={styles.info}>
                    <p>
                        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}