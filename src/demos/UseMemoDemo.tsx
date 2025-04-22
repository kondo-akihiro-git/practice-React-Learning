import { useState, useMemo } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Button,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "useMemo";

const UseMemoDemo = () => {
    const enqueueSnackbar = useSnackBanner();

    // デモ①（useMemoなし）///////////////////////////////////////////////////////////////////////////////////////////
    const [input1, setInput1] = useState(0);

    const handleInput1Click = () => {
        setInput1(input1 + 1);
    };

    const heavyComputation1 = (num: number): number => {
        let total = 0;
        const iterations = 100000000; // 1億回のループ
        for (let i = 0; i < iterations; i++) {
            total += 1; // プラス1を加算
        }
        enqueueSnackbar(`デモ① : デモ①の計算がされました`);
        return total + num;
    };

    const computedValueWithoutMemo = heavyComputation1(input1);
    // デモ① ////////////////////////////////////////////////////////////////////////////////////////////////////

    // デモ②（useMemoあり）/////////////////////////////////////////////////////////////////////////////////////////
    const [input2, setInput2] = useState(0);

    const handleInput2Click = () => {
        setInput2(input2 + 1);
    };

    const heavyComputation2 = (num: number): number => {
        let total = 0;
        const iterations = 100000000; // 1億回のループ
        for (let i = 0; i < iterations; i++) {
            total += 1; // プラス1を加算
        }
        enqueueSnackbar(`デモ② : UseMemoで監視している計算がされました`);
        return total + num;
    };

    const computedValueWithMemo = useMemo(() => heavyComputation2(input2), [input2]);
    // デモ② ////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        `useMemo`は、**重たい計算の再実行を避けたいとき**に使います。<br />
                        Reactではコンポーネントが再レンダリングされると、すべての関数や変数が再実行されます。<br />
                        しかし、毎回重たい処理を実行していたらパフォーマンスが悪くなります。<br />
                        そこで、`useMemo`を使うと、**特定の値（依存配列に指定）**が変わらない限り、前回の計算結果を使ってくれます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// デモ①（useMemoなし）',
                            'const [input1, setInput1] = useState(0);',
                            'const handleInput1Click = () => {',
                            '    setInput1((prev) => prev + 1);',
                            '};',
                            'const heavyComputation1 = (num: number): number => {',
                            '    let total = 0;',
                            '    const iterations = 100000000; // 1億回のループ',
                            '    for (let i = 0; i < iterations; i++) {',
                            '        total += 1;', // プラス1を加算
                            '    }',
                            '    enqueueSnackbar(`デモ① : デモ①の計算がされました`);',
                            '    return total + num;',
                            '};',
                            'const computedValueWithoutMemo = heavyComputation1(input1);',
                        ].join('\n')}
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// デモ②（useMemoあり）',
                            'const [input2, setInput2] = useState(0);',
                            'const handleInput2Click = () => {',
                            '    setInput2((prev) => prev + 1);',
                            '};',
                            'const heavyComputation2 = (num: number): number => {',
                            '    let total = 0;',
                            '    const iterations = 100000000; // 1億回のループ',
                            '    for (let i = 0; i < iterations; i++) {',
                            '        total += 1;', // プラス1を加算
                            '    }',
                            '    enqueueSnackbar(`デモ② : UseMemoで監視している計算がされました`);',
                            '    return total + num;',
                            '};',
                            'const computedValueWithMemo = useMemo(() => heavyComputation2(input2), [input2]);'
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>
                    <Box sx={styles.paper}>
                        {/* // デモ①（useMemoなし）//////////////////////////////////////////////////////////////////////////// */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ①: useMemoを使っていない場合</strong><br/>
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleInput1Click}>
                            +1 する
                        </Button>
                        <Typography sx={{ ...styles.paragraph, mt: 2 }}>
                            計算結果（毎回再計算）: {computedValueWithoutMemo}
                            <br/>
                            以下のタイミングで計算
                            <br/>
                            ・レンダリング時
                            <br/>
                            ・「+1する」ボタン押下時
                            <br/>
                            ・デモ②の「+1する」ボタン押下時
                        </Typography>
                        {/* // デモ① ////////////////////////////////////////////////////////////////////////////////////// */}

                        <Box sx={{ my: 4, border: '1px solid rgba(0, 0, 0, 0.1)' }} />

                        {/* // デモ②（useMemoあり）//////////////////////////////////////////////////////////////////////////// */}
                        <Typography sx={styles.paragraph}>
                            <strong>デモ②: useMemoを使っている場合</strong>
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleInput2Click}>
                            +1 する
                        </Button>
                        <Typography sx={{ ...styles.paragraph, mt: 2 }}>
                            計算結果（useMemoでメモ化）: {computedValueWithMemo}
                            <br/>
                            以下のタイミングで計算
                            <br/>
                            ・レンダリング時
                            <br/>
                            ・「+1する」ボタン押下時
                        </Typography>
                        {/* // デモ② ////////////////////////////////////////////////////////////////////////////////////// */}
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        デモ①では、「+1する」を押下するたびに毎回 `heavyComputation1` が実行されており、実行のたびに スナックバー による通知が出ます。<br />
                        この処理は、コンポーネントのレンダリング関数内に `heavyComputation1(input1)` を直接書いており、再レンダリングされるたびに実行されます。<br />
                        <br />
                        デモ②では、`useMemo`を使って 依存配列 に`[input2]` を指定することで、<strong>input2が変わったときだけ</strong> `heavyComputation2` が実行され、<strong>それ以外の再レンダリングでは前回の結果を使い回します</strong>。<br />
                        これにより、不要な計算と副作用を防ぐことができます。<br />
                        <br />
                        Reactでは、<strong>useStateで管理しているどれか1つの状態でも変更されると、コンポーネント全体が再レンダリングされます</strong>。<br />
                        そのため、たとえばinput2が変化してデモ②を実行した場合でも、コンポーネント全体が再描画され、その際にデモ①の `heavyComputation1(input1)` も再実行されてしまいます。<br />
                        このように、<strong>useMemoを使っていない処理は、意図しない場面でも毎回走ってしまう</strong>ため、重たい処理は `useMemo` などで適切にメモ化することが重要です。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UseMemoDemo;
