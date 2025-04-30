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

const ConditionTypescriptDemo = () => {
    const enqueueSnackbar = useSnackBanner();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState<"admin" | "user">("user");

    // ボタンを押したときに状態を切り替える
    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev);
        enqueueSnackbar("ログイン状態が切り替わりました。");
    };

    const toggleRole = () => {
        setUserRole(prev => (prev === "admin" ? "user" : "admin"));
        enqueueSnackbar("ユーザー権限が切り替わりました。");
    };

    // TypeScript上でのif文による出力文字列
    let loginStatusText = "";
    if (isLoggedIn) {
        loginStatusText = "（TS if文）ログイン中です";
    } else {
        loginStatusText = "（TS if文）ログアウト中です";
    }

    // TypeScript上での三項演算子
    const roleText = userRole === "admin" ? "（TS 三項演算子）管理者" : "（TS 三項演算子）一般ユーザー";

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        ReactとTypeScriptを使用する際、条件分岐の方法としてif文と三項演算子がよく使用されます。<br />
                        これによりUIを動的に切り替えることが可能になります。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// TypeScript上でのif文による条件分岐',
                            'let loginStatusText = "";',
                            'if (isLoggedIn) {',
                            '  loginStatusText = "ログイン中です";',
                            '} else {',
                            '  loginStatusText = "ログアウト中";',
                            '}',
                            '',
                            '// TypeScript上での三項演算子による条件分岐',
                            'const roleText = userRole === "admin" ? "管理者" : "一般ユーザー";',
                            '',
                            '// JSX内で表示',
                            '<Typography>{loginStatusText}</Typography>',
                            '<Typography>{roleText}</Typography>',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ①：TypeScript上でのif文
                    </Typography>
                    <Box sx={styles.paper}>
                        <Typography sx={styles.paragraph}>
                            {loginStatusText}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={toggleLogin}>
                            ログイン状態を切り替え
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        デモ②：TypeScript上での三項演算子
                    </Typography>
                    <Box sx={styles.paper}>
                        <Typography sx={styles.paragraph}>
                            {roleText}
                        </Typography>
                        <Button variant="contained" sx={styles.button} onClick={toggleRole}>
                            ユーザー権限を切り替え
                        </Button>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        TypeScript上での条件分岐では、表示内容を事前に変数に格納しておき、JSXで使用する形になります。<br /><br />
                        - if文は処理が多くなりがちな場合に向いています。<br />
                        - 三項演算子は簡潔でシンプルな場合に便利です。<br />
                        <br />
                        ボタンを押すことで、条件が切り替わり、表示が変わる流れを確認できます。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ConditionTypescriptDemo;
