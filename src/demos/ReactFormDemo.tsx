import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Card,
    CardContent,
    Typography,
    Button,
    TextField,
    Box,
} from '@mui/material';
import { useSnackBanner } from '../components/Banner';
import styles from '../styles/demosStyles';

const CONTENT_NAME = "react-hook-form";

type FormData = {
    name: string;
    email: string;
};

const ReactFormDemo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const enqueueSnackbar = useSnackBanner();
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const onSubmit = (data: FormData) => {
        setSubmittedData(data);
        enqueueSnackbar("フォームが送信されました！");
    };

    return (
        <Box sx={styles.wrapper}>
            <Card sx={styles.card}>
                <CardContent>
                    <Typography sx={styles.mainTitle}>
                        {CONTENT_NAME}とは？
                    </Typography>

                    <Typography sx={styles.paragraph}>
                        react-hook-formは、Reactで簡単にフォームを管理・バリデーションできるライブラリです。
                        軽量で高速、シンプルな記述が特徴です。
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        基本的な使い方
                    </Typography>
                    <Typography sx={styles.codePre}>
                        {[
                            'import { useForm } from "react-hook-form";',
                            '',
                            'const { register, handleSubmit, formState: { errors } } = useForm();',
                            '',
                            'const onSubmit = (data) => { console.log(data); };',
                            '',
                            '<form onSubmit={handleSubmit(onSubmit)}>',
                            '  <input {...register("name", { required: true })} />',
                            '  <input type="submit" />',
                            '</form>',
                        ].join('\n')}
                    </Typography>

                    <Typography sx={styles.subTitle}>
                        デモ
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={styles.paper}>
                        <TextField
                            label="名前"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...register("name", { required: "名前は必須です" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />

                        <TextField
                            label="メールアドレス"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...register("email", {
                                required: "メールアドレスは必須です",
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: "正しいメールアドレスを入力してください"
                                }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <Button variant="contained" type="submit" sx={styles.button}>
                            送信する
                        </Button>
                    </Box>

                    {submittedData && (
                        <Box sx={styles.paper}>
                            <Typography sx={styles.paragraph}>
                                送信されたデータ:
                            </Typography>
                            <Typography sx={styles.paragraph}>
                                名前: {submittedData.name}
                            </Typography>
                            <Typography sx={styles.paragraph}>
                                メール: {submittedData.email}
                            </Typography>
                        </Box>
                    )}

                    <Typography sx={styles.subTitle}>
                        説明
                    </Typography>
                    <Typography sx={styles.paragraph}>
                        フォームの各フィールドに対して `register` を使って登録し、<br />
                        `handleSubmit`で送信処理を簡単に管理しています。<br />
                        また、バリデーションエラーは `errors` オブジェクトから取得して表示できます。<br />
                        react-hook-formを使うことで、バリデーション・データ取得・エラー表示をスッキリ書けるようになります！
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReactFormDemo;
