import React, { ReactNode, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material'
import usePopup from '@/hooks/usePopup'
import ConfirmPopup from '../popups/ConfirmPopup'

interface ModalProps {
    title?: string
    children: ReactNode
    actions?: boolean
    onSave?: () => void
    onCancel?: () => void
    isUpdate?: boolean
}

export default function Modal({
    title,
    children,
    actions = false,
    onSave,
    onCancel,
    isUpdate,
}: ModalProps) {
    const [handlePresent] = usePopup(
        <ConfirmPopup type={!isUpdate ? 'Save' : 'Update'} excute={onSave} />,
    )

    return (
        <Dialog open>
            <DialogTitle> {title} </DialogTitle>
            <DialogContent>{children}</DialogContent>
            {actions && (
                <DialogActions>
                    <Button onClick={handlePresent} sx={{ color: '#f79009' }}>
                        {!isUpdate ? 'Save' : 'Update'}
                    </Button>
                    <Button onClick={onCancel} sx={{ color: '#f79009' }}>
                        Cancel
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    )
}
