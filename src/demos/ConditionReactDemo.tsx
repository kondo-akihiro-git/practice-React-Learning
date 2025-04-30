import { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "条件分岐（if文・三項演算子）";

const ConditionReactDemo = () => {
    const enqueueSnackbar = useSnackBanner();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev);
        enqueueSnackbar("ログイン状態が切り替わりました。");
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        Reactでは、JSXの中で条件によって表示を変えることができます。
                        その代表的な方法が<strong>if文</strong>と<strong>三項演算子</strong>です。
                        状況に応じてコンポーネントを出し分ける際に役立ちます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// if文による条件分岐',
                            '<Box>',
                            '{(() => {',
                            '  if (isLoggedIn) {',
                            '    return <p>ログイン中</p>;',
                            '  } else {',
                            '    return <p>ログアウト中</p>;',
                            '  }',
                            '})()}',
                            '</Box>',
                            '',
                            '// 三項演算子による条件分岐',
                            '<p>{isLoggedIn ? "ログイン中" : "ログアウト中"}</p>',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ①：React内でのif文（JSX外で早期return風）
                    </Typography>
                    <Box sx={styles.paper}>
                        {(() => {
                            if (isLoggedIn) {
                                return <Typography sx={styles.paragraph}>（JSX if文）ログインしています</Typography>;
                            } else {
                                return <Typography sx={styles.paragraph}>（JSX if文）ログアウト中です</Typography>;
                            }
                        })()}
                        <Button variant="contained" sx={styles.button} onClick={toggleLogin}>
                            ログイン状態を切り替え
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        デモ④：React内での三項演算子
                    </Typography>
                    <Box sx={styles.paper}>
                        <Typography sx={styles.paragraph}>
                            {isLoggedIn ? "（JSX 三項演算子）ログインしています" : "（JSX 三項演算子）ログアウト中です"}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={toggleLogin}>
                            ログイン状態を切り替え
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        JSX内で条件分岐を行う際、if文と三項演算子の使い分けが重要です。<br /><br />
                        - if文は処理が多い場合や、可読性を重視する時に使用。<br />
                        - 三項演算子は簡潔に条件分岐を行いたいときに便利です。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ConditionReactDemo;
