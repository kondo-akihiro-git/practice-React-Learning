import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Button,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

// コンテンツ①
const CONTENT_NAME = "useEffect"

const UseEffectDemo = () => {
    const enqueueSnackbar  = useSnackBanner();

    // デモ① ////////////////////////////////////////////////////////////////////////////////////////////////////
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        if (count > 0) {
            enqueueSnackbar(`${CONTENT_NAME}が動作しました。`);
        }
    }, [count]);
    // デモ① ////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                    useEffectは、Reactで「画面が表示されたあと」や「値が変わったとき」に何か処理をしたいときに使う関数です。
                    例えばデータの取得、アラート表示、ログ出力などを実行できます。副作用の処理に使われます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'const [count, setCount] = useState(0);',
                            'const handleClick = () => {',
                            '    setCount((prev) => prev + 1);',
                            '};',
                            '',
                            'useEffect(() => {',
                            '    if (count > 0) {',
                            '        バナー表示(), {',
                            '            variant: \'info\',',
                            '        });',
                            '    }',
                            '}, [count]);',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>
                    <Box sx={styles.paper}>
                        {/* // デモ② //////////////////////////////////////////////////////////////////////////// */}
                        <Typography sx={styles.paragraph}>
                            現在のカウント: {count}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleClick}>
                            +1する
                        </Button>
                        {/* // デモ② //////////////////////////////////////////////////////////////////////////// */}
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        このデモでは「+1する」ボタンを押すと、`count`の値が1つ増えます。
                        useEffectはその`count`の変化を監視していて、値が0より大きくなったときだけアラート（バナー）を表示します。
                        つまり、ボタンを押す → `count`が変わる → useEffectが反応する、という流れで動いています。
                        なお、依存配列がないとレンダリング後にuseEffectが実行されます。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UseEffectDemo;
