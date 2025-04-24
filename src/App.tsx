import React, { JSX, useCallback, useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, TextField } from '@mui/material';
import Introduction from './utils/Introduction';
import SetupDemo from './demos/SetupDemo';
import UseStateDemo from './demos/UseStateDemo';
import UseEffectDemo from './demos/UseEffectDemo';
import UseMemoDemo from './demos/UseMemoDemo';
import UseCallbackDemo from './demos/UseCallbackDemo';
import AxiosFetchDemo from './demos/AxiosFetchDemo';
import ReactApexChartDemo from './demos/ReactApexChartDemo';
import styles from './styles/appStyles';
import { BannerProvider } from './components/Banner';
import ReactApexChart from 'react-apexcharts';


const hookButtons = [
  { label: 'Introduction', key: 'introduction' },
  { label: '環境構築', key: 'setup' },
  { label: 'useState', key: 'useState' },
  { label: 'useEffect', key: 'useEffect' },
  { label: 'useMemo', key: 'useMemo' },
  { label: 'useCallback', key: 'useCallback' },
  { label: 'Axios / Fetch', key: 'AxiosFetch' },
  { label: 'ApexChart', key: 'ApexChart' },
];

function App() {
  const [selectedContent, setSelectedContent] = useState<string | null>('introduction');
  const [searchText, setSearchText] = useState('');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedContent(newValue);
  };

  const demoMap: Record<string, JSX.Element> = {
    introduction: <Introduction />,
    setup: <SetupDemo />,
    useState: <UseStateDemo />,
    useEffect: <UseEffectDemo />,
    useMemo: <UseMemoDemo />,
    useCallback: <UseCallbackDemo />,
    AxiosFetch: <AxiosFetchDemo />,
    ApexChart: <ReactApexChartDemo/>
  };

  const renderDemo = () => demoMap[selectedContent!] || null;

  // 検索に応じてフィルター
  const filteredHooks = hookButtons.filter(({ label }) =>
    label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <BannerProvider maxSnack={5} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
    <Container maxWidth="md" sx={styles.container}>
      <Box display="flex" justifyContent="center" mb={2}>
        <img
          src="/ReactTitleIcon.png"
          alt="React Title Icon"
          style={{ height: 50 }} 
        />
      </Box>

      <Box sx={{ mb: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="検索 (例: useState)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>

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
    </BannerProvider>
  );
}

export default App;
