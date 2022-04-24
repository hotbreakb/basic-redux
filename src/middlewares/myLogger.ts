const myLogger = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    const result = next(action);
    console.log('\t', store.getState());
    return result;
}

export default myLogger;