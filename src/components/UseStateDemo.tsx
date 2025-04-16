import { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Alert,
    Snackbar,
} from '@mui/material';

const UseStateDemo = () => {
    // バナー表示
    const [showBanner, setShowBanner] = useState(false);
    const handleBanner = () => {
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 3000);
    }

    // 実装部分
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);

        // バナー表示
        handleBanner();
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>

                    {/* タイトル */}
                    <Typography variant="h5" gutterBottom>
                        useStateとは？
                    </Typography>

                    {/* 説明 */}
                    <Typography sx={styles.paragraph}>
                        useStateはReactの状態管理フックで、関数コンポーネント内で状態を保持し、
                        値の変更に応じてUIを再描画させることができます。初期値を指定して、
                        現在の値と更新用関数を配列で受け取ります。Reactのレンダリングロジックと連携し、
                        データの変更を即座に反映させられるため、ボタンのカウントアップや入力フォームの管理など、
                        幅広い用途で使用される基本的なフックです。
                    </Typography>

                    {/* 定義方法 */}
                    <Typography sx={styles.codeBlock}>
                        {[
                            'const [count, setCount] = useState(0);',
                        ].join('\n')}
                    </Typography>

                    {/* 実例 */}
                    <Typography variant="h6" sx={styles.sectionTitle}>
                        実装コード
                    </Typography>
                    <Typography component="pre" sx={styles.codePre}>
                        {[
                            'const [count, setCount] = useState(0);',
                            'setCount(count + 1);',
                        ].join('\n')}
                    </Typography>

                    <Typography variant="h6" sx={styles.sectionTitle}>
                        デモ
                    </Typography>

                    <Snackbar
                        open={showBanner}
                        message="useStateが動作しました。"
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    />

                    <Typography gutterBottom>
                        現在のカウント: <strong>{count}</strong>
                    </Typography>
                    <Button variant="contained" onClick={handleClick}>
                        +1する
                    </Button>

                </CardContent>
            </Card>
        </Box>
    );
};

export default UseStateDemo;

// ---------- スタイルまとめ ----------
const styles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
    },
    card: {
        width: '100%',
        p: 2,
    },
    paragraph: {
        mb: 2,
    },
    codeBlock: {
        fontFamily: 'monospace',
        bgcolor: '#f4f4f4',
        p: 1,
        mb: 2,
    },
    codePre: {
        backgroundColor: '#f4f4f4',
        padding: 2,
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
        mb: 2,
    },
    sectionTitle: {
        mt: 4,
    },
    alert: {
        mb: 2,
    },
};
