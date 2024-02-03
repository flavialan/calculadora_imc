import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Calculadora IMC</h1>
            <i className=" bi bi-calculator-fill" style={{ fontSize: 48 }}></i>
        </header>
    )
}

export default Cabecalho