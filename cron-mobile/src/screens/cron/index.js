import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
    Wrapper,
    Container,
    Count,
    BunttonsContainer,
    Pause,
    Play,
    RestartButton,
    RestartButtonLabel,
} from './styles';

const Cron = () => {
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
        <Wrapper>
            <Container>
                <Count>{count}</Count>
                <BunttonsContainer>
                    <Pause onPress={() => pause()}>
                        <FontAwesome name="pause" size={36} color="#FAFAFA" />
                    </Pause>
                    <Play onPress={() => start()}>
                        <FontAwesome name="play" size={36} color="#FAFAFA" />
                    </Play>
                </BunttonsContainer>
            </Container>
            <RestartButton onPress={() => stop()}>
                <RestartButtonLabel>RESET</RestartButtonLabel>
            </RestartButton>
        </Wrapper>
    );
};

export default Cron;
