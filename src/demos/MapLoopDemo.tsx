import { Card, CardContent, Typography, Box, ListItem, ListItemText } from '@mui/material';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "map関数によるループ";

const MapLoopDemo = () => {
    // 配列のサンプル
    const fruits = ["りんご", "バナナ", "ぶどう"];

    // 辞書型のサンプル
    const user = {
        name: "田中太郎",
        age: 30,
        email: "tanaka@example.com"
    };

    // タプル型のサンプル
    const point: [number, number] = [10, 20];

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        map関数は、配列やその他のデータ構造から要素を1つずつ取り出して、何か処理を行うために使います。
                        例えばリストの表示や、要素を変換するような場面で活躍します。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// 配列のサンプル',
                            'const fruits = ["りんご", "バナナ", "ぶどう"];',
                            '',
                            '// 辞書（オブジェクト）のサンプル',
                            'const user = {',
                            '  name: "田中太郎",',
                            '  age: 30,',
                            '  email: "tanaka@example.com",',
                            '};',
                            '',
                            '// タプルのサンプル',
                            'const point: [number, number] = [10, 20];',
                            '',
                            '',
                            '// 配列をループする',
                            'fruits.map((fruit) => (',
                            '  <div>{fruit}</div>',
                            '));',
                            '',
                            '// 辞書（オブジェクト）をループする',
                            'Object.entries(user).map(([key, value]) => (',
                            '  <div>{key}: {value}</div>',
                            '));',
                            '',
                            '// タプルをループする',
                            'point.map((value, index) => (',
                            '  <div>座標{index}: {value}</div>',
                            '));',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box sx={styles.paper}>
                        {/* 配列ループデモ */}
                        <Typography sx={styles.paragraph}>
                            配列のループ（フルーツリスト）:
                        </Typography>
                        {fruits.map((fruit, index) => (
                            <Typography key={index} sx={styles.paragraph}>
                                ・{fruit}
                            </Typography>
                        ))}
                        <Box sx={{ my: 4, border: '1px solid rgba(0, 0, 0, 0.1)' }} />

                        {/* 辞書ループデモ */}
                        <Typography sx={styles.paragraph} mt={2}>
                            辞書のループ（ユーザー情報）:
                        </Typography>
                        {Object.entries(user).map(([key, value]) => (
                            <Typography key={key} sx={styles.paragraph}>
                                ・{key}: {value}
                            </Typography>
                        ))}
                        <Box sx={{ my: 4, border: '1px solid rgba(0, 0, 0, 0.1)' }} />

                        {/* タプルループデモ */}
                        <Typography sx={styles.paragraph} mt={2}>
                            タプルのループ（座標）:
                        </Typography>
                        {point.map((value, index) => (
                            <Typography key={index} sx={styles.paragraph}>
                                ・座標 {index}: {value}
                            </Typography>
                        ))}
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        このデモでは、<strong>map</strong>関数を使って、配列・辞書・タプルをそれぞれループしています。<br />
                        <br />
                        - 配列は、単純に1つずつ要素を取り出して表示しています。<br />
                        - 辞書型（オブジェクト）は、<strong>Object.entries()</strong>で[key, value]のペアに変換してからmapしています。<br />
                        - タプル型も、配列の一種なので、mapでループ可能です。<br />
                        <br />
                        このようにmapを使うことで、データを1つずつ取り出して簡単に表示することができます！
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MapLoopDemo;
