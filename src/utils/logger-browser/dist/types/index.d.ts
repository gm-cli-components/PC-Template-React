declare class Logger {
    info: (msg: string, msg2?: string | undefined) => void;
    success: (msg: string, msg2?: string | undefined) => void;
    warn: (msg: string, msg2?: string | undefined) => void;
    error: (msg: string, msg2?: string | undefined) => void;
    network: (msg: string, msg2?: string | undefined) => void;
}
export default Logger;
