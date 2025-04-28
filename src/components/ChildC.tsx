import { Typography } from '@mui/material';

type ChildCProps = {
    message: string;
};

const ChildC = ({ message }: ChildCProps) => {
    return <Typography>{message}（引数あり / 親コンポーネントからmessageが受け渡されました）</Typography>;
};

export default ChildC