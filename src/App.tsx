import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, TextField } from '@mui/material';
import UseStateDemo from './demos/UseStateDemo';
import styles from './styles/appStyles';

const hookButtons = [
  { label: 'useState', key: 'useState' },
  { label: 'useEffect', key: 'useEffect' },
  { label: 'useMemo', key: 'useMemo' },
  { label: 'useCallback', key: 'useCallback' },
  // 必要に応じて追加
];

function App() {
  const [selectedContent, setSelectedContent] = useState<string | null>('useState');
  const [searchText, setSearchText] = useState('');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedContent(newValue);
  };

  const renderDemo = () => {
    switch (selectedContent) {
      case 'useState':
        return <UseStateDemo />;
      // 今後追加
      default:
        return null;
    }
  };

  // 検索に応じてフィルター
  const filteredHooks = hookButtons.filter(({ label }) =>
    label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Typography variant="h5" align="center" gutterBottom>
        React 学習アプリ
      </Typography>

      {/* 🔍 検索バー */}
      <Box sx={{ mb: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="検索 (例: useState)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>

      {/* 🧭 タブリスト */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={selectedContent}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="hook tab list"
        >
          {filteredHooks.map(({ label, key }) => (
            <Tab key={key} label={label} value={key} />
          ))}
        </Tabs>
      </Box>

      {renderDemo()}
    </Container>
  );
}

export default App;
