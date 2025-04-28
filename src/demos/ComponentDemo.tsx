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

// 子コンポーネントをインポート
import ChildA from '../components/ChildA';
import ChildB from '../components/ChildB';
import ChildC from '../components/ChildC';

const CONTENT_NAME = "コンポーネント";

const ComponentDemo = () => {
    const enqueueSnackbar = useSnackBanner();
    const [currentChild, setCurrentChild] = useState<string>("A");

    const handleSwitch = (child: string) => {
        setCurrentChild(child);
        enqueueSnackbar(`${child}を表示しました`);
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        コンポーネントは、画面をパーツ単位で管理・再利用できる仕組みです。
                        小さな部品を組み合わせて、大きなアプリを作ります。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            "import ChildA from './components/ChildA';",
                            "import ChildB from './components/ChildB';",
                            "import ChildC from './components/ChildC';",
                            "",
                            "const [currentChild, setCurrentChild] = useState('A');",
                            "",
                            "const handleSwitch = (child: string) => {",
                            "  setCurrentChild(child);",
                            "};",
                            "",
                            "{currentChild === 'A' && <ChildA />} // 引数なし",
                            "{currentChild === 'B' && <ChildB />} // 引数なし",
                            "{currentChild === 'C' && <ChildC message='メッセージ' />} // 引数あり"
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box sx={styles.paper}>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button variant="contained" onClick={() => handleSwitch("A")} sx={styles.button}>
                                ChildAを表示
                            </Button>
                            <Button variant="contained" onClick={() => handleSwitch("B")} sx={styles.button}>
                                ChildBを表示
                            </Button>
                            <Button variant="contained" onClick={() => handleSwitch("C")} sx={styles.button}>
                                ChildCを表示
                            </Button>
                        </Box>

                        <Box sx={{ marginTop: 2 }}>
                            {currentChild === "A" && <ChildA />}
                            {currentChild === "B" && <ChildB />}
                            {currentChild === "C" && <ChildC message="これはChildCです。" />}
                        </Box>
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        このデモでは、3つのボタンを使って子コンポーネントを切り替え表示しています。<br />
                        <ul>
                            <li><b>ChildA</b>: 引数なしのコンポーネント</li>
                            <li><b>ChildB</b>: 引数なしのコンポーネント</li>
                            <li><b>ChildC</b>: 引数ありのコンポーネント（propsでメッセージを渡す）</li>
                        </ul>
                        コンポーネントは用途に応じて引数（props）を受け取るか決めて、必要に応じて使い分けましょう。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ComponentDemo;
