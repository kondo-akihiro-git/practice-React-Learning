import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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

    const onSubmit: SubmitHandler<FormData> = (data) => {
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
                            'type FormData = {',
                            '  name: string;',
                            '  email: string;',
                            '};',
                            '',
                            'const { register, handleSubmit, formState: { errors } } = useForm<FormData>();',
                            'const enqueueSnackbar = useSnackBanner();',
                            'const [submittedData, setSubmittedData] = useState<FormData | null>(null);',
                            '',
                            'const onSubmit: SubmitHandler<FormData> = (data) => {',
                            '  setSubmittedData(data);',
                            '  enqueueSnackbar("フォームが送信されました！");',
                            '};',
                            '',
                            '<Box component="form" onSubmit={handleSubmit(onSubmit)}>',
                            '  <TextField',
                            '    label="名前"',
                            '    variant="outlined"',
                            '    fullWidth',
                            '    margin="normal"',
                            '    {...register("name", { required: "名前は必須です" })}',
                            '    error={!!errors.name}',
                            '    helperText={errors.name?.message}',
                            '  />',
                            '  <TextField',
                            '    label="メールアドレス"',
                            '    variant="outlined"',
                            '    fullWidth',
                            '    margin="normal"',
                            '    {...register("email", {',
                            '      required: "メールアドレスは必須です",',
                            '      pattern: {',
                            '        value: /^[^@]+@[^@]+\.[^@]+$/,',
                            '        message: "正しいメールアドレスを入力してください"',
                            '      }',
                            '    })}',
                            '    error={!!errors.email}',
                            '    helperText={errors.email?.message}',
                            '  />',
                            '  <Button type="submit">送信</Button>',
                            '</Box>'
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
                                送信されたデータ
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
                        このデモでは、<strong>react-hook-form</strong>を使ってフォームを管理し、バリデーションを簡単に設定しています。<br />
                        主に使われているのは以下の3つの関数です：<br />
                        <br />
                        - <strong>useForm()</strong>: フォーム管理のためのフックで、<strong>register</strong>、<strong>handleSubmit</strong>、<strong>errors</strong>を提供します。<br />
                        - <strong>register()</strong>: フォームの各入力フィールドをReact Hook Formに登録し、バリデーションルールを指定できます。<br />
                        - <strong>handleSubmit()</strong>: フォーム送信時の処理を簡単に管理します。<br />
                        - <strong>errors</strong>: バリデーションエラーがあれば、その情報を提供します。<br />
                        <br />
                        フォームの送信データを受け取る処理はonSubmitで行い、送信されたデータをコンポーネント内で表示しています。<br />
                        これにより、簡潔にフォームのデータ管理やバリデーションができ、Reactのフォームを扱う際に非常に便利です！
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ReactFormDemo;
