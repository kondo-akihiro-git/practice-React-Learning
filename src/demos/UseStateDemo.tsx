import { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Paper,
} from '@mui/material';
import Banner from '../components/Banner';
import styles from '../styles/demosStyles';

const UseStateDemo = () => {
    // バナー管理
    const [showBanner, setShowBanner] = useState(false);
    const handleCloseBanner = () => setShowBanner(false);

    // 実装
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);

        setShowBanner(true);
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.title}>
                        useStateとは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        useStateは、Reactで「今の状態」を管理するための仕組みです。
                        たとえば、「カウントが何回押されたか」や「ボタンが表示されているか」などを
                        記憶しておくことができます。この機能を使うと、変化に応じて画面の表示を変えることが
                        できるようになります。
                    </Typography>

                    <Typography sx={styles.sectionTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'const [count, setCount] = useState(0);',
                            'setCount(count + 1);',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.sectionTitle}>
                        デモ
                    </Typography>

                    <Paper sx={styles.paper}>
                        <Typography sx={styles.paragraph}>
                            現在のカウント: {count}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={handleClick}>
                            +1する
                        </Button>
                    </Paper>

                    <Typography sx={styles.sectionTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        上のボタンをクリックすると、数字が1ずつ増えていきます。これはuseStateを使って、
                        「現在の数」を保存しているからです。ボタンを押すたびにその数が更新され、
                        Reactが自動的に新しい数を画面に表示してくれます。
                        こうして画面と状態が連動して動くのが、Reactの大きな特徴です。
                    </Typography>
                </CardContent>
            </Card>

            <Banner
                open={showBanner}
                message="useStateが動作しました。"
                onClose={handleCloseBanner}
            />
        </Box>
    );
};

export default UseStateDemo;
