import { Card, CardContent, Typography, Box } from '@mui/material';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "React 初期環境構築";

const SetupDemo = () => {
    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        Reactのアプリケーションを開発するための初期セットアップ手順を説明します。
                        Node.js環境で`create-react-app`を用いて構築し、最終的にローカルサーバで動かします。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        構築手順（全てコマンド操作）
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            '// ① 作業ディレクトリに移動',
                            '$ cd ~/projects',
                            '',
                            '// ② プロジェクトディレクトリ作成（create-react-app 使用）',
                            '$ npx create-react-app my-react-app(ディレクトリ名) --template typescript',
                            '',
                            '// ③ ディレクトリに移動',
                            '$ cd my-react-app',
                            '',
                            '// ④ 開発サーバー起動',
                            '$ npm start',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        ディレクトリ構成（ネスト図）
                    </Typography>
                    <Typography sx={styles.paragraph}>
                    npx create-react-appコマンドで以下の構成が作成されます。<br/>
                    npxのアップデート状況次第では以下のディレクトリは変更される可能性がありますので、ご注意ください。
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'my-react-app/',
                            '├── node_modules/',
                            '├── public/',
                            '│   └── index.html        // ReactアプリのHTMLエントリーポイント',
                            '├── src/',
                            '│   ├── App.tsx           // メインアプリコンポーネント',
                            '│   ├── index.tsx         // ReactDOM.renderのエントリーポイント',
                            '│   └── components/       // 自作の再利用可能なコンポーネント',
                            '├── tsconfig.json         // TypeScriptの設定ファイル',
                            '└── package.json          // ライブラリとスクリプトの管理ファイル',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        この構成をもとにReactアプリを構築していきます。<br />
                        `src/` フォルダに主要なTypeScriptファイルが置かれ、`public/index.html` にReactがマウントされます。<br />
                        `npm start` を実行することで、ローカルの開発サーバ（通常 http://localhost:3000）が立ち上がります。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SetupDemo;
