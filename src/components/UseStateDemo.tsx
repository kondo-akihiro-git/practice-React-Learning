import { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const UseStateDemo = () => {
    const [count, setCount] = useState(0); // 状態定義
    const handleClick = () => setCount(count + 1); // setCountを上に移動

    return (
        <Box display="flex" justifyContent="center" alignItems="center" px={2}>
            <Card sx={{ width: '100%', maxWidth: '900px', p: 2 }}>
                <CardContent>

                    {/* タイトル */}
                    <Typography variant="h5" gutterBottom>useStateとは？</Typography>

                    {/* 説明 */}
                    <Typography>
                        useStateはReactの状態管理フックです。値を保持し、変更できます。
                    </Typography>

                    {/* 定義方法 */}
                    <Typography sx={{ fontFamily: 'monospace', bgcolor: '#f4f4f4', p: 1, mb: 2 }}>
                        {`const [count, setCount] = useState(0);`}
                    </Typography>

                    {/* 実例 */}
                    <Typography variant="h6" sx={{ mt: 4 }}>実装コード</Typography>
                    <Typography component="pre" sx={{ backgroundColor: '#f4f4f4', p: 2, fontFamily: 'monospace' }}>
                        {`const [count, setCount] = useState(0);
const handleClick = () => setCount(count + 1);`}
                    </Typography>

                    {/* デモ */}
                    <Typography variant="h6" sx={{ mt: 4 }}>デモ</Typography>
                    <Typography gutterBottom>
                        現在のカウント: <strong>{count}</strong>
                    </Typography>
                    <Button variant="contained" onClick={handleClick}>+1する</Button>

                </CardContent>
            </Card>
        </Box>
    );
};

export default UseStateDemo;
