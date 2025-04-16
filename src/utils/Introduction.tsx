import {
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
} from '@mui/material';
import styles from '../styles/demosStyles';

const UseStateDemo = () => {

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        Reactまとめアプリとは？
                        <Divider sx={{ mb: 1 }} />
                    </Typography>
                    
                    <Typography sx={styles.paragraph}>
                        このアプリは、Reactの基本（useState, useEffectなど）を学ぶための学習用ツールです。
                        各コンテンツの説明・使い方・サンプルコードがまとめられており、React初学者の理解をサポートします。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        使い方
                        <Divider sx={{ mb: 1 }} />
                    </Typography>
                    
                    <Typography sx={styles.paragraph}>
                        上部の検索バーでキーワードを検索し、タブを選択すると対象のフックの解説とデモが表示されます。
                        コードと実行結果を確認しながら、Reactの各機能を効率的に学習できます。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default UseStateDemo;
