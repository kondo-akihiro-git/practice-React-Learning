import { useState } from 'react';
// import axios from 'axios';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "Axios / Fetch API"

const AxiosFetchDemo = () => {
    const enqueueSnackbar = useSnackBanner();

    const [data, setData] = useState<string | null>(null);

    // 擬似APIレスポンス
    const mockData = {
        message: "これは疑似的なAPIレスポンスです",
    };

    const handleFetchClick = async () => {
        enqueueSnackbar("Fetch APIを使って取得中...");
        const response = await new Promise((resolve) =>
            setTimeout(() => resolve({ json: () => mockData }), 1000)
        );
        const json = (response as any).json();
        setData(`[Fetch API] ${json.message}`);
    };

    const handleAxiosClick = async () => {
        enqueueSnackbar("Axiosを使って取得中...");
        const response = await new Promise((resolve) =>
            setTimeout(() => resolve({ data: mockData }), 1000)
        );
        setData(`[Axios] ${(response as any).data.message}`);
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        Webアプリでは、ユーザー情報や投稿データなどを外部のサーバー（バックエンドAPI）から取得して画面に表示する場面が多くあります。
                        そのようなときに活躍するのが、「<strong>Fetch API</strong>」と「<strong>Axios</strong>」という2つの方法です。
                        <br /><br />
                        どちらもJavaScriptで使えるライブラリ・APIで、<strong>ネットワークを通じて外部からデータを取得したり、送信する処理</strong>を簡単に書けるようになります。
                    </Typography>

                    <Typography sx={styles.subTitle}>基本的な使い方</Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// Fetch API',
                            'const response = await fetch(url);',
                            'const json = await response.json();',
                            '',
                            '// Axios',
                            'const response = await axios.get(url);',
                            'const data = response.data;',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>デモ</Typography>

                    <Box sx={styles.paper}>
                        <Button variant="contained" sx={styles.button} onClick={handleFetchClick}>
                            Fetch APIで取得
                        </Button>
                        <Button variant="contained" sx={{ ...styles.button, ml: 2 }} onClick={handleAxiosClick}>
                            Axiosで取得
                        </Button>

                        <Typography sx={{ ...styles.paragraph, mt: 3 }}>
                            取得結果: {data ?? "まだ取得されていません"}
                        </Typography>
                    </Box>

                    <Typography sx={styles.subTitle}>解説</Typography>
                    <Typography sx={styles.paragraph}>
                        <strong>Fetch API</strong> はブラウザ標準のAPIで、特別なライブラリをインストールせずに使えます。シンプルで軽量ですが、エラーハンドリングなど少し冗長になることがあります。
                        <br /><br />
                        一方で <strong>Axios</strong> は、人気のある外部ライブラリで、レスポンスの自動変換やタイムアウト設定、リクエスト/レスポンスのインターセプトなど、便利な機能が多く備わっています。
                        <br /><br />
                        実際の開発では、チームの方針やプロジェクトの規模によって使い分けることが多いです。
                        本番環境では、ログインユーザーの情報や、商品一覧、チャットメッセージなど、<strong>多種多様なデータをAPIでやりとりする</strong>ことになります。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AxiosFetchDemo;
