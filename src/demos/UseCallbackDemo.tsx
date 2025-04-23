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

    // デモ①（useCallbackなし）//////////////////////////////////////////////////////////////////////////////
    const [count1, setCount1] = useState(0);
    const handleClick1 = () => {
        setCount1(prev => prev + 1);
        enqueueSnackbar(`デモ①: useCallbackなしで関数が定義されました`);
    };
    // デモ① /////////////////////////////////////////////////////////////////////////////////////////////////

    // デモ②（useCallbackあり + 依存配列あり）/////////////////////////////////////////////////////////////
    const [count2, setCount2] = useState(0);
    const handleClick2 = useCallback(() => {
        setCount2(prev => prev + 1);
        enqueueSnackbar(`デモ②: useCallback（依存配列あり）が実行されました`);
    }, []);
    // デモ② /////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        `useCallback`は、関数をメモ化するためのReactのフックです。<br />
                        コンポーネントが再レンダリングされても、<strong>依存配列が変わらない限り同じ関数を再利用</strong>できます。<br />
                        これは主に子コンポーネントへのpropsとして関数を渡すときに有効で、<br />
                        無駄な再レンダリングや関数の再生成を防げます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// useCallbackを使わない場合',
                            'const handleClick1 = () => {',
                            '    setCount(prev => prev + 1);',
                            '    enqueueSnackbar("useCallbackなしで関数が定義されました");',
                            '};',
                            '',
                            '// useCallbackを使う場合',
                            'const handleClick2 = useCallback(() => {',
                            '    setCount(prev => prev + 1);',
                            '    enqueueSnackbar("useCallback（依存配列あり）が実行されました");',
                            '}, []);',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>デモ</Typography>
                    <Box sx={styles.paper}>
                        {/* デモ①（useCallbackなし） */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ①: useCallbackを使っていない場合</strong>
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleClick1}>
                            +1する
                        </Button>
                        <Typography sx={{ ...styles.paragraph, mt: 2 }}>
                            カウント: {count1}
                            <br />
                            毎回新しい関数が生成されます。
                        </Typography>

                        <Box sx={{ my: 4, border: '1px solid rgba(0, 0, 0, 0.1)' }} />

                        {/* デモ②（useCallbackあり） */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ②: useCallbackを使って関数をメモ化</strong>
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleClick2}>
                            +1する
                        </Button>
                        <Typography sx={{ ...styles.paragraph, mt: 2 }}>
                            カウント: {count2}
                            <br />
                            初回レンダリング以降、関数は再生成されません。
                        </Typography>
                    </Box>

                    <Typography sx={styles.subTitle}>説明</Typography>
                    <Typography sx={styles.paragraph}>
                        デモ①では、ボタンを押すたびに <code>handleClick1</code> 関数が再生成されます。<br />
                        この関数は毎回新しく作られるため、パフォーマンスへの影響がある場合や子コンポーネントに渡すときは注意が必要です。<br />
                        <br />
                        一方、デモ②では <code>useCallback</code> を使い、空の依存配列（<code>[]</code>）を指定することで、<br />
                        関数は初回マウント時に一度だけ生成され、それ以降は同じ関数が使われ続けます。<br />
                        Reactでは、子コンポーネントへの props に関数を渡すときに <code>useCallback</code> を活用すると、<br />
                        子コンポーネントの無駄な再レンダリングを防ぐことができ、パフォーマンス最適化に繋がります。<br />
                        <br />
                        なお、このデモでも<strong>バナー表示に関してはデモ①と同様に毎回行われる</strong>ため、違いは関数の生成回数やメモリ効率といった内部的な面にあります。<br />
                        そのため、デモ①のように直接ボタンで呼び出す場合でも、<strong>バナーの表示タイミングに関してはデモ②と特に差はありません。</strong><br />
                        関数が再生成されても、処理結果としての表示に違いはありません。
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
};

export default UseCallbackDemo;
