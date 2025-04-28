import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {
    Card,
    CardContent,
    Typography,
    Box,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "ReactApexChart";

// データ定義（ここを編集するだけで簡単にグラフ変更可能）
const chartOptions: any = {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: ['1月', '2月', '3月', '4月', '5月']
    },
    title: {
        text: "月別売上推移",
        align: 'center',
    }
};

const chartSeries = [
    {
        name: "売上",
        data: [30, 40, 35, 50, 49]
    }
];

const pieOptions: any = {
    labels: ['1月', '2月', '3月', '4月', '5月'],
    title: {
        text: "月別売上割合",
        align: 'center',
    }
};

const pieSeries = [30, 40, 35, 50, 49];


const ReactApexChartDemo = () => {
    const enqueueSnackbar = useSnackBanner();
    const [options] = useState(chartOptions);
    const [series] = useState(chartSeries);

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        ReactApexChartは、美しいインタラクティブなチャートを簡単に作成できるライブラリです。
                        売上推移やユーザー数など、時系列やカテゴリーごとのデータ可視化に役立ちます。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            "import ReactApexChart from 'react-apexcharts';",
                            "",
                            "// 棒グラフや折れ線グラフ用",
                            "const options = {",
                            "  chart: { id: 'basic-bar' },",
                            "  xaxis: { categories: ['1月', '2月', '3月', '4月', '5月'] },",
                            "  title: { text: '月別売上推移', align: 'center' },",
                            "};",
                            "const series = [",
                            "  { name: '売上', data: [30, 40, 35, 50, 49] }",
                            "];",
                            "",
                            "// 円グラフ用",
                            "const pieOptions = {",
                            "  labels: ['1月', '2月', '3月', '4月', '5月'],",
                            "  title: { text: '月別売上割合', align: 'center' },",
                            "};",
                            "const pieSeries = [30, 40, 35, 50, 49];",
                            "",
                            "<ReactApexChart options={options} series={series} type='bar' height={350} />",
                            "<ReactApexChart options={options} series={series} type='line' height={350} />",
                            "<ReactApexChart options={pieOptions} series={pieSeries} type='pie' height={350} />"
                        ].join('\n')}
                    </Typography>


                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box sx={styles.paper}>
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="bar"
                            height={350}
                        />
                    </Box>

                    <Box sx={styles.paper}>
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="line"
                            height={350}
                        />
                    </Box>

                    <Box sx={styles.paper}>
                        <ReactApexChart
                            options={pieOptions}
                            series={pieSeries}
                            type="pie"
                            height={350}
                        />
                    </Box>

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        上記のチャートは「月別売上推移」や「売上割合」を表示するデモです。<br />
                        各チャートの設定は以下のように構成されています：
                        <ul>
                            <li><strong>options</strong>: グラフ全体の設定。x軸のラベルやタイトルを定義します。</li>
                            <li><strong>series</strong>: 表示するデータ本体。配列形式で複数シリーズにも対応可能。</li>
                            <li><strong>type</strong>: グラフの種類。'bar'（棒）、'line'（線）、'pie'（円）など。</li>
                            <li><strong>height</strong>: グラフの高さをピクセル単位で指定。</li>
                        </ul>
                        このように、ReactApexChartでは設定ファイルの値を差し替えるだけで、
                        チャートの種類や表示内容を柔軟に切り替えることが可能です。
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReactApexChartDemo;
