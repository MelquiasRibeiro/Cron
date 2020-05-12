import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

import { Container } from './styles';

function Main() {
    const tempo = 1000; // Quantos milésimos valem 1 segundo?
    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);
    const [cron, setCron] = useState();
    const [count, setCount] = useState(`00:00:00`);
    const format = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${
        ss < 10 ? `0${ss}` : ss
    }`;

    function timer() {
        setSs((prevSs) => prevSs + 1);
    }

    // Cria uma variável com o valor tratado HH:MM:SS
    useEffect(() => {
        setCount(format);
        if (ss === 59) {
            // Verifica se deu 59 segundos
            setSs(0); // Volta os segundos para 0
            setMm((prevMm) => prevMm + 1); // Adiciona +1 na variável mm
            if (mm === 59) {
                // Verifica se deu 59 minutos
                setMm(0); // Volta os minutos para 0
                setHh((prevHh) => prevHh + 1); // Adiciona +1 na variável hora
            }
        }
    }, [ss, mm, format]);

    // Inicia o temporizador
    function start() {
        setCron(
            setInterval(() => {
                timer();
            }, tempo)
        );
    }

    // Para o temporizador mas não limpa as variáveis
    function pause() {
        clearInterval(cron);
    }

    // Para o temporizador e limpa as variáveis
    function stop() {
        clearInterval(cron);
        setHh(0);
        setMm(0);
        setSs(0);
        setCount('00:00:00');
    }

    return (
        <Container>
            <section>
                <h1>{count}</h1>
                <div className="buttons">
                    <button
                        className="pause"
                        type="button"
                        onClick={() => pause()}
                    >
                        <FaPause size={48} color="#fff" />
                    </button>
                    <button
                        className="play"
                        type="button"
                        onClick={() => start()}
                    >
                        <FaPlay size={48} color="#fff" />
                    </button>
                </div>
            </section>
            <button className="reset" type="button" onClick={() => stop()}>
                Reset
            </button>
        </Container>
    );
}

export default Main;
