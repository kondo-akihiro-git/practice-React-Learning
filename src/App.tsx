// App.tsx（共通部分）✅ 変更不要
import { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import UseStateDemo from './components/UseStateDemo';

function App() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        React 学習アプリ
      </Typography>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={4}>
        <Button variant="contained" onClick={() => setSelectedContent('useState')}>useState</Button>
        <Button variant="outlined" onClick={() => setSelectedContent(null)}>クリア</Button>
      </Box>

      {/* ▼ 呼び出し箇所（切り替えパーツ） */}
      {selectedContent === 'useState' && <UseStateDemo />}
    </Container>
  );
}

export default App;
