import { useState} from "react"
import styles from './Formulario.module.css'


const Formulario = () => {
    const [dataForm, setDataForm] = useState({
        altura: 0,
        peso: 0,
    })

    const [imc, setImc] = useState(0);

    

    const handleChange = (e) => {
        setDataForm((dataForm) => ({
            ...dataForm,
            [e.target.name]: parseFloat(e.target.value),
        }))
    }

    const validaValores = () => {
        return dataForm.altura > 0 && dataForm.peso > 0
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        )
    }


    const handleClick = () => {
        if(validaValores()){
            let imcTemp = dataForm.peso / (dataForm.altura * dataForm.altura)
            setImc(imcTemp)
        }else{
            handleReset()
            return(
                alert('Insira valores válidos a serem calculados.')
            )
        }
    }

    const renderizaResultado = () => {
        if (imc > 0 && imc < 18.5){
            return(
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Baixo peso</b> para adultos da sua estatura. </p>
                </>
            )
                
        }else if (imc>= 18.5 && imc<= 24.9){
            return(
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Peso Normal</b> para adultos da sua estatura. </p>

                </>
            )
        }else if (imc>= 25.0 && imc<= 29.9){
            return(
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Sobrepeso</b> para adultos da sua estatura. </p>

                </>
            )
        }else if (imc>= 30.0 && imc<= 34.9) {
            return(
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Obesidade Grau I</b> para adultos da sua estatura. </p>
                </>
            )
        }else if (imc>= 35.9 && imc<= 39.9) {
            return(
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Obesidade Grau II</b> para adultos da sua estatura. </p>
                </>
            )
        }else if (imc >= 40.0){
            return (
                <>
                    <p className={styles.resultadoValor}>Seu IMC é: <b>{imc.toFixed(1)}</b></p>
                    <p className={styles.resultadoTexto}>Isso indica que seu peso está na categoria de <b>Obesidade Grau III ou Mórbido</b> para adultos da sua estatura. </p>
                </>
            )
        }
    }


    
    return(
        <>
            <div className={styles.body}>
                <form className={styles.formulario}>
                    <input required className={styles.formulario_altura} type="number" name="altura" placeholder='Insira sua altura (m)' onChange={handleChange}/>
                    <input required className={styles.formulario_peso} type="number" name="peso" placeholder='Insira seu peso (kg)' onBlur={handleChange}/>
                    <button className={styles.formulario_botao} type="button" onClick={handleClick}>Calcular IMC</button>
                </form>
                <div className={styles.resultado}>
                    {renderizaResultado()}
                </div>
            </div>
        </>
    )
}

export default Formulario