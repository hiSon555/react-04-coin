import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle.ts";
import { Container } from "./AppStyle.ts";

type Coin = {
    market: string;
    korean_name: string;
};

function App() {
    const [coins, setCoins] = useState<Coin[]>([]);

    useEffect(() => {
        fetch("https://api.upbit.com/v1/market/all")
            .then(response => {
                return response.json();
            })
            .then(json => {
                setCoins(json);
            })

            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Container>
                <h1>업비트 코인 목록 ({coins.length}개)</h1>
                <hr />
                <select>
                    {coins.map((coin, index) => {
                        return (
                            <option key={index} value={coin.market}>
                                {coin.korean_name} ({coin.market})
                            </option>
                        );
                    })}
                </select>
            </Container>
        </>
    );
}

export default App;
