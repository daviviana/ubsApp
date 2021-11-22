export class ModalConfig {
    modalTitle: string | undefined
    dismissButtonLabel?: string | undefined
    closeButtonLabel?: string | undefined
    shouldClose?(): Promise<boolean> | boolean
    shouldDismiss?(): Promise<boolean> | boolean
    onClose?(): Promise<boolean> | boolean
    onDismiss?(): Promise<boolean> | boolean
    hideCloseButton: boolean | undefined
    hideDismissButton: boolean | undefined
    mustRefresh: boolean | undefined
}