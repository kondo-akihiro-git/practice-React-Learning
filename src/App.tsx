import React, { JSX, useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, TextField } from '@mui/material';
import Introduction from './utils/Introduction';
import UseStateDemo from './demos/UseStateDemo';
import styles from './styles/appStyles';

const hookButtons = [
  { label: 'Introduction', key: 'introduction' },
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

  const demoMap: Record<string, JSX.Element> = {
    introduction: <Introduction />,
    useState: <UseStateDemo />,
  };

  const renderDemo = () => demoMap[selectedContent!] || null;

  // 検索に応じてフィルター
  const filteredHooks = hookButtons.filter(({ label }) =>
    label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Box display="flex" justifyContent="center" mb={2}>
        <img
          src="/ReactTitleIcon.png"
          alt="React Title Icon"
          style={{ height: 50 }} // 適宜サイズ調整
        />
      </Box>

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
            <Tab key={key} label={label} value={key} sx={{ textTransform: 'none' }}/>
          ))}
        </Tabs>
      </Box>

      {renderDemo()}
    </Container>
  );
}

export default App;
