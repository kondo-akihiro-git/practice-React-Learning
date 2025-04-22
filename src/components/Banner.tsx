import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

/**
 * カスタムバナー用フック
 * @returns enqueueSnackBanner - バナー表示関数（variantは 'info' で固定）
 */
export const useSnackBanner = () => {
    const { enqueueSnackbar } = useSnackbar();

    const enqueueSnackBanner = (message: string) => {
        enqueueSnackbar(message, {
            variant: 'info', // ここで固定
            anchorOrigin: { vertical: 'top', horizontal: 'left' },
            autoHideDuration: 3000,
        });
    };

    return enqueueSnackBanner;
};

// Providerをラップして使えるようにする（App.tsxなどで使う）
export const BannerProvider = SnackbarProvider;
