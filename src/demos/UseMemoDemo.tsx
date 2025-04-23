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

    // デモ①（useCallbackなし）///////////////////////////////////////////////////////////////////////////////
    const [input1, setInput1] = useState(0);

    const handleInput1Click = () => {
        enqueueSnackbar("デモ① : 通常関数でボタンがクリックされました");
        setInput1((prev) => prev + 1);
    };
    // デモ① //////////////////////////////////////////////////////////////////////////////////////////////////

    // デモ②（useCallbackあり + 依存配列）/////////////////////////////////////////////////////////////////////
    const [input2, setInput2] = useState(0);

    const handleInput2Click = useCallback(() => {
        enqueueSnackbar("デモ② : useCallbackでメモ化された関数が動作しました");
        setInput2((prev) => prev + 1);
    }, []);
    // デモ② //////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        `useCallback`は、関数をメモ化（キャッシュ）して、再レンダリング時にも同じ関数インスタンスを保ちたいときに使います。<br />
                        特に、子コンポーネントに関数を渡すときに、関数が毎回再生成されるのを防ぎたい場面で便利です。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'const [value, setValue] = useState(0);',
                            'const handleClick = useCallback(() => {',
                            '    setValue((prev) => prev + 1);',
                            '}, []);'
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box sx={styles.paper}>
                        {/* デモ①（useCallbackなし） */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ①: useCallbackを使っていない関数</strong>
                        </Typography>
                        <Typography sx={styles.paragraph}>
                            現在のカウント: {input1}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleInput1Click}>
                            +1する（useCallbackなし）
                        </Button>

                        <Box sx={{ my: 4, border: '1px solid rgba(0, 0, 0, 0.1)' }} />

                        {/* デモ②（useCallbackあり） */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ②: useCallbackを使ってメモ化した関数</strong>
                        </Typography>
                        <Typography sx={styles.paragraph}>
                            現在のカウント: {input2}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleInput2Click}>
                            +1する（useCallbackあり）
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        デモ①では、ボタンがクリックされるたびに関数が再生成されます。<br />
                        これはReactが再レンダリングのたびに関数定義も評価するためで、<strong>子コンポーネントに関数を渡している場合などでパフォーマンスに影響</strong>する可能性があります。<br /><br />

                        一方、デモ②では、`useCallback`を使って関数をメモ化しています。<br />
                        このとき依存配列が `[]` のため、<strong>初回レンダリング時に一度だけ関数が作られ、その後は同じ関数が再利用されます。</strong><br />
                        これにより、<strong>不必要な関数の再生成や、子コンポーネントの再レンダリングが抑えられる</strong>というメリットがあります。<br /><br />

                        ※このデモでは、`enqueueSnackbar`の表示で関数の発火タイミングを確認できるようになっています。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UseCallbackDemo;
