import React from 'react';
import { Snackbar } from '@mui/material';

type BannerProps = {
    open: boolean;
    message: string;
    onClose: () => void;
};

const Banner: React.FC<BannerProps> = ({ open, message, onClose }) => {
    return (
        <Snackbar
            open={open}
            message={message}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            onClose={onClose}
            autoHideDuration={3000}
        />
    );
};

export default Banner;
