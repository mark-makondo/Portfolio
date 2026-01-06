export const createResource = (promise: Promise<any>) => {
    let status = "pending";
    let result: any;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );

    return {
        read() {
            if (status === "pending") throw suspender;
            if (status === "error") throw result;
            return result;
        }
    };
};
