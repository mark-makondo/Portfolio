import { toast, type TypeOptions, type ToastOptions } from "react-toastify";

export const TOAST_TYPE = {
    SUCCESS: "success" as TypeOptions,
    ERROR: "error" as TypeOptions,
    WARNING: "warning" as TypeOptions,
    INFO: "info" as TypeOptions,
    DEFAULT: "default" as TypeOptions
};

export class ToastService {
    static createToast(message: string | React.ReactNode, type: TypeOptions = TOAST_TYPE.SUCCESS, options: Partial<ToastOptions> = {}): void {
        const toastOptions: ToastOptions = { type, ...options };
        toast(message, toastOptions);
        toast.clearWaitingQueue();
    }

    static success(message: string | React.ReactNode, options?: Partial<ToastOptions>) {
        this.createToast(message, TOAST_TYPE.SUCCESS, options);
    }

    static error(message: string | React.ReactNode, options?: Partial<ToastOptions>) {
        this.createToast(message, TOAST_TYPE.ERROR, options);
    }

    static warning(message: string | React.ReactNode, options?: Partial<ToastOptions>) {
        this.createToast(message, TOAST_TYPE.WARNING, options);
    }

    static info(message: string | React.ReactNode, options?: Partial<ToastOptions>) {
        this.createToast(message, TOAST_TYPE.INFO, options);
    }

    static default(message: string | React.ReactNode, options?: Partial<ToastOptions>) {
        this.createToast(message, TOAST_TYPE.DEFAULT, options);
    }
}

export default ToastService;
