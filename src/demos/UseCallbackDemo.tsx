import { useState, useCallback } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "useCallback";

const UseCallbackDemo = () => {
    const enqueueSnackbar = useSnackBanner();

    // デモ（useCallbackあり）////////////////////////////////////////////////////////////////////////////////////
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
        enqueueSnackbar(`${CONTENT_NAME}が動作しました。`);
    }, []);
    // デモ ////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        `useCallback`は、関数をメモ化するためのReactのフックです。<br />
                        コンポーネントが再レンダリングされても、<strong>依存配列が変わらない限り同じ関数を使い続ける</strong>ため、
                        無駄な再定義や子コンポーネントの再レンダリングを防ぐことができます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'const [count, setCount] = useState(0);',
                            '',
                            'const handleClick = useCallback(() => {',
                            '    setCount((prev) => prev + 1);',
                            '    バナー表示();',
                            '}, []);',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box sx={styles.paper}>
                        <Typography sx={styles.paragraph}>
                            現在のカウント: {count}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleClick}>
                            +1する
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        このデモでは、`useCallback`を使ってボタンのクリック関数をメモ化しています。<br />
                        依存配列が空なので、この関数は初回レンダリング時に一度だけ作られ、以降は同じ関数を使い続けます。<br />
                        こうすることで、不要な関数の再生成や、子コンポーネントへの不要な再レンダリングを防ぐことができます。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UseCallbackDemo;
